/*
* Craftyslide
* Created by: Abid Din - http://craftedpixelz.co.uk
* This adaptation by Cole Panike - https://github.com/colepanike
* Version: 1.2
* Copyright: Crafted Pixelz
* License: MIT license
* Updated: 6th Feb 2014
*/

(function ($) {
    $.fn.craftyslide = function (options) {

        // Defaults
        var defaults = {
            "width": 600,
            "height": 300,
            "pagination": true,
            "fadetime": 350,
            "delay": 5000
        };

        var options = $.extend(defaults, options);

        return this.each(function () {

            // Vars
            var $this = $(this);
            var $slides = $this.find("ul li");
            var timeout;

            $slides.not(':first').hide();

            
            $.fn.exists = function () {
                return this.length !== 0;
            };

            // Pagination
            function paginate() {
                $this.append("<ol id='pagination' />");
                
                var i = 1;
                $slides.each(function () {
                    $(this).attr("id", "slide" + i);
                    $("#pagination").append("<li><a href='#slide" + i + "'>" + i + "</a></li>");
                    i++;
                });
                
                $("#pagination li a:first").addClass("active");
            }

            // Add captions
            function captions() {
                $slides.each(function () {
                    $caption = $(this).find("img").attr("title");
                    if ($caption !== undefined) {
                        $(this).prepend("<p class='caption'>" + $caption + "</p>");
                    }
                    $slides.filter(":first").find(".caption").css("bottom", 0);
                });
            }

            // Manual mode
            function manual() {
                var $pagination = $("#pagination li a");
                $pagination.click(function (e) {
                    e.preventDefault();
                    if(options.delay !== false){
                        clearTimeout(timeout);
                        autoPaginate();
                    }
                    var $current = $(this.hash);
                    if ($current.is(":hidden")) {
                        $slides.fadeOut(options.fadetime);
                        $current.fadeIn(options.fadetime);
                        $pagination.removeClass("active");
                        $(this).addClass("active");
                        $(".caption").css("bottom", "-37px");
                        $current.find(".caption").delay(300).animate({
                            bottom: 0
                        }, 300);
                    }
                });
            }

            // Auto mode
            function auto() {
                setTimeout(function () {
                    $slides.filter(":first-child").fadeOut(options.fadetime).next("li").fadeIn(options.fadetime).end().appendTo("#slideshow ul");

                    $slides.each(function () {
                        if ($slides.is(":visible")) {
                            $(".caption").css("bottom", "-37px");
                            $(this).find(".caption").delay(300).animate({
                                bottom: 0
                            }, 300);
                        }
                    });
                    auto();
                }, options.delay);
            }
            
            function autoPaginate(){
                var $firstPagination = $("#pagination li").first().children("a");
                var $curPagination;
                var $nextPagination;
                $(document).ready(function autoRotatePagination() {
                    timeout = setTimeout(function () {
                        $curPagination = $("#pagination li a.active");
                        $nextPagination = $curPagination.parent().next("li").children("a");
                        if(!$nextPagination.exists()){
                            $nextPagination = $firstPagination;
                        }
                        var $current = $($nextPagination.attr('href')); 
                        if ($current.is(":hidden")) {
                            $slides.fadeOut(options.fadetime);
                            $current.fadeIn(options.fadetime);
                            $curPagination.removeClass("active");
                            $nextPagination.addClass("active");
                            $(".caption").css("bottom", "-37px");
                            $current.find(".caption").delay(300).animate({
                                bottom: 0
                            }, 300);
                        }
                        autoRotatePagination();
                    }, options.delay);
                });
            }; 
            
            // Width
            $this.width(options.width);
            $this.find("ul, li img").width(options.width);

            // Height
            $this.height(options.height);
            $this.find("ul, li").height(options.height);

            // Check Boolean values
            if (options.pagination === true) {
                paginate();
                if(options.delay !== false){
                    autoPaginate();
                }
            } else {
                auto();
            }

            captions(); manual();

        });
    };
})(jQuery);
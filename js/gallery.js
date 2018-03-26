(function($){  

    $.fn.labGallery = function(params) {       
        
        var element = this,
            timeOut = 5000,
            current = null,
            currentIndex = 0,
            timeOutFn = null,
            faderStat = true,
            mOver = false,
            items = $(this).find("img, .labGalleryImage"),
            itemsSpan = $(this).find("span"),
            n = items.length;
        

        items.mouseover(function() {
            mOver = true;
        }).mouseout(function() {
            mOver = false;
            fadeElement(true);
        });

        var fadeElement = function(isMouseOut) {
            var thisTimeOut = (isMouseOut) ? (timeOut/2) : timeOut;
            thisTimeOut = (faderStat) ? 10 : thisTimeOut;
            if(n > 0) {
                timeOutFn = setTimeout(buildGallery, thisTimeOut);
            }
        }
        
        var buildGallery = function() {
            current = (current != null) ? current : items[(items.length-1)];
            // var currentIndex = jQuery.inArray(current, items) + 1
            currentIndex = (currentIndex == n - 1) ? 0 : currentIndex;

            if(faderStat && !mOver) {
                $(items[currentIndex]).fadeIn((timeOut/6), function() {
                    if($(itemsSpan[currentIndex]).css('bottom') == 0) {
                        $(itemsSpan[currentIndex]).slideUp((timeOut/6), function() {
                            faderStat = false;
                            current = items[currentIndex];
                            if(!mOver) fadeElement(false);
                        });
                    } else {
                        $(itemsSpan[currentIndex]).slideDown((timeOut/6), function() {
                            faderStat = false;
                            current = items[currentIndex];
                            if(!mOver) fadeElement(false);
                        });
                    }
                });
            } else {
                if(!mOver) {
                    if($(itemsSpan[currentIndex]).css('bottom') == 0) {
                        $(itemsSpan[currentIndex]).slideDown((timeOut/6), function() {
                            $(items[currentIndex]).fadeOut((timeOut/6), function() {
                                faderStat = true;
                                current = items[++currentIndex];
                                if(!mOver) fadeElement(false);
                            });
                        });
                    } else {
                        $(itemsSpan[currentIndex]).slideUp((timeOut/6), function() {
                        $(items[currentIndex]).fadeOut((timeOut/6), function() {
                                faderStat = true;
                                current = items[++currentIndex];
                                if(!mOver) fadeElement(false);
                            });
                        });
                    }
                }
            }
        }
        
        buildGallery();

    };  

})(jQuery);  
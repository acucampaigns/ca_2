/**
 * Authors : Sunny Jhunjhunwala (sunny@dreamtek.tv) | pete Savory (pete@dreamtek.tv)
 * Created on : 9:51:56 AM, JUN 04, 2014
 * @file : This file holds all basic JS features throughout the site.
 */

// Adding Array.prototype.filter for legacy browsers like =<IE8.

if (!Array.prototype.filter)
{
    Array.prototype.filter = function(fun /*, thisArg */)
    {
        "use strict";

        if (this === void 0 || this === null)
            throw new TypeError();

        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function")
            throw new TypeError();

        var res = [];
        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for (var i = 0; i < len; i++)
        {
            if (i in t)
            {
                var val = t[i];
                if (fun.call(thisArg, val, i, t))
                    res.push(val);
            }
        }

        return res;
    };
}
// Jquery document ready.
$(document).ready(function() {
    // Smooth Scrolling code.
    $('.arrows a, #navbar-collapse-1 a').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    // this triggers change of client images when user scroll to the clients part.
    setTimeout(function() {
        jQuery(function() {
            var clientInterval = null;
            var oTop = jQuery('#clients').offset().top - window.innerHeight;
            jQuery(window).scroll(function() {
                var pTop = jQuery('html, body').scrollTop();
                if ((pTop > oTop) && clientInterval === null) {
                    toggleClientImages();
                    clientInterval = true;
                }
            });
        });
    }, 1000);

    // total no of client logos.
    var total_elem = image_array.length;
    // Total no of logos currenlty displayed.
    var total_displaying_elem = 8;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    /**
     * Function to change client images dynamically.
     */
    function toggleClientImages() {
        // Changing client logo randomly every 1 sec.
        setInterval(function() {
            var current_elem = [];
            var temp_array = [];
            // getting ids of all images currently present
            $.each($(('.client-images img')), function(index, value) {
                current_elem.push(parseInt($(value).attr('data-image-sl')));
            });
            // Getting ids of all images array.
            for (var i = 0; i < total_elem; i++) {
                temp_array.push(i);
            }
            // Removing duplicates between two arrays.
            temp_array = temp_array.filter(function(val) {
                return current_elem.indexOf(val) === -1;
            });
            // Selecting a random item from the new array.
            var elem = temp_array[getRandomInt(0, temp_array.length)];
            // Selecting a random position.
            var pos = getRandomInt(1, (total_displaying_elem));
            // Replacing with new item.
            $('.client-images:nth-child(' + pos + ') img').fadeOut(function() {
                $(this).attr('src', image_array[elem]).attr('data-image-sl', elem).fadeIn();
            });
        }, 4000);
    }


    $('form[name=info-form]').submit(function(e) {
        var form = $(this);
        e.preventDefault();
        $.ajax({
            url: form.attr('action'),
            type: 'post',
            dataType: 'json',
            data: form.serialize(),
            success: function(response) {
                if (response.error) {
                    $.each(response.error, function(key, value) {
                        $(form).find('*[name=' + key + ']').addClass('error');
                    });
                }
                else {
                    $(form).parent().empty().html('<div id="thankYou">Thank you, we will be in touch shortly</div><script type="text/javascript">ga("send", "pageview", "/contact-complete");</script>');
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert('Unable to submit form. textStatus: ' + textStatus + " errorThrown: " + errorThrown);
            }
        });
    });

    $('input[type=text], select, textarea').focus(function() {
        $(this).removeClass('error');
    });

    $('input[type=text]').focus(function() {
        if ($(this).val() == $(this).data('alt')) {
            $(this).val('');
        }
    });

    $('input[type=text]').blur(function() {
        if ($(this).val() == '') {
            $(this).val($(this).data('alt'));
        }
    });
    
    $('.fancybox').fancybox();
});

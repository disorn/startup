/**
 * Created by itawfik on 6/11/16.
 */
$(document).ready(function() {
    $('a[href="#navbar-more-show"], .navbar-more-overlay').on('click', function(event) {
        event.preventDefault();
        $('body').toggleClass('navbar-more-show');
        if ($('body').hasClass('navbar-more-show'))	{
            $('a[href="#navbar-more-show"]').closest('li').addClass('active');
        }else{
            $('a[href="#navbar-more-show"]').closest('li').removeClass('active');
        }
        return false;
    });
});

$(function () {
    $("#addcomment").click(function () {
        $("#postComment").show("slow");
    });
});
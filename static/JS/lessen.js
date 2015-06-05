/**
 * Created by giles on 5/06/2015.
 */

var main = function() {
    $('.vak').click(function () {

        $('.description').hide();
        $(this).children('.description').show();
    });
}
$(document).ready(main);

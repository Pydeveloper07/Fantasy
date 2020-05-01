$(document).ready(function(){
    /* Prevent Default Events */
    function pde(e) {
        if (e.preventDefault)
            e.preventDefault();
        else
            e.returnValue = false;
    }
    /* WOW */
    var wow = new WOW();
    wow.init();

});

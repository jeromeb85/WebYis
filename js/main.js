$(document).ready(function(){
    $(".item").click(function(){ myFunction(); });
});
       
       function myFunction() {
//            $(".item").hide()
//              $(".barmenu").append("<li><a href=\"#about\">TEST</a></li>");
                $.get( "ajax.php", { q : "rrr"} ).done(function( data ) {
                    alert( "Data Loaded: " + data );
                });
        }
        
//        function(){
//        $(this).hide();
//    }
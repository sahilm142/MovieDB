var title = "";
$("#moviename").on("click", "a", function(){
    console.log($(this).text());
     //title = $(this).text();
});
//alert("Conn");

$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        //Grabbing new todo text from input
       var newUrl = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span></span> " + newUrl  + " <i class='fa fa-thumbs-up''> <i class='fa fa-thumbs-down'></i></i></li>");
    }
});

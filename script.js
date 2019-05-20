var pos = $("img").offset();
console.log(pos);
$("body").keydown(function(event){
   if(event.which === 37) {
         $(".CS").offset({top:125,left:30});
         //left
    }  
    else if(event.which === 39) { 
        $(".CS").offset({top:125,left:525});
        //right
}
}); 
 
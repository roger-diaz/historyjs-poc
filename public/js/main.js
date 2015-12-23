(function($, window){

  $('a[data-toggle="tab"]').on("click", function(){
  	var id = $(this).data("id");
  	History.pushState({view: id}, id, "/csx-threats-and-controls/" + id);
  });

  window.addEventListener("popstate", function(e) {

   if(console && console.log) {
	  console.log(e.state);
   }

  });


})(jQuery, window);
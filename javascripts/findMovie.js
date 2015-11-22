define(function (require) {

	return {

		findMovie: function () {
			
			$("#find-movie").on("click", function() {

			console.log("find-movie working");

				//need to get the value of move title
				var title = $("#new-movie").val();
				console.log("title", title);

				//search the api for the title
				$.ajax({
				  type: "GET",	
			      url: "http://www.omdbapi.com/?" + "t=" + title + "&y=&plot=shorta&r=json",
			      dataType: "json"
			    })
			    .done(function(titleData) {
			    	
			    	var idNum = titleData["imdbID"];
			    	console.log(titleData);
			    	console.log(idNum);
			    	
			    	//puts the img url into an object so it can be passed into the handlebars template
					var posterObject= { poster : "http://img.omdbapi.com/?i=" + idNum + "&apikey=7c212437" };
					console.log(posterObject)
			    	require(["hbs!../templates/newMovies"], function(posterTemplate) {
	  			 
	  			 	$("#content").prepend(posterTemplate(posterObject));
	  			 });
			    	
	  			 
	  			 	})	     
			
			    
			});
		}
	};




	

			    


				


			



  




		
	















//end of module
});
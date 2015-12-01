define(function (require) {
	var firebase = require("firebase");
	var getNewMovie = require("findMovie");
	 var Q = require("q");


return {

	newMovie: function(){
	


	console.log();

		

		$("body").on("click", ".add-button", function (){
		
		var ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/");
		console.log("ref", ref);
		var user = ref.getAuth();

		var uid = user.uid;
		ref = ref.child(uid);
			console.log("heart clicked");
			var findTitle = $(this).attr("id");
			console.log(findTitle);

			console.log(getNewMovie.getMovie(findTitle));

			getNewMovie.getMovie(findTitle).then(function(data) {
				console.log(data);
				
				var newMovie = {

				title: data["Title"],
				actors: data["Actors"],
				year: data["Year"],
				poster: data["Poster"],
				plot: data["Plot"],
				id: data["imdbID"],
				unwatched: "true",
				rating: 0
				
				
			};

			ref.push(newMovie);


			})
			
			


			
			
			
			$(this).parent().remove();

				//end of click function
			    });

			//end of newMovie()
			}
		//end of return
		};
	
});
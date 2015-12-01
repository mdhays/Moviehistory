define(function (require) {
	var $ = require("jquery");
	var firebase = require("firebase");
	
			$("body").on("click", ".delete", function() {
			ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/");
			
			var user = ref.getAuth();
			var userID = user.uid;

			
			ref = ref.child(userID);
			var movieKey = $(this).attr("id");
			ref = ref.child(movieKey);
			console.log("delete key", movieKey);
			

			ref.once("value", function(snapshot){

				var snapshotObject = snapshot.val();
				console.log(snapshotObject);

				
				//this is an attempt to archive the code
				var archiveRef = new Firebase("https://mbt-movie-history.firebaseio.com/users/");
				console.log(snapshotObject);
				var user = archiveRef.getAuth();
				var userID = user.uid;
				archiveRef = new Firebase("https://mbt-movie-history.firebaseio.com/users/" + userID + "/archive");
				archiveRef.push(snapshotObject);

				require(["hbs!../templates/allMovies"], function(posterTemplate) {
	  			 
	  			 		$("#content").html(posterTemplate(snapshotObject));

	  			 			});
				ref.remove();
			});	
						
  				});
//end of module
});

		


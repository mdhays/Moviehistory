define(function (require) {
	var $ = require("jquery");
	var firebase = require("firebase");
	
			$("body").on("click", ".delete", function() {
			var ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/");
			
			var user = ref.getAuth();
			var userID = user.uid;
			
			ref = ref.child(userID);
			

			ref.on("value", function(snapshot){

				var snapshotObject = snapshot.val();
				console.log(snapshotObject);

				
				//this is an attempt to archive the code
				var archiveRef =  ref + "/archive";

				archiveRef.push(snapshotObject);

				require(["hbs!../templates/allMovies"], function(posterTemplate) {
	  			 
	  			 		$("#content").html(posterTemplate(snapshotObject));

	  			 			});
			});			
  				});
//end of module
});

		


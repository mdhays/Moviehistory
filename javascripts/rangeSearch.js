define(function (require) {
	var firebase = require("firebase");
	var _ = require("lodash");
	var $ = require("jquery");
	var slider = require("slider");
	var cat = $("#ex8");
	$("#ex8").slider({tooltip: 'always'});


	$(".search-rating").on("change", function (){


			var rangeVal = $(this).val();
			console.log(rangeVal);

							

				console.log("Range works", $(this).val());
			ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/");
			
			var user = ref.getAuth();
			var userID = user.uid;
			
			ref = ref.child(userID);
			
			ref.on("value", function(snapshot){

				var snapshotObject = snapshot.val();
				console.log(snapshotObject);
				if (rangeVal === "0") {

				require(["hbs!../templates/unwatched"], function(posterTemplate) {
	  			 
	  			 		$("#content").html(posterTemplate(snapshotObject));

	  			 		});
					};
				if (rangeVal === "1") {

				require(["hbs!../templates/one"], function(posterTemplate) {
	  			 
	  			 		$("#content").html(posterTemplate(snapshotObject));

	  			 		});
					};
				if (rangeVal === "2") {

				require(["hbs!../templates/two"], function(posterTemplate) {
	  			 
	  			 		$("#content").html(posterTemplate(snapshotObject));

	  			 		});
					};
				if (rangeVal === "3") {

				require(["hbs!../templates/three"], function(posterTemplate) {
	  			 
	  			 		$("#content").html(posterTemplate(snapshotObject));

	  			 		});
					};
				if (rangeVal === "4") {

				require(["hbs!../templates/four"], function(posterTemplate) {
	  			 
	  			 		$("#content").html(posterTemplate(snapshotObject));

	  			 		});
					};
				if (rangeVal === "5") {

				require(["hbs!../templates/five"], function(posterTemplate) {
	  			 
	  			 		$("#content").html(posterTemplate(snapshotObject));

	  			 		});
					};
				if (rangeVal === "6") {

				require(["hbs!../templates/six"], function(posterTemplate) {
	  			 
	  			 		$("#content").html(posterTemplate(snapshotObject));

	  			 		});
					};				
				if (rangeVal === "7") {

				require(["hbs!../templates/seven"], function(posterTemplate) {
	  			 
	  			 		$("#content").html(posterTemplate(snapshotObject));

	  			 		});
					};
				if (rangeVal === "8") {

				require(["hbs!../templates/eight"], function(posterTemplate) {
	  			 
	  			 		$("#content").html(posterTemplate(snapshotObject));

	  			 		});
					};
				if (rangeVal === "9") {

				require(["hbs!../templates/nine"], function(posterTemplate) {
	  			 
	  			 		$("#content").html(posterTemplate(snapshotObject));

	  			 		});
					};				
				if (rangeVal === "10") {

				require(["hbs!../templates/ten"], function(posterTemplate) {
	  			 
	  			 		$("#content").html(posterTemplate(snapshotObject));

	  			 		});
					};





		});	//end of .done();
	});
});
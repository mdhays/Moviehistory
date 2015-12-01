define (function(require) { 
   var $ = require("jquery");
    var firebase = require("firebase");

$("body").on("click", ".star10", function(){


        console.log("star10 clicked")

        ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/")
            
            var user = ref.getAuth();
            var userID = user.uid;
            var movieKey = $(this).attr("id");
            console.log("this is", this)
            ref = ref.child(userID);
            ref = ref.child(movieKey);
            ref.update({rating: 10, ten: "true" });

    });
$("body").on("click", ".star9", function(){


        console.log("star9 clicked")

        ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/")
            
            var user = ref.getAuth();
            var userID = user.uid;
            var movieKey = $(this).attr("id");
            console.log("this is", this)
            ref = ref.child(userID);
            ref = ref.child(movieKey);
            ref.update({rating: 9, nine: "true" });

    });

$("body").on("click", ".star8", function(){


        console.log("star8 clicked")

        ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/")
            
            var user = ref.getAuth();
            var userID = user.uid;
            var movieKey = $(this).attr("id");
            console.log("this is", this)
            ref = ref.child(userID);
            ref = ref.child(movieKey);
            ref.update({rating: 8, eight: "true" });

    });
$("body").on("click", ".star7", function(){


        console.log("star7 clicked")

        ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/")
            
            var user = ref.getAuth();
            var userID = user.uid;
            var movieKey = $(this).attr("id");
            console.log("this is", this)
            ref = ref.child(userID);
            ref = ref.child(movieKey);
            ref.update({rating: 7, seven: "true" });

    });

$("body").on("click", ".star6", function(){


        console.log("star6 clicked")

        ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/")
            
            var user = ref.getAuth();
            var userID = user.uid;
            var movieKey = $(this).attr("id");
            console.log("this is", this)
            ref = ref.child(userID);
            ref = ref.child(movieKey);
            ref.update({rating: 6, six: "true" });

       


    });

    $("body").on("click", ".star5", function(){


        console.log("star5 clicked")

        ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/")
            
            var user = ref.getAuth();
            var userID = user.uid;
            var movieKey = $(this).attr("id");
            console.log("this is", this)
            ref = ref.child(userID);
            ref = ref.child(movieKey);
            ref.update({rating: 5, five: "true" });

       


    });
$("body").on("click", ".star4", function(){


        console.log("star4 clicked")

        ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/")
            
            var user = ref.getAuth();
            var userID = user.uid;
            var movieKey = $(this).attr("id");
            console.log("this is", this)
            ref = ref.child(userID);
            ref = ref.child(movieKey);
            ref.update({rating: 4, four: "true" });

       


    });
$("body").on("click", ".star3", function(){


        console.log("star3 clicked")

        ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/")
            
            var user = ref.getAuth();
            var userID = user.uid;
            var movieKey = $(this).attr("id");
            console.log("this is", this)
            ref = ref.child(userID);
            ref = ref.child(movieKey);
            ref.update({rating: 3, three: "true" });

       


    });
$("body").on("click", ".star2", function(){


        console.log("star2 clicked")

        ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/")
            
            var user = ref.getAuth();
            var userID = user.uid;
            var movieKey = $(this).attr("id");
            console.log("this is", this)
            ref = ref.child(userID);
            ref = ref.child(movieKey);
            ref.update({rating: 2, two: "true" });

       


    });
$("body").on("click", ".star1", function(){


        console.log("star1 clicked")

        ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/")
            
            var user = ref.getAuth();
            var userID = user.uid;
            var movieKey = $(this).attr("id");
            console.log("this is", this)
            ref = ref.child(userID);
            ref = ref.child(movieKey);
            ref.update({rating: 1, one: "true" });

       


    });













   });//end of module
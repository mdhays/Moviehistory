require.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'firebase': '../lib/bower_components/firebase/firebase',
    'q': '../lib/bower_components/q/q',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'es6': '../lib/bower_components/requirejs-babel/es6',
    'babel': '../lib/bower_components/requirejs-babel/babel-5.8.22.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});
require(
  ["dependencies", "splashview", "findMovie", "authentication", "newMovies", "deleteMovie","addWatched", "watchedView", "allView", "unwatchedView", "modalView", "starRating", "favoriteView"], 
  function(_$_,  splashview, findMovie, authentication, newMovies, deleteMovies, addWatched, watchedView, allView, unwatchedView, modalView, starRating, favoriteView) {
    
    splashview.splashViewDisplay();

    findMovie.findMovie();

    newMovies.newMovie();

  


     $("body").on("click", "#logInButton", function(){
        console.log("Login clicked");
        var userEmail = $("#userEmail").val();
        console.log(userEmail);
        var userPassword = $("#userPassword").val();
        console.log(userPassword);
        authentication.login(userEmail, userPassword);
      
    });
     $("body").on("click", "#registerButton", function(){
        console.log("Login clicked");
        var userEmail = $("#userEmail").val();
        console.log(userEmail);
        var userPassword = $("#userPassword").val();
        console.log(userPassword);
        authentication.newUser(userEmail, userPassword);
      
    });
     $("body").on('click', "#logOut", function() {
            
            authentication.logOut();
            splashview.splashViewDisplay();

   });
  });

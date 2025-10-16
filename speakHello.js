(function(window){
  // Create an object for the hello speaker and expose it to the global scope
  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function(name){
    console.log(speakWord + " " + name);
  };

  // Optional: return the greeting string instead of logging (useful if needed)
  helloSpeaker.speakSimple = function(name){
    return speakWord + " " + name;
  };

  // Expose to global
  window.helloSpeaker = helloSpeaker;
})(window);

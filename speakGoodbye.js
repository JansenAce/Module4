(function(window){
  // Create an object for the bye speaker and expose it to the global scope
  var byeSpeaker = {};
  var speakWord = "Goodbye";

  byeSpeaker.speak = function(name){
    console.log(speakWord + " " + name);
  };

  // Optional: return the greeting string instead of logging (useful if needed)
  byeSpeaker.speakSimple = function(name){
    return speakWord + " " + name;
  };

  // Expose to global
  window.byeSpeaker = byeSpeaker;
})(window);

(function(window){
  // The names array for the assignment
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var firstLetter = name.charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      // If name starts with 'j' or 'J' say "Goodbye"
      byeSpeaker.speak(name);
    } else {
      // Otherwise say "Hello"
      helloSpeaker.speak(name);
    }
  }
})(window);

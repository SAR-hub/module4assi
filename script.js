(function(){
    var names=["sarah","amna","Johny","Samantha","Edward","Jack"];
    for (var i=0;i<names.length;i++){
      var firstletter= names[i].charAt(0).toLowerCase();
      if (firstletter==="j"){
        goodbyeSpeaker.speak(names[i]);
      }
      else{
        helloSpeaker.speak(names[i]);
      }
    }
})();

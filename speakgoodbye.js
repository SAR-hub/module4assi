(function(window){
    var goodbyeSpeaker={};
    var speakWord="Goodbye";

    goodbyeSpeaker.speak=function(names){
        console.log(speakWord+" "+names);

    }
    window.goodbyeSpeaker=goodbyeSpeaker;
})(window);
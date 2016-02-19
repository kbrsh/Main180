$(document).ready(function(){
   
 $('.notify').on('click',function(){
    var titles = ["Linkin Park rocks!","Random Notifications","LOL","Who cares?","Add some more randomness?","Chicka Chicka Slim Shady"];
    var randomTitle = titles[Math.floor(Math.random()*titles.length )];
    var texts = ["Yeah I too know it!","Cool. Isn't it?","Rock on!","Whoo-Hoo!"];
    var randomText = texts[Math.floor(Math.random()*texts.length )];
    var sounds = ["http://www.soundboard.com/mediafiles/nj/NjU2NjI4MzAzNjU2NjY5_Y3dIxncplRM.mp3","http://www.soundboard.com/mediafiles/mt/MTQ1MzI4MzAzMTQ1Mzgw_jwPFPnna9_2bs.mp3","http://www.soundboard.com/mediafiles/nt/NTQ1MDI4MzAzNTQ1MTAy_dwzld8d_2bgns.mp3","http://www.soundboard.com/mediafiles/nz/NzQwNTI4MzAzNzQwNjYy_kBcusJP8Xn8.mp3","http://www.soundboard.com/mediafiles/ot/OTMyNzI4MzAzOTMyODcw_NMqvL5T7WDk.mp3","http://www.soundboard.com/mediafiles/ot/OTk2MDI4MzAzOTk2MTM1_DnPXh8vBVT4.mp3","http://www.soundboard.com/mediafiles/nd/NDQ4NjI4MzAzNDQ4NzM3_OaUqBeWA5Lw.mp3","http://www.soundboard.com/mediafiles/mz/Mzk0NTI4MzAzMzk0NTQ1_HTv5bcI_2bnTA.mp3","http://www.soundboard.com/mediafiles/mt/MTU0NTI4MzAzMTU0NTM2_HiXgqyBOWNg.mp3","http://www.soundboard.com/mediafiles/mj/MjY1ODI4MzAzMjY1OTA2_H2_2fv8Mbml4A.mp3"];
    var randomSound = sounds[Math.floor(Math.random()*sounds.length )];
    
    
    
    Notification.requestPermission(function(log) {
      if (log = "granted") {
         var n = new Notification( randomTitle,{ 
            body: randomText,
            icon :"http://i55.tinypic.com/2egd7v8.png"
         });
         n.addEventListener("show", function() {
            var audio = new Audio(randomSound);
        		audio.play();
            },false);
         }
      });
   });
});

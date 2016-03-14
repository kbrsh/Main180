var answers = ['What happened to Jews caught in or near Jerusalem after the 2nd Revolt', 'Yohanan ben Zaccai founded a school in what city', 'What are rabbis', 'Why did Jewish migration through the Mediterranean increase', 'What are the rabbis responsible for', 'Yohanan ben Zaccai\'s school taught what two things', 'Jews were forced to move unvoluntarily due to what', 'What religious place became important', 'Why did Jews have a 2nd Revolt', 'Around what time did the 2nd Revolt occur'];
        var vocabwords = ['Drake', 'Taylor Swift', 'Adele', 'Britney Spears', 'Nicki Manaj', 'Iggy Azalea', 'Demi Lovato', 'Morgan Freeman', 'Adam Sandler', 'Silento', 'Eminem', 'Katy Perry', 'Michael Jackson', 'Elvis Presley', 'Jennifer Lopez', 'Justin Bieber', 'Will.i.am', 'Ariana Grande', 'Ellie Goulding', 'Beyonce', 'Rihanna', 'Madonna', 'Miley Cyrus', 'Bruno Mars', 'Selena Gomez'];
        document.getElementById('answerButton').onclick = function() {
          var answer = answers[Math.floor(Math.random() * answers.length)]
          var vocab = vocabwords[Math.floor(Math.random() * vocabwords.length)];
          document.getElementById('answerContainer').innerHTML = "Question - " + answer + "?";
          document.getElementById('answerContainer1').innerHTML = "In the voice of - " + vocab + "!";
        };

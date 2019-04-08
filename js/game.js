// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "heart.mp3",
    background_image: "la.jpg",
    levels: {

        start: {
            message: "You've been offered a 6 figure modeling contract ",
            choices: [
                {
                    text: "I'm moving to Hollywood",
                    nextLevel: "hollywood",
                },

                {
                    text: "I'd rather work on my degree and be practical..",
                    nextLevel: "boring",
                },
            ]
        },

        hollywood: {
            background_image: "giphy.gif",
            music: "baby.mp3",
            message: "You're a success! Billionare tycoon wants to marry you",
            choices: [
                {
                    text: "Marry the man!",
                    nextLevel: "downfall",
                },
                                {
                    text: "Work on your acting career!",
                    nextLevel: "good",
                },
            ]
        },

        boring: {
            message: "Boring. Have fun w that.",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    downfall: {
            music: "o.mp3",
            message: "He wants you to get plastic surgery!",
            background_image: "botox.jpg",
            choices: [
                {
                    text: "I like being ugly. It's fun.",
                    nextLevel: "boring4",
                },
                {
                    text: "Do it. He got $$$ baby",
                    nextLevel: "drugs",
    },
            ]
        },
 drugs: {
            music: "get.mp3",
            message: "The painful surgeries led to a vicodin and valium addiction!",
            background_image: "yo.gif",
            choices: [
                {
                    text: "Go cold turkey",
                    nextLevel: "uh",
                },
                {
                    text: "Go to rehab",
                    nextLevel: "better",
    },
            ]
        },
uh: {
            music: "hun.mp3",
            message: "5 years later, you're out of work and stripping to supply your drug addiction",
            background_image: "lana.gif",
            choices: [
                {
                    text: "Try going to rehab",
                    nextLevel: "better",
                },
                {
                    text: "Your dealer has a half off sale. Treat yourself.",
                    nextLevel: "death",
    },
            ]
        },
        
death: {
            music: "carmen.mp3",
            message: "Rest in Peace. You've been forgotten.",
            background_image: "dead.gif",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
                
            ]
        },
good: {
            music: "o.mp3",
            message: "You land a good role, but you're too round",
            background_image: "botox.jpg",
            choices: [
                {
                    text: "They're crazy!",
                    nextLevel: "boring2",
                },
                {
                    text: "A little lipo never hurt",
                    nextLevel: "drugs",
    },
            ]
        },
 boring2: {
            music: "preg.mp3",
            message: "You were successful anyway, but you're pregnant",
            background_image: "cry.gif",
            choices: [
                {
                    text: "Keep the baby",
                    nextLevel: "end2",
                },
                {
                    text: "What about my figure?!",
                    nextLevel: "end",
    },
            ]
        },
better: {
            music: "happy.mp3",
            message: "Congrats! You're a drug free superstar, well done.",
            background_image: "happy.gif",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                },
            ]
        },
end2: {
            music: "aye.mp3",
            message: "You had to take care of your child, so you moved back out to get your degree.",
            background_image: "baby.gif",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                
    },
            ]
        },
end: {
            music: "uy.mp3",
            message: "it's been 20 years, you find out your son is in jail and into drugs",
            background_image: "cloud.gif",
            choices: [
                {
                    text: "not my problem",
                    nextLevel: "awful",
                },
                {
                    text: "least i could do",
                    nextLevel: "better3",
    },
            ]
        },
awful: {
            music: "gb.mp3",
            message: "The media reveals how awful you are. Career ruined. Bye.",
            background_image: "los.gif",
            choices: [
                {
                    text: "start over",
                    nextLevel: "start",
                },
            ]
        },
better3: {
            music: "happy.mp3",
            message: "Congrats! You and your son are back, and you're a superstar!",
            background_image: "happy.gif",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                },
            ]
        },
boring4: {
            music: "uy.mp3",
            message: "He's dead, and he left nothing in his will",
            background_image: "court.jpg",
            choices: [
                {
                    text: "Sue the children",
                    nextLevel: "boring6",
                },
                 {
                    text: "Write a false book about your husband in hopes of sympathy and attention",
                    nextLevel: "boring7",
                },
            ]
        },
boring6: {
            music: "preg.mp3",
            message: "You lost and you later died of accidental overdose",
            background_image: "chris.gif",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
                
            ]
        },
boring7: {
            music: "hun.mp3",
            message: "Your book is a hit!",
            background_image: "marina.gif",
            choices: [
                {
                    text: "Settle down and have kids",
                    nextLevel: "better8",
                },

                 {
                    text: "Go party and have fun!",
                    nextLevel: "boring9",
                },
            ]
        },
better8: {
            music: "happy.mp3",
            message: "Congrats! You have a son, AND you're a rich superstar!",
            background_image: "happy.gif",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                },
            ]
        },

boring9: {
            music: "get.mp3",
            message: "You have a pill popping addiction",
            background_image: "yo.gif",
            choices: [
                {
                    text: "Go cold turkey",
                    nextLevel: "uh",
                },
                {
                    text: "Go to rehab",
                    nextLevel: "better",
    },
            ]
        },
    }
    

};

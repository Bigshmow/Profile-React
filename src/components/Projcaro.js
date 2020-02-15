import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
    "alt": "RPS",
    "src": "https://i.imgur.com/gbhMutZ.jpg",
    "header": "Rock Paper Scissors",
    "link": "https://bigshmow.github.io/RockPaperScissors",
    "git": "https://github.com/Bigshmow/RockPaperScissors "
},
{
    "alt": "Psychic",
    "src": "https://i.imgur.com/SmYMQja.jpg",
    "header": "Psychic Game",
    "link": "https://bigshmow.github.io/Psychic-Game",
    "git": "https://github.com/Bigshmow/Psychic-Game "
},
{
    "alt": "WordGuess",
    "src": "https://i.imgur.com/eIwj7pL.jpg",
    "header": "Word Guess Game",
    "link": "https://bigshmow.github.io/WordGuessGame",
    "git": "https://github.com/Bigshmow/WordGuessGame "
},
{
    "alt": "Crystal",
    "src": "https://i.imgur.com/Iv7iF4f.jpg",
    "header": "Crystal Collector Game",
    "link": "https://bigshmow.github.io/unit-4-game",
    "git": "https://github.com/Bigshmow/unit-4-game "
},
{
    "alt": "Trivia",
    "src": "https://i.imgur.com/TjlGK1O.jpg",
    "header": "Trivia Game",
    "link": "https://bigshmow.github.io/TriviaGame",
    "git": "https://github.com/Bigshmow/TriviaGame "
},
{
    "alt": "GifTastic",
    "src": "https://i.imgur.com/Q0zdUfP.jpg",
    "header": "GifTastic",
    "link": "https://bigshmow.github.io/GifTastic",
    "git": "https://github.com/Bigshmow/GifTastic "
},
{
    "alt": "TrainGame",
    "src": "https://i.imgur.com/tS2GCny.jpg",
    "header": "Train Scheduler",
    "link": "https://bigshmow.github.io/Train_Scheduler",
    "git": "https://github.com/Bigshmow/Train_Scheduler "
},
{
    "alt": "C2K",
    "src": "https://i.imgur.com/DeXcXe3.jpg",
    "header": "Cart to Kitchen",
    "link": "https://zuzanav.github.io/cart-to-kitchen",
    "git": "https://github.com/Zuzanav/cart-to-kitchen "
},
{
    "alt": "LIRI",
    "src": "https://i.imgur.com/X5kBcw3.jpg",
    "header": "LIRI Bot",
    "link": "https://github.com/Bigshmow/liri-node-app",
    "git": "https://github.com/Bigshmow/liri-node-app "
},
{
    "alt": "Bamazon",
    "src": "https://i.imgur.com/DeekWNz.jpg",
    "header": "Bamazon App",
    "link": "https://github.com/Bigshmow/Bamazon",
    "git": "https://github.com/Bigshmow/Bamazon "
},
{
    "alt": "FriendFinder",
    "src": "https://i.imgur.com/wssuTAF.jpg",
    "header": "FriendFinder",
    "link": "https://agile-everglades-82324.herokuapp.com",
    "git": "https://github.com/Bigshmow/FriendFinder "
},
{
    "alt": "EatDaBurger",
    "src": "https://i.imgur.com/KwldKui.jpg",
    "header": "EatDaBurger",
    "link": "https://eatdaburger-bigshmow.herokuapp.com",
    "git": "https://github.com/Bigshmow/burger "
},
{
    "alt": "Click Game",
    "src": "https://i.imgur.com/vgqXfck.jpg",
    "header": "Click Match Game",
    "link": "https://bigshmow.github.io/Clicky-state-game",
    "git": "https://github.com/Bigshmow/Clicky-state-game "
}

]

const Projcaro = () => <UncontrolledCarousel items={items} />;

export default Projcaro;
![CI logo](favicon.ico)

# Music Nataion Game



Music Notation game is a site that hopes to help users learn to read very basic music notations while playing the game and having fun. 

## UX

On opening the web site users are presented with a nav bar, a footer and main body with a title and large play button which will initiate a game. This approach was taken to avoid too many conponent presented at the first signt so that it will be clear what action need to be taken as a very first step to play the game.

This is the steps a user will take to play the game.

1. After the page is loaded, a user has three main choices which are:

    * Visit How To Play page by clicking the menu in the navigation bar.

    * Display popup windoww with all music notations used in the game and corresponding alphabet names by pressing HINT button located in the center of the navagation bar. This HINT window can be accessed during the game if a user wants to see the image.

    * Press large play button to start the game. By pressing this button, start button desappears and the gaming panel will display, allowing user to engage with the game.
    Following discribe how the game works.
    

      * Countdown timer will start couting down from 60 seconds.
      * An image with one notaion is displayed 
      * A user need to find a right alphabet for the notation image and press the correcponding key under the image panel.
      * If the answer is correct, "Correct" word becomes green to notify the user. If the answer given is worng, word "Wrong" will turn red for one second.
      * Another image will be dislayed and a user will try to get as many correct answers to obtain points during 60 seconds.
      * When the countdown timer turns zero, popup window is displayed to notify the user about the game completion with the final score.
      * The final score is recorded to the Last Score section so that a user can see it in the next game and try to beat the score of thier last played game.
      * Timer and score are reset and image a user can start again.
      * A user can press reset button located beside timer to cancel the game and return to start page.

## Features

The web page cousisis of two pages, one for playing the game and other for instruction on how to play the game.
Both pages have almost idential navigation bar and footer, with HINT button added in the navigation bar only in the main gaming(index) page.


### Game page 

### Title and big start button.

This big start button is the only thing a user can see in the main page body besides titile. This approach was taken so that the first action required to be taken is clear to the users. 

### The Game Area
It concisits of image display area and key buttons. 
Once the start button is ramdom image of 1 note will be displayed from total of 7 images.
7 buttons each have an alphabet for the image are located on the keybord layout.
A user will try to press the right key for the image displayed and increase their score.

### The score Area
The score area displays the score for the current game, also the score from the last game so that a user can try to improve their skill in each game.

### How to Play page
This page is created to provide instructions on how to play the game.
A user can read this page to understand how the game works prior to starting their game.

#### Features Left to Implement

Initial intention for the game was to have corresponding sound when the randomly selected image was displayed and also when a user pressed the alphabet button. However nature of the game being speedy, the solution to play audio consistently could not be implemented at this time.

## Testing

This site was tested with number of ways to ensure the game function works and has clear procedure that is easy to understand for every user.


Initial disgn on wireframe was to have all the conponents displayed all the time. This layout presented two major issues, one that pressing start button many times causing timer to diplay multipul countdown values, and other pressing alphabet key can gain points before starting a game.
These errors were rectified by hiding game panel until the game is started and hide the start button and replaced by small reset button once the game is started.

### Validating code
No errors were returned when passing through the official W3C validator

No errors were found when passing through the official (Jigsaw) validator

No major issues were returned by https://jshint.com/

## Deployment
This site was published in GitHub.
Following in the procedure taken to deploy this page.
1. Log in to GitHub
2. Open the repositry that is created for this website.
3. Open setting page within the repository.
4. Navigate to the page tab
5. Change the branch from None to Master.
6. Website link i provided, copy the link and paste it onto link section in my repository page. This is the link to the published site[https://mwmlln.github.io/ms2_music_notation_game/]

## Credits



#### Coding

https://www.youtube.com/watch?v=AHh57PrdQsA  This YouTube tutorial has helped me to creat the countdown timer.
https://stackoverflow.com/  For using clearing interal for the countdown Timer.


### Content

### Media

Color theme was choosen from this site https://coolors.co/cfcfea-a89b9d-816c61-575a4b-2a2c24

##### Music clef and notaion image  https://illustimage.com/


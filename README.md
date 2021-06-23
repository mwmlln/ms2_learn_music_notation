![CI logo](favicon.ico)

# Music Notation Game


## The goal for this site
Music Notation game is a site that hopes to help users learn to read very basic music notations while playing a game and having fun. 

Ability to read music notations is a ley to play musical instrument but learing to read them can be boring and time consuming. This game hopes to make the process enjoyable.

![Responsive Mockup](assets/images/readme_ss/responsive_ss.jpg)

## UX

### **Target Audience**

This game is created for anyone who wants to get familiar with music notations while they have fun playing game. The game has buttons inside the keyboard layout so users can get familiar with music notation name also positions of the key.

### **Project Goals**
This site's goal is to make the process of learning to read music notation enjoyable.

On opening the web site users are presented with a nav bar, a footer and main body with a title and large play button which will initiate a game. This approach was taken to avoid too many component presented at the first sight so that it will be clear what action need to be taken as a very first step to play the game.

This is the steps a user will take to play the game.

*  After the page is loaded, a user has three main choices which are:

    1  Visit How To Play page by clicking the menu in the navigation bar.

    2  Display popup window with all music notations used in the game and corresponding alphabet names by pressing HINT button located in the centre of the navigation bar. This HINT window can be accessed during the game if a user wants to see the image.

    3   Press large play button to start the game. By pressing this button, the start button disappears and the gaming panel will display, allowing user to engage with the game.
    Following describe general game process once the start button is pressed.
    
      * Countdown timer will start counting down from 60 seconds.
      * An image with one notation is displayed 
      * A user need to find a right alphabet for the notation image and press the corresponding key under the image panel.
      * If the answer is correct, "Correct" word becomes green to notify the user. If the answer given is wrong, word "Wrong" will turn red for one second instead.
      * Another image will be displayed. A user will repeat the previous process and try to get as many correct answers to obtain points during 60 seconds.
      * When the countdown timer turns zero, popup window is displayed to notify the user about the game completion with the final score.
      * The final score is recorded in the Last Score section so that a user can refer their previous score in the next game and try to get better score.
      * Once the user press OK button in the popup window, the timer and score are reset back to default value. Gaming panel disappears and large start button is present again, ready for another game.
      * A user can press reset button located beside timer during the game to cancel the game and return to start page.

## Features

The web page consists of two pages, one for playing the game and other for instruction on how to play the game.
Both pages have almost identical navigation bar and footer, with HINT button added in the navigation bar only in the main gaming(index) page.

![nav bar ](assets/images/readme_ss/nav_ss.jpg) 

![nav bar ](assets/images/readme_ss/footer_ss.jpg) 


### Game page 


![Main game page](assets/images/readme_ss/index_opening_ss.jpg)

### Title and big start button.

This big start button is the only thing a user can see in the main page body besides title. This approach was taken so that the first action required to be taken is clear to the users. 


### The Game Area

It consists of image display area and key buttons. 
Once the start button is random image of 1 note will be displayed from total of 7 images.
7 buttons each have an alphabet for the image are located on the keyboard layout.
A user will try to press the right key for the image displayed and increase their score.

![Main game page](assets/images/readme_ss/game_ss.jpg) 

### The score Area

The score area displays the score for the current game, also the score from the last game so that a user can try to improve their skill in each game.

![Main game page](assets/images/readme_ss/score_ss.jpg)  

### **HINT** popup window

The button to display a popup window is located in the navigation bar in the gaming page.
This window contains a image with all notaions and alphabets used for the game. 

![nav bar ](assets/images/readme_ss/hint_window_ss.jpg)  

### How to Play page
This page is created to provide instructions on how to play the game.
A user can read this page to understand how the game works prior to starting their game.

![How To Play Page](assets/images/readme_ss/howto_ss.jpg)  

#### Features Left to Implement

Initial intention for the game was to have corresponding sound when the randomly selected image was displayed and also when a user pressed the alphabet button. However nature of the game being speedy, the solution to play audio consistently could not be implemented at this time.

## Testing

This site was tested with number of ways to ensure the game function works and has clear procedure that is easy to understand for every user.


Initial design on wireframe was to have all the components displayed all the time. This layout presented two major issues, one that pressing start button many times causing timer to display multiple countdown values, and other pressing alphabet key can gain points before starting a game.
These errors were rectified by hiding game panel until the game is started and hide the start button and replaced by small reset button once the game is started.

### Validating code
No errors were returned when passing through the official W3C validator

No errors were found when passing through the official (Jigsaw) validator

No major issues were returned by https://jshint.com/

## Deployment
This site was published in GitHub.
Following in the procedure taken to deploy this page.
1. Log in to GitHub
2. Open the repository that is created for this website.
3. Open setting page within the repository.
4. Navigate to the page tab
5. Change the branch from None to Master.
6. Website link is provided, copy the link and paste it onto link section in my repository page. This is the link to the published site[https://mwmlln.github.io/ms2_music_notation_game/]

## Credits



#### Coding

https://www.youtube.com/watch?v=AHh57PrdQsA  This YouTube tutorial has helped me to create the countdown timer.
https://stackoverflow.com/  For using clearing inteinterval for the countdown Timer.


### Content

### Media

Color theme was chosen from this site https://coolors.co/cfcfea-a89b9d-816c61-575a4b-2a2c24

Music clef and notaion image  https://illustimage.com/


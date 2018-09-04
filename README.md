# This project is terminated, due to better solutions.
## Quest Notifier PoGo
### What is this?
It´s a platform with the qoal to bring the Pokémon Go community together. Help eachother to find where the best quests is hiding.
### Good to know
To add this project to your town, you will need to no JavaScript code, and it doesn't hurt to be familiar to "npm" and "Node JS". And to know the basics of "Socket.io".
### Start example
#### 1. To start this you will need to insall:
* npm: [https://www.npmjs.com/](https://www.npmjs.com/)
* Node JS: [https://nodejs.org/en/](https://nodejs.org/en/)
#### 2. Download this respetory from GitHub
#### 3. Start sever
**Windows**
1. Doubble klick "startserver.bat".

**Mac/Linux**
1. Right click foler "quest-notifier-pogo".
2. Select open in terminal.
3. Write "node ." in the terminal window.
#### 4. Watch the magic!
In the terminal window a link will appear, use eather the local host or IP and open the link in the webbrowser.
### Make it you own
In "public/script/pokestop_lund.js" you will find all the Pokéstops that the platform handles.
If you want to rename this file you will have to change it in "public/index.html", in the code:
```
<script src="script/pokestop_lund.js" type="text/javascript"></script>
```
To reffer to a Pokéstop we use the JSON syntax. And you will need to fins out Pokéstop name and coordinates. Like so:
```
{"namn": "Pokestop name", "latitude": 55.710167, "longitude": 13.187168},
```
Best way to get this data is trough: [https://www.pokemongomap.info/](https://www.pokemongomap.info/).

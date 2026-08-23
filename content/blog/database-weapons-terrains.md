---
title: "Database, Weapons, Terrains"
date: 2020-08-06
description: "Sorry for the long length of time between posts! I've done a lot in the past month, and a lot of my time was occupied because I am moving to Chicago in the next two weeks, so there has been a lot of preparation…"
draft: false
---

Sorry for the long length of time between posts! I've done a lot in the past month, and a lot of my time was occupied because I am moving to Chicago in the next two weeks, so there has been a lot of preparation (apartment shopping, furniture, utilities, etc). Nonetheless, I've been working diligently on a few things.

I've made some good progress on my game! I've removed health bars temporarily, but I've added weapons (which will display text when hovered over) and now enemies will spawn within certain zones. The player can walk up to a weapon, pick it up, and start slashing at bad guys. I've also added some basic UI elements, just as a start. I also started to work on a surrounding terrain for the game's map (I am very, very not good at using Unity's terrain tools, so that was a struggle), which right now looks very plain but I plan on turning it into a green, low-poly terrain using Blender.

::clip{src-path="/images/terrain.mp4" alt="Terrain"}
::

I also started and completed another project in the past month. Recently I've gotten back into collecting Pokemon cards, something I did very casually as a child. I got all my cards together (and bought some new ones!) and decided to enter them all into an Excel document. I recorded the information as shown below, cataloging each card's stats, year, attributes, and value. I thought that these older cards would be pretty valuable, but that was not the case. Oh well.

![Excel](/images/excel.PNG)

After finishing the database of cards in Excel (a term I use loosely, because I chose not to use SQL for this), I used Python and the library openpyxl to read the database. I was able to create a few useful scripts, like one that gave overall statistics about the database and another that checked how many Pokemon I had caught out of the total list of Pokemon (or the "Pokedex"). Then, I used the library Tkinter to create a simple GUI for a script that allows a user to search through the database for specific cards, as shown below.

![Database](/images/database.png)

Hope you enjoyed and thanks for reading!

—Josh

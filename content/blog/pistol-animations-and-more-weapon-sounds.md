---
title: "Pistol Animations and More Weapon Sounds"
date: 2023-05-06
description: "TODO-JOSH"
draft: false
---

Hello,

The last couple of weeks have been busy for me, but I still found some time to work on my FPS. I have a few essential pieces that I wanted to finish up before I move on to my next phase here, which would be finally putting everything together on a playable level. I think at that point, I’ll finally be able to start tweaking things and creating a “core gameplay loop” that feels fun.

One of the big things I focused on last week was modifying the arm asset I have been using for the player so that it fits the pistol better (the arm asset I am using is from [TheKiwiCoder's Enemy AI series](https://www.youtube.com/playlist?list=PLyBYG1JGBcd009lc1ZfX9ZN5oVUW7AFVy)). To do that, I had to open up the .fbx file in [Blender](https://www.blender.org/) and re-educate myself on how to model (it’s been a sec!). I eventually re-familiarized myself with edges, vertices, and faces, and I was able to modify the arm asset so that I could make the fingers curl and fit around the handle of the pistol better. I also had to add an index finger to the hand so it could be placed in front of the pistol’s trigger.

![Curled arm](/images/curled_arm.png)

From there, I attached this modified right arm and a left arm to the pistol, and created animations running, lowering the weapon, raising the weapon, and reloading, same as the other weapons. I’m pretty satisfied with how the arms look on the pistol, and I’m glad I went through the effort to customize the right hand.

Aside from the pistol animations, I made a few smaller additions as well. I implemented some more weapon noises, including a “dry fire” sound effect that plays when you fire a weapon that has no bullet in the chamber. I also added more weapons to the enemies, who were previously only using the M4 weapon. I modified the relevant scripts so that they now detect which weapon is active on the enemy and then use the correct assets relative to that weapon, such as the proper raycast point, muzzle flash, and offset coordinates for how the weapon sits on the enemy’s back and hands. This makes it easy for me to just activate whichever weapon I want the particular enemy to be using in the hierarchy, and then the game does the rest.

::youtube{id="BzU6BklEGn8"}
::

I’m pretty excited, because now it’s time to put a level together! I’m going to find a cool pack of polygonal terrain and assets to build a level with, and start setting up enemies that will patrol the area for my player to get into firefights with. I want to put all the ingredients in the stew and see how it tastes, and go from there 😊

—Josh

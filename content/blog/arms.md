---
title: "Arms!"
date: 2023-04-18
description: "The day has finally arrived: The player in my FPS game is no longer possessing his gun with non-existent hands, and instead I now have two arms that hold the weapons and animate along with them!"
draft: false
---

Happy Tuesday,

The day has finally arrived: The player in my FPS game is no longer possessing his gun with non-existent hands, and instead I now have two arms that hold the weapons and animate along with them! It’s definitely added some life to the game, and I feel like I’m getting closer to being ready to set up some levels for the player to conquer.

At first, I wanted to try creating a fully animating character model for the player instead of just a pair of arms. I experimented with a platform called [Mixamo](https://www.mixamo.com/#/), which has tons of character models and animations that are all very plug-and-play, so you can integrate them all with each other pretty easily (and you can implement the animations with other 3D character models outside of Mixamo, too). While I do think I will be making use of Mixamo in future projects, I decided against a full character model for my player, mainly because I thought it would be difficult to integrate these animations with the weapons which I have already animated separately. The only way you could “see” this character model anyway would be by seeing the player’s shadow, so the benefit to me seemed pretty minimal given the amount of time and energy it would have taken at this juncture to implement the full model.

So instead, I used the same character model I had been using for the enemy, and I opened up its .fbx file in [Blender](https://www.blender.org/) and ripped off its arms! (Or rather, I ripped the body off the arms). I created two models, one for the left and right arms respectively, so I could more easily manipulate the two as separate objects. In Unity, I actually didn’t have just one pair of arms, but instead a pair of arms for each separate weapon. By making the arms a child object of the weapon, it would cause them to inherit a lot of the other things occurring on the weapon, i.e. when the weapon experiences recoil, the arms would “kick up” as the weapon kicks up. In short, it makes more sense to pair the arms with the weapon instead of the player’s body, since the arms really follow what the weapon does.

![Arms](/images/arms.gif)

From there, it was pretty simple to animate the arms to follow along with a weapon’s animations. When the weapon would be lowered, raised, reloaded, etc., I moved the arms to new positions on the same keyframes where the weapon moved; this created simple animations that look great for this low-poly world. One weapon that I still have to work on is the pistol, since it’s smaller than a rifle and the current arm models have hands that are too clunky to make holding a pistol look good. I’m going to experiment in Blender with curling the fingers on the arms models, so that way the pair of arms attached to the pistol will be easier to work with and will look more realistic.

From there, I think it’s time to put some levels together and see how it feels, and adjust as I go to make the game feel more fun! As always, thanks for stopping by.

—Josh

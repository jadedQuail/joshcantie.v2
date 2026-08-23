---
title: "Playing with Blender"
date: 2020-06-27
description: "Over the last few days I've been familiarizing myself with the basics of Blender. I watched and followed a few tutorials of Grant Abbitt, whose videos are absolutely brilliant (If you're looking to learn about Blender…"
draft: false
---

Over the last few days I've been familiarizing myself with the basics of Blender. I watched and followed a few tutorials of Grant Abbitt, whose videos are absolutely brilliant (If you're looking to learn about Blender or animation in general, please check him out at his website [https://www.gabbitt.co.uk/](https://www.gabbitt.co.uk/) or his YouTube channel [here](https://www.youtube.com/user/mediagabbitt).

I decided to get my feet wet by making a simple model and to start animating it. I have plans for a 3D game in Unity that I want to make; I've really enjoyed playing Diablo III this year and I want to make something in that style. So to start, my goals were to make a simple model, animate it, make it move with a mouse click, and make the animations respond to the player's movement.

This (below) is the simple model that I made in Blender:

![Samurai 2](/images/samurai_2.png)

After modeling this figure - not much effort, it's pretty boxy - I had to create an armature so I would be able to move the limbs and make some simple animations. Below is a gif of me in the process of making a walk cycle:

::clip{src-path="/images/walk_anim.mp4" alt="Walk anim"}
::

The absolute hardest part of the last few days was figuring out how to import Blender models and animations to Unity and making them work. There was a lot of trouble with making sure the orientation and size of the model transfered to Unity in a way that made sense. But, after a lot of fiddling around, I was able to get the model into Unity, hook up a NavMesh Agent to it, and get it moving and animating at the proper times:

::clip{src-path="/images/sun_test.mp4" alt="Sun test"}
::

So, with all that finished, I think I will focus my efforts on Unity for the next few days and get some enemies in my game for the player to fight with.

—Josh

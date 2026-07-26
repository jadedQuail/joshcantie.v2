---
title: "Progress Report"
date: 2024-03-28
description: "TODO-JOSH"
draft: false
---

Hello,

Back again. Sorry, going to apologize once again for the longer-than-planned delay on making a blog post. I can say that I have been hard at work on a lot of things with my game, though, so I am going to use this blog post as a sort of "state of the union" for Corridors (or rather, "state of the game"). 😉

To put it simply, the main two things I've done in the last two months is 1.) created a much larger level and 2.) refined how my enemies attack the player. On the first front, my plan after implementing most of the functionality for the core gameplay loop was always to then create a much larger level to be the template for how the game's levels would work going forward. While I've not really done large-scale level design for my game projects before, it is something that I really like to do and I feel like it comes naturally to me (related but unrelated, I really like Minecraft and I have built some pretty big maps before, check out my [castle](https://www.youtube.com/watch?v=-GtXke-Eym0) in my portfolio!). I'm enjoying the freedom of crafting my own world, and I've made some pretty good progress on a large map that I'm casually calling "the purple level" for now. Still a work in progress, but I have some images below that show off some of the rooms of this larger level:

![This is the main room for combat in the level (so far).](/images/purple_level_1.png)

*This is the main room for combat in the level (so far).*

![This room is right below the room in the previous image. I plan to add some greenery everywhere!](/images/purple_level_2.png)

*This room is right below the room in the previous image. I plan to add some greenery everywhere!*

![A glance at the main hallway that will connect all the other rooms of the level.](/images/purple_level_3.png)

*A glance at the main hallway that will connect all the other rooms of the level.*

Creating these larger rooms was the impetus for the second thing I needed to address, which was the current logic of enemy behavior. Once I put 10+ enemies in one giant room, it made the flaws of my overly-simplistic AI behavior more apparent. I decided it was time to overhaul how this works, and basically the key change is that instead of enemies picking one cover spot and only coming out to chase the player if an "inactivation timer" expired, enemies are now picking certain moments to chase the player or move up to closer cover.

There is no more "inactivation timer"; instead, there is a timer running that activates every few seconds and prompts a handful of enemies to move to a new state. That state is either a closer cover or directly charging the player. See the graphic below for more details:

![Enemy behavior graphic](/images/enemy_behavior_graphic.PNG)

To further enhance the combat experience, I actually added another facet to healing, which is the use of a "stim pack" that the player can administer to themselves to instantly heal. The player's health does tick up after a period of time without being attacked, but I really liked adding this dimension to healing because it enables and encourages the player to take the enemies head-on and have more control over how their health is managed (you can see how this stim feature works in the YouTube video at the bottom of this post).

These couple of changes have made the combat feel a lot better. It feels a lot less "robotic", so to speak; since the timer activates only certain enemies and they then each do something different, it just feels like the enemies each have a mind of their own and there's more "going on" on the battlefield.

So now, I'm really at a spot where *enough is enough*. I have spent over a year creating the pieces, fine-tuning things, working on combat dynamics, etc. I've eaten my vegetables, it's time for dessert: I want to take my purple level and make it really huge, crazy, and chaotic and finally put these pieces to work. I will definitely think more on the little things again in the near future, but now I feel good enough about the bones of this game that I want to have some fun. So, hopefully my next blog post will have some fireworks to show off.

If you want to see a quick demo of how this new level and the refined mechanics look, please check out the YouTube video below:

::youtube{id="zWHhRKgHDBM"}
::

One other thing I might as well mention - one day I was frozen to my couch with my MacBook on my lap so I decided to see if I could make tic-tac-toe by myself without looking up any tutorials or videos (I was 99% sure I could and would have been really disappointed at this point if I couldn't lol). I was able to do it (hooray), and for the heck of it I put it on my itch.io site. So if you want to see that, [click this link](https://jadedquail.itch.io/tic-tac-toe).

—Josh

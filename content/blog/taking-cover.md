---
title: "Taking Cover"
date: 2023-08-18
description: "Sooooo I’ve pivoted again! I decided that while I love designing maps – and I feel like I have learned a lot through building the map I mentioned in my last post – I think it’s more important for me to focus on…"
draft: false
---

Hi there,

Sooooo I’ve pivoted again! I decided that while I love designing maps – and I feel like I have learned a lot through building the map I mentioned in my last post – I think it’s more important for me to focus on developing a strong core gameplay mechanic. When I was playtesting my game on the large map, I felt like I really didn’t have a plan for how I want the game to feel; at that time, I just had a pack of enemies all run towards the player and bunch up right in front of him and unload on him. I want to lock down what the actual gameplay feels like, and for that reason I wanted to focus more on how gunplay and interactions look, and then work on things like a map later.

I’ve implemented quite a few things to achieve this end since my last post. First of all, I wanted something a little more exciting than a mob of enemies right in the player’s face, so I created a “cover” system. The way it works is that there are several cover objects that are kept track of by my GameManager script, and when an enemy is “activated” – i.e., the player gets too close to the enemy, or the player shoots the enemy – then the enemy runs to cover.

The GameManager script has a function which returns the best cover for the enemy to run to, and it determines this by considering a few things, such as which covers are already taken, and which covers are behind the player and wouldn’t make sense for the enemy to run to. The cover spots that get the most consideration are the ones in what I call the “optimal band”, meaning they are at a certain distance that is both not too close and not too far from the player, which I’ve illustrated below here:

![Enemies will prioritize finding cover in the "optimal band" distance range from the player.](/images/optimal_band.PNG)

*Enemies will prioritize finding cover in the "optimal band" distance range from the player.*

I’m still toying with the best way to make use of this cover mechanic. I’ve already made it such that if the player gets too close to the enemy, it will leave its cover and attack the player, but I also want enemies to switch cover positions in an organic way as well.

With cover becoming a more important element of my game, something else I had to think about was an issue with how enemies were aiming at the player. When in a combat state, the enemy shoots a raycast towards the player and will only shoot at the player if the raycast is actually hitting him; thus, if the raycast hits a wall or some other cover, the enemy will not fire its weapon. However, the raycast only detects one specific location on the player, usually the player’s center; what if part of the player is exposed to the enemy but the raycast is still detecting a wall? The enemy should shoot at the exposed part of the player that it should see, but with this setup described here, the enemy will not fire its weapon.

The solution for this was actually to shoot out multiple raycasts, with each one veering out a little bit from the center raycast. If the “central” raycast hits a wall, we then check the “supplementary” raycasts to see if they are detecting the player; and if they detect the player, then the enemy adjusts its aim to follow that raycast instead. This makes it so the player can’t cheese the game and lean very slightly out of cover so they can shoot the enemy, but the enemy can’t shoot them.

![The enemy shoots multiple raycasts, all close to each other; the enables the enemy to adjust its aim.](/images/supplementary_raycasts.PNG)

*The enemy shoots multiple raycasts, all close to each other; the enables the enemy to adjust its aim.*

I think that I have a lot of great pieces in place at the moment. I want to put these things all together and have them feel good before I move forward with creating levels or anything of the like; I think it’s most important to perfect the core of the game first, and then add from there. It’s taken me a bit to see that, but I think I’m getting a lot closer now!

—Josh

---
title: "Enemy Patrolling"
date: 2023-03-27
description: "Been a busy month for sure, but I’ve still found some time to work on my FPS game. I’ve created a new state for the AI, which I’ve called “patrolling”; in this state, the enemy AI will walk a path consisting of several…"
draft: false
---

Hi There,

Been a busy month for sure, but I’ve still found some time to work on my FPS game. I’ve created a new state for the AI, which I’ve called “patrolling”; in this state, the enemy AI will walk a path consisting of several nodes, then loop back around to the first node after completing the path. This state has replaced the “idle” state that I was working with previously, and now I can have my AI walking around on custom paths instead of standing still like statues.

With this state, I’ve also made a tweak where any time you shoot the enemies, they’ll come out of the “patrolling” state and immediately attack the player, whereas before the enemy would only attack the player if the player was within a certain range (regardless of whether the player shot the enemy). I haven’t implemented it yet, but I also plan on adding in functionality whereby an enemy will notice other enemies attacking a player, and join in themselves; that way, it won’t appear like enemies are ignoring gunfights happening right in front of them.

The other big thing I worked on this month was adding a sniper rifle to the game. Like with the other weapons, I had to size and position the gun in the player’s hands and then create animations for reloading, lowering, and raising the weapon, but I had to also make some adjustments and add new features for the sniper. I had to play with values to make sure that the sniper had more “kick” when firing, and make sure that it was single fire with a limited fire rate. I also had to make sure that the zoom when aiming down the sights was more intense, too. When zooming in, once the camera’s “field of view” value passed a certain threshold, I made the gun itself disappear and a scope overlay appeared on the screen instead, thus imitating an eye staring down a sniper scope. I’m very pleased with the results; the sniper feels very fluid and fun.

::clip{src-path="/images/snipe.mp4" alt="Snipe"}
::

So only a few changes this month, but I’m looking to dig into a lot more for the next month to come. I want to move forward with setting up a level for this FPS game versus just the sandbox I have right now; I also have plans to make a MERN website soon, and I’ve been feeling the itch again to make a small 2D game again, maybe with my own artwork. Here’s to hoping that I have a productive spring 😊

—Josh

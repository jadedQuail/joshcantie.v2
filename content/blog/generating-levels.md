---
title: "Generating Levels"
date: 2023-11-05
description: "I am back again for another post! I have been making steady progress in my game, and I think I am nearly done with the overall structure of the gameplay experience."
draft: false
---

Hello Again,

I am back again for another post! I have been making steady progress in my game, and I think I am nearly done with the overall structure of the gameplay experience. The main thing I have been focusing on since my last post is turning the game into an infinite, randomly-generated dungeon where stages called "segments" will continue to spawn until the player dies. The objective of the game is to survive for as many segments as possible.

I was able to successfully create a system whereby segments continuously generate. The game starts by spawning a starter segment, which has a hole in the floor where the player "drops" into the next segment. At that hole is a node with a script on it that calls for a random segment to be generated such that the entrance point of this new segment lines up with the exit point of the previous segment. Likewise, once the player gets to the end of this "new" segment, there is another hole to drop into, and that hole spawns another segment. So, as the player moves along and defeats all the enemies in each segment, a new one will keep spawning. This has worked pretty effectively so far; I'm able to save on resources by not having tons of empty segments lingering, and at the same time, the player doesn't see segments spawning in and out because the changeover happens when they are dropping through a tunnel.

::clip{src-path="/images/level_generation.mp4" alt="As the player drops into the next segment, another segment spawns. A maximum of 3 segments can exist at a time, so older segments are despawned." caption="As the player drops into the next segment, another segment spawns. A maximum of 3 segments can exist at a time, so older segments are despawned."}
::

The most challenging part of generating each segment was re-baking the navmesh at runtime. The navmesh, which is the designated area in which an agent can move (in my case, the enemies), typically gets baked once before runtime and does not change. However, since in my game different segments are being created and destroyed as the player moves along, there is a need for a navmesh that dynamically re-bakes in order to ensure enemies have full mobility over the changing terrain. Base Unity itself does not have a mechanism for this, but luckily there is an experimental package for Unity called [AI Navigation](https://docs.unity3d.com/Packages/com.unity.ai.navigation@1.1/manual/index.html) that does allow you to call for a navmesh re-bake from a script. It was challenging to work through some bugs, but I now have the game successfully re-baking the navmesh as soon as the player falls through a tunnel to transition from one segment to the next.

![As soon as a player transitions to a new segment, the navmesh is re-baked (navmesh seen here in light blue).](/images/dynamic_nav.png)

*As soon as a player transitions to a new segment, the navmesh is re-baked (navmesh seen here in light blue).*

Now that level-generation is under control, I want to make a bunch of more segments for the player to fight enemies on (I've got the building blocks, now it's time to make some levels!). I am very excited for this part because I get to see it all come together. My plan is to get those building blocks going and ensure that the right menus and mechanics are in place for the game to actually "work", make a few more weapons perhaps, and then we're going to wrap it up there. Thanks for reading as always!

—Josh

---
title: "Random Dungeon Generation"
date: 2022-07-02
description: "One of the new concepts I took a crack at with this game was doing some random dungeon generation."
draft: false
---

Hello,

One of the new concepts I took a crack at with this game was doing some random dungeon generation. I relied heavily on a [video tutorial by Blackthornprod](https://www.youtube.com/watch?v=qAf9axsyijY), which broke down the nuts and bolts of random map generation very well. Basically, we start with a chunk of the map as our centerpoint, which has four openings on it (up, down, left, right). Each of these openings has a "node" attached to it that will select a random "map chunk" to be placed next to that opening, thus extending the map; the newly-generated map chunk then has its own openings, which in turn have their own nodes, and thus the generation continues. The generation will stop once each path is closed off, meaning that the last-generated map chunk has no extra openings that need to be closed.

See below for some examples of dungeons that were generated in my game!

![Dungeon map 1](/images/dungeon_map_1.PNG)

![Dungeon map 2](/images/dungeon_map_2.PNG)

![Dungeon map 3](/images/dungeon_map_3.PNG)

![Dungeon map 4](/images/dungeon_map_4.PNG)

![Dungeon map 5](/images/dungeon_map_5.PNG)

![Dungeon map 6](/images/dungeon_map_6.PNG)

From there, each of these map chunks has a set number of "mob spawners" on it, which will spawn a random number of mobs (within a range), and randomly select which mobs to spawn, as well. The player can explore the different paths and encounter random assortments of enemies to defeat.

It was definitely one of the more challenging goals to achieve for my game, but I really learned a ton while doing this, as I've never done random generation like this before. I hope to build on this basic implementation of random map generation in the future, so I can create more complex and winding maps :)

—Josh

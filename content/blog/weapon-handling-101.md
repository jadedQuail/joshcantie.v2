---
title: "Weapon Handling 101"
date: 2023-01-14
description: "Spent most of my time over the last few weeks improving how the gun handles for the player."
draft: false
---

Happy New Year,

Spent most of my time over the last few weeks improving how the gun handles for the player. I created animations for what the gun does when the player is reloading or running. At first I was worried that I wasn't going to be able to make compelling animations, but I found that it's pretty easy to get a simple reload or "weapon bob" animation created, and I'm pretty pleased with the results.

The running and reloading are done with animations, but I decided that for the player "lowering his gun" when approaching a wall, I would instead lerp the rotation of the weapon. I used a [great tutorial by BuffaLou](https://www.youtube.com/watch?v=bax-xjlfMPs) as a starting point, and I was able to make the adjustments needed to fit my vision for this game. Between these different animations and mechanisms, it took me a good bit of thinking to figure out how to properly trigger each one - i.e. handling things like "you shouldn't be able to shoot while near a wall" and "you should cancel your reload if you start running during the animation". I'm pretty happy with where it's at now, and I think I've laid solid groundwork to move on to other parts of the game.

Speaking of other parts, I have a shootable NPC in my game, which I got from the [Low Poly Animated People pack by polyperfect](https://assetstore.unity.com/packages/3d/characters/humanoids/low-poly-animated-people-156748) . As you can see below, you can now shoot and kill Santa in my video game. I plan on building on this affront to Christmas by playing around with the other characters in this pack, and hopefully will get some basic enemies and levels designed soon.

![Handling](/images/handling.gif)

Stay tuned!

—Josh

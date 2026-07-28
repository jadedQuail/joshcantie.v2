---
title: "Plans for the Summer"
date: 2023-06-16
description: "I’ve finished up my class for the semester, and I now have some extra time this summer to dig into some more game development."
draft: false
---

Hello!

I’ve finished up my class for the semester, and I now have some extra time this summer to dig into some more game development. I’m going to use this blog post as a way to organize my thoughts on what the plan is going forward for me.

First off, to report on what I’ve been working on the last couple of weeks: One thing I was starting to not like the feel of in my game was the movement system, specifically the jumping. I really disliked how the player could switch directions midair at full velocity; it felt very unnatural, and while jumping around this desert map, it was actually difficult to control the player to land on smaller platforms. My movement system was done by completely changing the player’s velocity on any input, and I decided I needed to learn more about a force-based system.

I found a really great tutorial series online by a new YouTuber I hadn’t before checked out named [Dave / GameDevelopment](https://www.youtube.com/@davegamedevelopment). He has a pretty effective [first person movement](https://www.youtube.com/watch?v=f473C43s8nE) tutorial that I followed and implemented into my game. Specifically, he moves his player using [Rigidbody.AddForce](https://docs.unity3d.com/ScriptReference/Rigidbody.AddForce.html); this means that when you switch directions (midair or otherwise), you’re player doesn’t just change velocity to the other direction on a dime, but instead slowly switches directions as the force impacts the velocity of the player. It feels much more organic. See below for a “before and after” of what movement looks like in my game with this implementation.

![The player switches movement from left to right instantly.](/images/vel-jump.gif)

*The player switches movement from left to right instantly.*

![The player gradually moves from left to right as a new force is applied.](/images/force-jump.gif)

*The player gradually moves from left to right as a new force is applied.*

Honestly, I was so intrigued by Dave’s movement system that I went down a rabbit hole and started following several of his tutorials to learn more about how he moves his player controller. I love the way he organizes his code and I found myself watching his tutorials on jumping, running, sliding, and wall running. So while I don’t have much more to report on in my own game, I really think I learned a ton since my last post!

Going forward, I’ve decided that I don’t really want to pursue this “desert map” any further; I think it was a good exercise in lighting and adjusting my assets for a map, but it doesn’t feel optimized for what I’d like to create, which is a fast, fluid shooter. I plan on leaning more heavily into the movement systems that I’ve been learning about; while I am going to implement a lot of what Dave’s channel has to offer, I am also going to push myself to build upon what I’ve learned about adding forces to Rigidbodies to implement my movement systems, too.

I also think this is a good opportunity for me to learn a bit of level design. I’ve been looking at features like Unity’s [ProBuilder](https://unity.com/features/probuilder), and I’d like to design some prototype levels for me to play around with, i.e. place my enemy AI on some basic maps and see how the gameplay feels.

I’m going to keep my sights set on these goals for now, and then going forward I can focus more on putting together a more full experience with some polish. For now, I’m feeling great about what I’ve learned about physics and movement in Unity, and I can’t wait to put it into action.

—Josh

---
title: "Flying Off the Staircase"
date: 2023-07-28
description: "TODO-JOSH"
draft: false
---

Hello again!

As promised, I’m now going to revisit the FPS game and go over some of the progress I’ve made there. As I said in a previous post, I’ve decided to abandon the pre-made “desert” map that I had been playing with, as it doesn’t really fit with what I want to focus on with this game. Instead, I’ve turned my attention to Unity’s [ProBuilder](https://unity.com/features/probuilder) design editor to build out a map.

I’ve been pretty busy doing that; you can see in the screenshot below the map I’ve been making. It’s pretty basic, but I want to spend more of my time focusing on creating a core gameplay loop and polishing the mechanics of the game, and I think a simple map such as this one will enable me to do so.

![I plan on giving this walls and a glass ceiling, sort of like a stadium.](/images/level.png)

*I plan on giving this walls and a glass ceiling, sort of like a stadium.*

After building some stairs and ramps, I had an issue that I needed to figure out. My current movement system is based on user input adding *forces* to the player to get him to move; as a result of that, when the player was going up ramps, he would end up flying off the top once the end of the ramp/staircase was reached. This was not ideal for ramps, and very unrealistic for stairs! ( [This post](https://www.reddit.com/r/Unity3D/comments/p7nq93/how_do_i_keep_player_on_ground_when_running_up/) from reddit shows the exact same issue I’m talking about).

The solution to this involved a couple of things. For one, while on a slope, the player’s “forward” force was going in the same direction as the ramp’s slope, via the [ProjectOnPlane()](https://docs.unity3d.com/ScriptReference/Vector3.ProjectOnPlane.html) method of Unity’s Vector3 struct. This was still not preventing the player from flying off the top of the ramp, because we’re adding forces, and they don’t magically go away when the slope of the surface the player is on changes.

What did fix the issue, though, was forcing the player to have no upward velocity (i.e. a “y” value) unless the player is on a slope or jumping. Obviously if a player is deliberately moving up a slope or is choosing to jump, there needs to be some upward velocity allowed; but aside from that, there’s no other scenario where we’d want the player to have upward momentum. So, by adding the following at the end of our Update() method:

```csharp
if (!OnSlope() && !initiatingJump && rb.velocity.y > 0f)
{
   rb.velocity = new Vector3(rb.velocity.x, 0f, rb.velocity.z);
}
```

We were able to correct the player’s velocity to eliminate upward movement in cases where we didn’t want it, such as the moment where the player has moved off a ramp and back onto a flat surface. So, no more flying off of stairs. Perhaps if I run fast enough up my own staircase I can fly off the top and then I’ll change this back to reflect this new perspective on physics, but for now, I think this fix works nicely.

Aside from that, I’ve laid out some of my enemies and I’m seeing how the game feels when the player is shooting his way through the map. See the video below for what that looks like! A crucial next step is coming up with a way to make my enemy AI more fun to fight. I don’t want them bunching up too much with each other, and I want my AI to have a little more complexity than just charging straight at the player. So, I have some research to do!

::youtube{id="UtbU5sK2jl0"}
::

—Josh

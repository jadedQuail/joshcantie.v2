---
title: "Playing with a Map"
date: 2023-05-26
description: "We’re finally cooking with gas! Now that I have a bunch of core pieces of my game setup, I’ve moved on to putting together a map."
draft: false
---

Hi There,

We’re finally cooking with gas! Now that I have a bunch of core pieces of my game setup, I’ve moved on to putting together a map. I first wanted to see what would happen once I moved my player, enemies, and other key components (such as my audio manager and main canvas) to a new scene; whenever the environment changes, you learn a lot about what settings need to change. I downloaded a desert-themed terrain and town pack (by [Halberstram Art](https://assetstore.unity.com/packages/3d/environments/desert-town-environment-low-poly-194870)), and luckily it already had a demo scene that I could use as my testing grounds. I placed my player and enemies in the environment, and after doing some minor tweaking and re-baking the nav mesh, everything was up and running pretty smoothly. Nice!

I will say that having an actual town to run around in is exposing some flaws in my movement system for the player. I don’t like how the player can change directions in midair, and I want to make his jump feel a bit more realistic. I also am finding that my game sometimes messes up on calculating whether or not the player should have a second jump. I plan on modifying this movement system soon, so that movement feels little less clunky and simplistic.

There was some other progress I made on this new map (one of which was lighting; this is seriously the best tutorial I have ever seen on basic lighting in a Unity scene: [Unity 2020 Tutorial - Lighting And Post-Processing Low Poly Scene](https://www.youtube.com/watch?v=uwYf1yMPuvk)), but I want to highlight what I thought was the most interesting thing I learned with moving to this new map.

This map is a lot larger than what I had been working on in my demo scene, so when I re-baked the nav mesh, there were more obstacles that had to be considered. Here’s a peek at what the nav mesh looks like in the new scene. Note that you can see the player on top of a roof:

![Navmesh scene](/images/navmesh_scene.png)

Since the nav mesh is more complex, it sometimes takes the nav mesh agent more time to calculate a path to its target. If the target (which is the player) is reachable, it’s not an issue, but if the player is in an unreachable location – such as on the roof of a building – then the nav mesh agent takes a longer amount of time to go through a bunch of possibilities before moving closer towards the player.

Normally, I’ve been setting the destination of the nav mesh agent with this code:

```csharp
navMeshAgent.destination = player.transform.position;
```

But this is an asynchronous call, so the nav mesh agent will not move until it can calculate what its destination should be. So, when I was calling this every frame (which in general is a bad idea, not very efficient to update your nav mesh agent’s so frequently, and it’s unnecessary), I was finding that the nav mesh agent was literally just paralyzed because it couldn’t calculate a path before the next frame rolled around, and then it had to start over. When I tried only calling every second, the nav mesh agent started to move again, but it would stop every time it needed to calculate its destination again, which resulted in the agent stuttering as it moved.

To resolve this, I had to instead use this code:

```csharp
NavMesh.CalculatePath(navMeshAgent.transform.position, player.transform.position, NavMesh.AllAreas, path);
navMeshAgent.SetPath(path);
```

The call to CalculatePath() is synchronous, and it calculates a route for the nav mesh agent while it’s still moving. The agent will keep moving on its path, and only change paths once the calculation is complete, so it will move fluidly without pausing or stuttering. You can see the difference between the two below:

::clip{src-path="/images/nma_stutter.mp4" alt="Nav mesh agent stutters while calculating path." caption="Nav mesh agent stutters while calculating path."}
::

::clip{src-path="/images/nma_working.mp4" alt="Nav mesh agent moves fluidly, calculates path while moving." caption="Nav mesh agent moves fluidly, calculates path while moving."}
::

The one concern to think about going forward is whether the CalculatePath() calls will cause frame rate issues. I plan on loading this map up with a ton of enemy AI in the future to see what happens, so that will be telling!

Stay tuned for more updates!

—Josh

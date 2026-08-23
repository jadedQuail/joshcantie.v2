---
title: "Recoil and Particle Effects"
date: 2022-12-29
description: "The number one thing I've learned in the last month is that I really don't know much about 3D game development!"
draft: false
---

Hi Again,

The number one thing I've learned in the last month is that I really don't know much about 3D game development! I feel like I've been spending a lot of time in the ["Valley of Despair" of the Dunning-Kruger Effect chart](https://commons.wikimedia.org/wiki/File:Dunning%E2%80%93Kruger_Effect_01.svg) . It was a little disappointing at first, and made me feel like I hadn't learned much in my last few years of game development. But that's not true, and I snapped out of it pretty quickly.

With my FPS game, I've been focusing on making the gun feel good. I've managed to implement aiming down sights, recoil, and particle effects (sparks) for when bullets hit a target. I've also added bullet holes that appear on hit surfaces, and hitmarkers for when bullets hit targets.

::clip{src-path="/images/recoil.mp4" alt="Recoil"}
::

Recoil was the hardest thing for me to get right, and I learned a lot about game physics in doing so. Right now, the "up and down" motion of the player's view is controlled by the mouse, which moves the camera up and down. The "left and right" motion is also controlled by the mouse, but that actually moves the *player* itself versus just the camera. For recoil, I had to add a force that factors in to this up/down and left/right movement; so the mouse controls where the player looks, but the firing weapon also pushes the camera up a little more and the player left and right a little more, which creates a recoil effect. Additionally, I have the gun itself move backwards slightly when the weapon is fired, and then it is immediately pulled back to its local position relative to the player, thus creating a "back and forth" movement of the weapon.

::clip{src-path="/images/hitmarker.mp4" alt="Hitmarker"}
::

Learned a lot, but have a lot more to go!

—Josh

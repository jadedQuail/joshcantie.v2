---
title: "NPCs"
date: 2022-06-19
description: "Quick blog post for today! One of the systems in my game that I worked hard on was creating dialogue interactions with NPCs."
draft: false
---

Howdy,

Quick blog post for today! One of the systems in my game that I worked hard on was creating dialogue interactions with NPCs. The key to having it run smoothly was to ensure that each dialogue "slide" is marked properly so that the game knows what to do next when the player clicks - that could be another static line a dialogue, a line of dialogue that requires a "yes/no" answer, or the end of the dialogue. Additionally, I had to also create branching paths of dialogue, where the NPC's answer would be different if the player answered "yes" or "no" to a question. I wanted to make sure that I designed a system that could be re-used, such that every new NPC I put in the game could fit right in without me having to completely re-configure how their individual dialogue would work.

I also created for the NPCs a script I called "Wander", which created determined, closed-loop paths that the NPCs would walk in around the map. They're very short and concise, and the main purpose of adding these paths was to give some life to what would be an otherwise "frozen" character. Like with the dialogue system, I designed it such that it can be re-used seamlessly with new NPCs, such that I can create a new NPC, assign it a path like "left, up, right, down," and the NPC will immediately walk in the same path over and over again.

::clip{src-path="/images/dialogue.mp4" alt="Dialogue"}
::

One of my favorite things to do in coding projects is put in those cosmetic changes that are neat, organized, and give the project life. Which is probably why I like game design so much!

—Josh

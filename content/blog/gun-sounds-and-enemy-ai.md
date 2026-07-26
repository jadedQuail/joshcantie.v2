---
title: "Gun Sounds and Enemy AI"
date: 2023-01-29
description: "TODO-JOSH"
draft: false
---

Hello,

Since my last post, I have worked on two things: giving the weapons sound, and laying the groundwork to have functioning and responsive enemies. The gun sounds were actually pretty easy to implement (though I think I did something quite basic). I found a [weapon sounds pack](https://assetstore.unity.com/packages/audio/sound-fx/weapons/gun-sound-pack-59420) on the Unity Asset Store, and from there it was pretty easy to have these sounds trigger when the player fires their gun, reloads their weapon, etc.

The harder project of the two was to get started on the enemy AI. This is an area that I'm not very familiar with; even in my 2D games, my enemies move and interract with the player in a pretty basic way. One of my favorite tutorialists on YouTube for Unity games is [TheKiwiCoder](https://www.youtube.com/@TheKiwiCoder) who I think has content that is great for "bridging the gap" between being a beginner and an advanced game developer. Specifically, I'm very heavily following his [AI series](https://www.youtube.com/playlist?list=PLyBYG1JGBcd009lc1ZfX9ZN5oVUW7AFVy) , which is helping teach me about AI states, state machines, NavMeshes and agents, advanced character models and rigs, and more. I had to stop more than a couple of times along the way to learn about new concepts before I could continue his tutorials - things such as enums, interfaces, null conditional operators, scriptable objects, structs - but overall it's been very productive for me and I'm learning an absolute *ton* about scripting. Specifically, I have a better handle on interfaces and state machines in Unity then I've ever had before. If you sometimes feel frustrated with tutorials being too hard and explaining too little, definitely check TheKiwiCoder out, he's one of the best.

See the below embedded video for a look at what one of my weapons sounds like, and some of the basic AI activity that I've implemented. I absolutely love the ragdolling of the enemy!

::youtube{id="tKECMcLP5Uo"}
::

—Josh

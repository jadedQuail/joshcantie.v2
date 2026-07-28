---
title: "Enums, Interfaces, and State Machines"
date: 2023-02-26
description: "I’ve been putting some more work into my enemy AI in my game. Once again, I’m largely following the work of The Kiwi Coder (who has become one of my favorite Unity content creators, especially since he’s personally…"
draft: false
---

Happy Sunday!

I’ve been putting some more work into my enemy AI in my game. Once again, I’m largely following the work of [The Kiwi Coder](https://www.youtube.com/@TheKiwiCoder) (who has become one of my favorite Unity content creators, especially since he’s personally responded to a few questions I’ve had!); I’m making a lot of tweaks along the way and I’ve now gotten to a spot where I’m implementing my own states into the state machine that Kiwi implemented in his project.

[State machines](https://docs.unity3d.com/Manual/StateMachineBasics.html) are very useful, and I’m actually pretty impressed with myself for not utilizing them earlier. I really like how with Kiwi’s implementation, you can very easily “Enter” a new state, and the main state machine script itself handles the exiting of the current state and other little transition items. This state machine build has also helped me become more familiar with both [enumerations](https://learn.unity.com/tutorial/enumerations) and [interfaces](https://learn.unity.com/tutorial/interfaces) in C#. The different states all inherit from the same interface to ensure that all the proper functionality exists across each state, and to change states, you simply provide the state’s enum value to the state machine object, which has already stored the states that correspond to each enum value (I will admit, I have in the past been guilty of just using a string in place of an enumeration, and I can see how this is a much cleaner option).

In my game right now, I’ve implemented an “idle” and “attack” state by following along with Kiwi. In addition to that, I’ve also created a “return” state, where if the player gets too far away from the enemy that is chasing him, the enemy will give up and run back to the initial position where he was idling. Part of these state transitions is also an animation for equipping and unequipping a weapon. So when the enemy enters the attack state, he pulls the weapon off his back and into his hand, and when the enemy leaves the attack state, he puts the weapon out of his hand and back onto his back (see video below). Organizing when all of these events should be triggered is made easy thanks to the state machine. Thanks Kiwi!

::youtube{id="LTWrtBCNDsM"}
::

I try to do at least two blog posts a month, so seeing that I’m a little behind here, I’m going to make another post soon here to write about what I’ve learned about [slerping](https://docs.unity3d.com/ScriptReference/Vector3.Slerp.html) lately – I use this to make sure that the enemy doesn’t just “snap” when he rotates towards the player after pulling out his weapon, but instead more smoothly looks at him. Still a long way to go, but I think I’m making great strides in learning about 3D mechanics.

Also, I’m in a web development course right now at Oregon State! Before this, I wasn’t super educated on the full stack of web development. For instance, this site you’re on right now (as of 2/26/2023) is entirely static, built only using HTML and CSS. In the past, I’ve built very basic backends using [Flask](https://flask.palletsprojects.com/en/2.2.x/) in Python, but I didn’t know much about web frameworks in general. We’ve been using [React.js](https://reactjs.org/) in this class, and it’s definitely sparked my curiosity for web development. I’m hoping to convert this website into a React app one day, and maybe overhaul the design and implement some cool features. Hopefully soon! Thanks for reading, as always.

—Josh

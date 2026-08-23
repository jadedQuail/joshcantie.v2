---
title: "Pickups and a Web App"
date: 2023-12-21
description: "I have been busy plugging away at some things with my game, but a lot of the changes are not quite as glamorous as things I have shown in previous posts."
draft: false
---

Happy Winter!

I have been busy plugging away at some things with my game, but a lot of the changes are not quite as glamorous as things I have shown in previous posts. For one, I've spent a lot of time working on bug fixes and refactoring code. In particular, I previously had two scripts called `PlayerMovement` and `PlayerController`, respectively, that I did not feel were named appropriately relative to the functionality they provided. Since the latter script actually handled more of the functionality related to the weapon itself, I renamed that script to `GunManager` and additionally moved some code from the `Gun` script to this newly named script, i.e. those functions that made more sense to be part of the "central management" of weapons. I then moved some code from the former `PlayerController` to `PlayerMovement` and then renamed *that* script to `PlayerManager`, since this script now handles more aspects of the player's control than just its movement. Written out here, it sounds like a bunch of semantics, but for the organization of my scripts, it makes a lot more sense and it means I have to spend less time wondering where the heck some function or another is in my code!

To work towards making my game a complete and playable experience, I've added a few pickups, such as ammo drops and health packs. I'm also getting prepped to let the player carry two weapons, so I revisted how weapon pickups look and feel. To make weapon pickups feel better, I made a quick "pickup" animation where the player lifts up a weapon after grabbing it from a gun rack. It looks pretty simple, but it gave me quite the headache to implement (I discovered I was not consistent with what I was keyframing across different animations, which caused jerkiness and inconsistencies in transitions between animations. Luckily, that's all been resolved!). Check out the gifs below to see quick little snippets of these additions (in order: weapon pickup animation, ammo pickup, health pickup).

::clip{src-path="/images/weapon-pickup.mp4" alt="Weapon pickup"}
::

::clip{src-path="/images/ammo-pickup.mp4" alt="Ammo pickup"}
::

::clip{src-path="/images/health-pickup.mp4" alt="Health pickup"}
::

In addition to working on my game, I also just finished up my winter semester at Oregon State and I have deployed my group's semester-long project to the web, which you can check out by clicking the link below (or the equivalent link located on the Portfolio page). This was a databases class, so our project involved creating a SQL database and connecting it to a web application that can perform CRUD operations on the database. I really enjoyed this class because instead of just going through a long list of content and giving us videos to hold our hand, the professor instead made us put our learning into action by working on one giant project all semester, which I find very effective for learning (the phrase "use it or lose it" describes my learning style to a tee).

Throughout the semester we were hosting our web app on one of Oregon State's student machines, which ended as soon as the class ended. I took this as a good opportunity to learn about web hosting through [Amazon Web Services](https://aws.amazon.com/), so that I could put our group's database and web application on the public web. Specifically, I used Amazon's [Relational Database Service (RDS)](https://aws.amazon.com/rds/) to host the database and then used their [Elastic Beanstalk](https://aws.amazon.com/rds/) service to orchestrate several other services for web hosting (EC2, S3, autoscaling, etc). It took me a bit to get my bearings, but I was able to deploy the site properly. Please feel free to check it out and test adding, deleting, and updating entries to the various tables!

> **Space Academy — Website**
>
> [![Space Academy](/images/spaceacademy.png)](http://spaceacademy.us-east-2.elasticbeanstalk.com/)
>
> REST API made with Express and Node.js, connected to a MySQL database. Deployed via Elastic Beanstalk on Amazon Web Services.

Have a Happy New Year! I can't wait to work on some more cool projects in the new year and blog about them. Thank you for reading!

—Josh

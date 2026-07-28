---
title: "Inventory System"
date: 2022-06-08
description: "One of the most challenging but rewarding things to put into my most recent game was a drag-and-drop inventory system."
draft: false
---

Hello,

One of the most challenging but rewarding things to put into my most recent game was a drag-and-drop inventory system. I started by working off of a [fantastic video](https://www.youtube.com/watch?v=BGr-7GZJNXg) by Code Monkey on how to create such an inventory, and then added more features from there. Beyond the basic drag-and-drop functionality, I was also able to restrict certain "use slots" such that they could only hold items of a certain class, as well as have items "drop" from the player's inventory at his feet when the user drags the item outside of the inventory menu box.

![Inventory](/images/inventory.gif)

An important aspect of creating this inventory system was keeping track of item "images" while they were being dragged from one slot to another. I had to account for a couple of different scenarios, such as the item being dragged to a new slot, the item never finding a new slot and reverting back to its old slot, the item swapping with another item in another slot, etc.

It was also challenging to make sure that the actual item associated with each inventory slot had its information properly transferred from one slot to another. This was especially important for the shop, where the player can buy and sell items. It took a long time to ensure that the inventory items were responding properly to being dragged and dropped (and I must admit I think a more senior coder would probably have a thing or two to say about the efficiency of my code), but eventually I got it right through a lot of trial and error!

![Shopping](/images/shopping.gif)

—Josh

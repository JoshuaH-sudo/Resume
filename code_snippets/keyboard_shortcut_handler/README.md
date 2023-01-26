## Introduction
This was a handler I developed that could link keyboard shortcuts to an action that the developer defines in other parts of the project. The event data from a keyboard listener would be passed to this handler, where it checks for a match. 

## Description
I was proud of how I managed the list of shortcuts, creating a record type between the names of the shortcut and their key combos, helped ensure that the same shortcut could be used in various parts of the application by just referring to the shortcut name. 

To make it easier to create a shortcut and its key combo, I created an enum of all the characters that could be used and how they appear in a keyboard event. This allowed to use a common naming scheme when creating the shortcut key combos.

## Files
- #### keyboard_shortcut.ts 
	The main file that holds the shortcut handler and the shortcut combos

## Introduction
These snippets of code are to demonstrate my ability and resolve to providing high quality code by ensuring that my work is clean, modular and manageable. I believe that going the extra effort of revisiting old code and refactoring to improve it beyond just serving its current requirements. 

I want my code to fulfil its purpose correctly, but also to set up a foundation and framework for it to continue to be improved by other developers long after I am gone. I maintain this dedication of continuous development to perfection that I apply to my skills as well as the things I create, such as this plugin.

## Description
These snippets are from a plugin of my first project that I worked on as a Junior developer. I was to develop a visual interface that used a SFTP service to a remote host.

This plugin could connect to a host, retrieve all the files and subdirectories, and provided UI elements to display the returned information and allow the user to navigate through the file system of the connected host.

## Files
- file_transfer.tsx:
	This was my first attempt at creating this plugin. I was still new to React and 
	Typescript and had worked as a professional developer less than half a year. 
	While thought it fulfilled all requirements expected of it, it was difficult to 
	change.
	
	All logic was stored in one large React class component, it was heavily coupled and not 
	at all modular. Simple changes were hard to make and could lead to bugs in other 
	parts of the plugin.
	
	I took the initiative to ask my employer, if I could refactor it to improve 
	future development and the result is the sftp.tsx

- sftp.tsx:
	This is the improved version of the file_transfer.tsx, it only contains small 
	snippets across a range of files/components, but the main focus of this 
	demonstration is to show how I separated state and logic to make the code more decoupled and readable.

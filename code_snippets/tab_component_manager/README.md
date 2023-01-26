## Introduction
This is one of my best examples of how I leveraged typescript to improve development experience and is currently my favourite piece of code that I have written, as it was built on prior experience from learning my mistakes when creating a similar system on pass projects.

## Description
For one of my latest applications I have worked on, I was required to set up a tab like UI display, where each tab can contain any kind of content, similar to web browser tabs. For example, one of these tabs was an SSH tab, where it provides a terminal like interface to interact with a remote host.

One of the challenges in developing this tab management, was being able to store the components for each tab in a Redux store. While thought only two tab types we expected to be used at the time of the project, I wanted to develop a flexible approach, as I knew that eventually more tabs would be added and the management of each tab would become more complex.

Due to the design of Redux, all data must be serializable, which React components cannot. So I instead stored the properties of the tab component in Redux and then inject them into the component when the tab goes to render. However, this makes it hard to remember which properties are needed during development for each tab component, which can change over time and become more complexed for each tab.

So I created a mapping of available tab components to key pairs and also mapped the prop types for each of these components. This will allow the developer to be given update-to-date prop types for each tab component when they go to create a tab. When ever the tab component's props change, a type error will be given to update the props passed to the create tab function, making it easier to avoid mistakes in the future from incorrect props being passed.

## Files
- #### tab_management_types.ts
	This is where each tab component's props are extracted and mapped to a key name, which is used by useTabManager hook in the create_tab() function to ensure the correct props for the tab are given.

- #### useTabManager.tsx
	A interface that abstracts the handling of the Redux store actions, like create_tab().
 
- #### Hosts_table.tsx
	An example of a component that needs to use the create_tab() function and needs to provide the props for the tab it wants to create.

- #### Tab_content_display.tsx
	Where each tab is rendered and displayed, passing in the stored props on the Redux store to the mapped component for the tab type and because of the strict typing on create_tab() the tab component will always receive the correct props.

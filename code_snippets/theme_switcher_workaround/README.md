## Introduction
This snippet is not an example, demonstrating clean code or flexible design but my ability to create effective workarounds to problems that are out of my control, such as the limitations of a 3rd party UI library not being able to provide certain functionality. I was proud of this solution, as I had to delve down through the abstraction of the 3rd party UI library that I was using, to fully understand how it worked. I then was able to create a workable solution that allowed us to continue to use a heavily integrated package.

## Description
I was tasked to create a UI for the user to set the theme of the application from either light or dark dynamically at runtime. The challenge was to switch the CSS stylesheets used by the 3rd party UI library package. Due to incremental changes by the package developers, the main function to switch the themes, was not working. No alternative option was provided, so had to create a workaround outside the provided means of the package.

I did this by inspecting how the UI library switch the CSS style sheets used. I found that it was via a `<link/>` placed in the `<head/>` tag of the HTML document. Furthermore, I also discovered that if the two different theme stylesheets were used at the same time, it would use the last one that was added, overriding the previous style sheet.

So I made a solution that would manually set the stylesheet in the `<head/>` tag, overriding the last theme stylesheet, and I used React lazy loading to ensure a smooth transition was made in-between these theme changes. 

This solution was not perfect, but it effectively solved the problem without requiring to drastically change the whole application and can be easily removed once the package developers reimplement their theme switching function again.

## Files
- #### theme_provider.tsx
	This component wraps around the entire app to provide the desired theme set by the user.

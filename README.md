# Hack the North's Super Awesome Hacker Application Site

This was created for Hack the North's Frontend Challenge for 2019 :D

Live at [the following link!](http://htn-application.ml/)


## 🤔 Product Vision and Design
I tried to design with user experience in mind, so there are lots of quality of life improvements in the app like alerts that notify what the user still needs to do, microinteractions, live saving, etc.  

Given additional time, some aspects of a fully fledged web app for hackers are already present. The help, settings, and log out buttons are very easily able to be functional. I would definitely implement an authentication system that hides the app under authenticated routes.

Almost none of the app is hard coded - instead, most of the data pulls from the global store (if this was a full web app, I would imagine the app would be querying a backend to get this information, and persisting it in the store temporarily). If extended to a full web app, features like the toast, or the greeting, can be customized to fit the user when they log in, when the app first loads, or even periodically as seen fit.

My implementation is extremely componentialized, with different question inputs split into completely separate components. It would be extremely easy to add a new type of question or accommodate an API schema change; one would just need to add a case in the QuestionComponent to render the appropriate component (and write the logic for the input type's component, of course). The app is also designed to handle a theoretically infinite amount of question sets or questions, with vertical scrolling and no hard-coded questions.

Since every input that the user takes is recorded (even though not every input updates the store, as that would be very performance-heavy), it would be simple to implement any analytics or metrics like user response percentage, average time spent completing the application, average response length, as well as parse for any key words or phrases. This data, especially the latter, can be useful for sponsors to determine interest in their product/area of tech, for the Design team to see how well their design is attracting users, or for Logistics/Data Science to follow trends to put together a better event.

As always, I try to follow best principles when designing sites. No matter how large or small, I try my best to write tests, employ continuous integration, use consistent theming, and follow correct version control habits when developing. This way, the project I'm working on stays maintainable and scalable.


## 🚀 Nifty Features  
The site is built with React, Gatsby, styled-components, and has some neat features:
 - Snapshot tests with __Jest__ and __Enzyme__
 - Component development with __Storybook__
 - Linting with __eslint__ and __prettier__
 - Global state with new __React Context store/reducers__
 - Completely functional component design with new __React Hooks API__
 - Offline support
 - and more!


_Created by Alex Xie, 2019._

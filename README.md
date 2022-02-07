# CSS Checker(webapp for CSS check)

## Live Demo
https://w4by7.csb.app/

## Ideas
- Used the free W3C CSS Validation Service API (No need to re-invent the wheel)
- Used React Query for easy client/server state and data management. 

## Personal Feedback on Project
I enjoyed working on this project. It was fun to think and create a simple, clean and informative UI from the W3C CSS Validation Service API response data.
React is just so amazing a tool for creating wonderful UIs with so much easy, less code, and an organized component structure.

What I found challenging in this project was fetching the result from the API service. It just didn't work which was frustrating because I seemed to have done everything right. I did some research on Stackoverflow and it was an issue with CORS. [How to make a "simple" GET request if the resource doesn't allow CORS?](https://stackoverflow.com/questions/46855633/how-to-make-a-simple-get-request-if-the-resource-doesnt-allow-cors)

I followed clean code standards. Some include:
- Created a separate file for every component
- Used Hooks to seperate functionality from components. Therefore, making components lean as much as possible
- Used CSS modules to limit the scope of styles to their components.

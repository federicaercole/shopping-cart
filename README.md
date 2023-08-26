# Shopping Cart
A fake online store done in React, a project from [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-shopping-cart).  
[Live version](https://shopapp.federicaercole.com)

Read the [case study](https://federicaercole.com/shop/) (only in italian).

![Homepage of the online store on desktop](https://federicaercole.com/images/shop/shop-1-big.webp)
![Cart page](https://federicaercole.com/images/shop/shop-4-big.webp)

## About this repository
It has two different branch:
- main: the original version of this project, only with front end
- api-integration: the improved version, with API and some code refactored. You can notice a lot of improvement between the two versions!

## Features:
- Product search
- Cart Management
- Breadcrumbs
- Show products by category, sorting by alphabetical order or price
- Accessible galleries
- API (on the api-integration branch)

[Watch video of form validation](https://federicaercole.com/images/shop/validation.mp4)  
The form validation uses a "Reward Early, Punish Late" pattern, which consists of alerting the user when there are any errors within the input in the moment they leave the input and removing the error message immediately if they correct the input.

[Watch video of focus trap in modal](https://federicaercole.com/images/shop/focus-trap.mp4)  
An example of accessible gallery: the focus stays "trapped" in the modal dialog.

## What I learned doing this project:
- Use Context and Ref
- Use React Router
- How to structure code in multiple components
- How to make accessible some components

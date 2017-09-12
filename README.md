# HackJam React-Router 4
During this HackJam you'll learn how to use the latest version of React-Router 4
## Getting started

```bash
git clone https://github.com/hackages/hackjam.react-router-4
cd hackjam.react-router-4
yarn start
# Happy hacking ;)
```

## Todos
### RCMOD (Red Console Message Of Death) ☠️

The app should NOT work when you first start it.

You're going to run into a bunch of errors and whatnots, make sure that your app runs fine before going further.

### Routing oh sweet routing 🚗...

Implement the following routes

/:id => src/Components/BookDetail

/books => src/Components/Books

/dashboard => src/Components/Dashboard

/ => src/Components/Dashboard

You should only have one route rendered when you're on the / route, if not fix it!

### Fancy a NavLink? 👌🏻

In your nav, you should add the 'activeLink' class to your links if the url matches their pathname

### RESTRICTED ACCESS ✋

Write a higher order route that'll protect your routes from un-authenticated users.

You'll find instructions for that one in src/hor/ProtectedRoute.js

### Those are not the search results you're looking for 🙈

On the dashboard page in the BookSearch component, have the search update the URL in order to be able to share your search results

When that component is loaded, verify whether the url contains a search query and fire a search if so.

> hint: use the withRouter Higher order component

### Going back 

On the detail page of a book, implement the back button

### Persistance is the key 🔑

Its annoying for users to re-login on page refresh (duh).

Persist the auth state in the localStorage.

## Bonus
### HIGHER ORDER HIGHER ORDER HIGHER ORDER
Write a higher order component that'll update the object location.state with the following whenever you navigate:
```json
{
  "from": "/current-page"
}
```
When you've done that, use location.state.from to redirect to the previous page when an un-authenticated 
user navigates to your ProtectedRoute 

### Redux to the rescue
So you've gone through the whole thing, eh?

Lets make your app redux-friendly.

You should keep your navigation history in redux, you should also be able to dispatch 
actions to navigate from redux.

When you've done that, update your app to use those actions.

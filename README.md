# Learnings

## how to install old dependencies

`npm install --legacy-peer-deps`

## how to use environment variables in react

This is apparently an inbuilt feature of react-scripts since version 0.5.0 . To make it work you will need to do 2 things.

> 1. create a .env file in your projects root directory
> 2. name your variables starting with `REACT_APP_`

after that you can call them at anytime within your code as such
`process.env.REACT_APP_MYVAR`

more info on this can be found on [stackoverflow](https://stackoverflow.com/questions/49108136/importing-env-variable-react-front-end)

> ### Note that you will require to restart your server for it to function

## Deleting object Properties

Say you have an object such as

```javascript
const myCat = {
  name: "snuggles",
  tails: "two",
};
```

and you come to the realisation that almost no cats have more than one tail :-( and thus adding this fascinating tidbit is a waste of precious bit space so you need to delete this property hence

> `delete myCat.tails` <br>or<br> `delete myCat["tails"]`

funny how you would think it would be something in the lines of `myCat.delete("tails)` but no, which makes it all the more interesting

## Reducers andd how they work

I finally understood reducer after going through the [redux docs](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)

```javascript
const numbers = [2, 5, 8];

const addNumbers = (previousResult, currentItem) => {
  console.log({ previousResult, currentItem });
  return previousResult + currentItem;
};

const initialValue = 0;

const total = numbers.reduce(addNumbers, initialValue);
// {previousResult: 0, currentItem: 2}
// {previousResult: 2, currentItem: 5}
// {previousResult: 7, currentItem: 8}

console.log(total);
// 15
```

> **_Array.reduce()_** takes a callback function as an argument, which will be called one time for each item in the array. It takes two arguments:<br>**previousResult**, the value that your callback returned last time <br>**currentItem**, the current item in the array<br>
> The first time that the callback runs, there isn't a previousResult available, so we need to also pass in an **initial value** that will be used as the first previousResult<br>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

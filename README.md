# Blogger App
React library is used for the project.
## What does the app exactly show?
1.Title : Blogger Page
2.At a time you will see one of the blogs (In my case I have taken total 3 blogs). 
3.You can navigate from one blog to other using arrows present on both the sides of the blog.
4.On reloading the page, the order of the blogs will change and therefore, you will see different blog as a active blog on reloading the page.
## About the code
App.js (present in src folder) is very important file. It includes App function which returns most of the content required for our blogger app. Most of the CSS is done in App.css (present in src folder) . 
In App function's return I have made carousel, card, etc.
In that a random value gets assigned for activeIndex at the beginning of the function App. And using that appIndex value, active corousel-item is decided and so we can see different corousel on reloading the page.
## How to Run?
I have added gitignore to avoid large files/folders (ex. node modules) upload on github.
So you have to first install those packages/files mentioned in the gitignore.
To build the 'node modules' you have to use 'npm install'.
You have to open the code in code editor like VS code. 
Open the terminal.
Run npm start.
App will open..

## Data
For blogs I have taken data from random blogs. For the source of the data, click on the 'for more..' button at the end of the blog on the blogger page of our Blogger App. 

## Screen recording Video Link
https://youtu.be/KhnYDEHbEqo


## Following part is created by default when I created the react app at the beginning.
## Getting Started with Create React App

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

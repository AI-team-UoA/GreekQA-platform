# GreekQA Crowdsourcing Platform

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run App locally

1. Clone project locally:\
`git clone https://github.com/ssiatras/crowdsourcing-platform` 

2. Change to project directory:\
`cd crowdsourcing-platform`

3. Open  `.env` file and add your Web App's Firebase configuration variables:\
```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_DATABASE_URL=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_FIREBASE_MEASUREMENT_ID=
REACT_APP_RECAPTCHA_SITE_KEY=
```
**Note:** You will need to setup a Firebase Web App and reCAPTCHA v3 for this step.

###


## Available Scripts

In the project directory, you can:

### Run the app in the development mode:
`npm run start`\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
The page will reload if you make edits. You will also see any lint errors in the console.



### Launch the test runner in the interactive watch mode.
`npm test`\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### Build the app for production to the `build` folder.
`npm run build`\
It correctly bundles React in production mode and optimizes the build for the best performance.\
The build is minified and the filenames include the hashes. \
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

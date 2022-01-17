# GreekQA Crowdsourcing Platform

## Tech Stack
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- React.js v17,
- Tailwindcss v3,
- Firebase v9 (Authentication, Firestore).

## Preparation to run locally

### 1. Clone the project locally:
`git clone https://github.com/ssiatras/greekqa-crowdsourcing-platform` 

### 2. Change to project directory:
`cd greekqa-crowdsourcing-platform`

### 3. Install dependencies
`npm install`

### 4. Edit `.env.local` file and add your Web App's Firebase configuration variables:
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
#### Note 
For this step, you need to contact one of the supervisors of the project to get the configuration variables.\
Alternatively, you need to:
- setup your own [Firebase Web App](https://firebase.google.com) including Authentication and Firestore,
- register for [reCAPTCHA v3](https://www.google.com/recaptcha/about).

## Available Scripts

In the project directory, you can:

### Run the app in the development mode:
`npm run start`\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
The page will reload if you make edits. You will also see any lint errors in the console.

### Launch the test runner in the interactive watch mode:
`npm run test`\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Build the app for production to the `build` folder:
`npm run build`\
It correctly bundles React in production mode and optimizes the build for the best performance.\
The build is minified and the filenames include the hashes. \
The app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## License
This project is available under [the MIT License](https://github.com/ssiatras/crowdsourcing-platform/blob/main/LICENSE).

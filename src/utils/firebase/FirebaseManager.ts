import * as f from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDq0j4GdP7jaqpQrbul0HwEKksdg27FCOc",
    authDomain: "fearless-5042d.firebaseapp.com",
    databaseURL: "https://fearless-5042d.firebaseio.com",
    projectId: "fearless-5042d",
    storageBucket: "fearless-5042d.appspot.com",
    messagingSenderId: "266934999124",
    appId: "1:266934999124:web:1567215b7b74ec11b8f5c1",
    measurementId: "G-J6DRV5K2DX"
};

const firebase: f.app.App = !f.apps.length ? f.initializeApp(firebaseConfig) : f.app();
export default firebase


//initalises the use of firebase and firestore
var admin = require("firebase-admin");

var serviceAccount = require("./personal-nodejs-project-firebase-adminsdk-5sta1-aeccb8781a.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();

module.exports = {
    firestore,
};

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

apiKey: "AIzaSyC_WayLns3zRVFIB5mgREVu-CvWdCCvs5o",

authDomain: "shecan-foundation.firebaseapp.com",

projectId: "shecan-foundation",

storageBucket: "shecan-foundation.firebasestorage.app",

messagingSenderId: "886920235586",

appId: "1:886920235586:web:c4214f78275221df11bbdb",

measurementId: "G-L197QMXVKX"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;
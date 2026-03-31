import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const runtime = globalThis;
const rawConfig = runtime.__firebase_config;
const firebaseConfig = rawConfig ? JSON.parse(rawConfig) : {};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const appId = runtime.__app_id || 'default-app-id';

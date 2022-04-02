import { React } from 'react';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

import FirebaseConfig from './config/firebaseConfig';

import SignIn from "./functions/signIn";
import SignOut from "./functions/signOut";
import ChatRoom from "./functions/chatRoom";

import './App.css';

initializeApp(FirebaseConfig);

const auth = getAuth();
const firestore = getFirestore();

function App() {
	const [user] = useAuthState(auth);

	return (
		<div className="App">
			<header>
				<h1>Talk About</h1> <small>A ⚛️ReactJs chat project</small>
				<SignOut/>
			</header>
			<section>	
				{user ? <ChatRoom firestore={ firestore }  /> : <SignIn />}
			</section>
		</div>
	);
}


export default App;

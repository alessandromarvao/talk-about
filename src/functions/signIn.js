import { useEffect, useState } from 'react';

import { 
	getAuth, 
	GoogleAuthProvider, 
	signInWithPopup, 
	FacebookAuthProvider, 
	TwitterAuthProvider
} from 'firebase/auth';

import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function SignIn(props) {
	const auth = getAuth();
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');

	useEffect(() => {
		error && toast.error(errorMsg, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			progress: undefined,
		});

		setError(false);
	}, [error]);

	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider);
	}

	const signInWithFacebook = () => {
		const provider = new FacebookAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				const credential = FacebookAuthProvider.credentialFromResult(result);
				auth.currentUser.photoURL = result.user.photoURL + "?access_token=" + credential.accessToken;
				// auth.onAuthStateChanged((user) => {
				// 	if (user) {
				// 		console.log(photoURL);
				// 	}
				// })
			})
			.catch((error) => {
				// Handle Errors here.
				// const errorCode = error.code;

				setErrorMsg('Facebook: Esta conta de e-mail é utilizada por outra credencial');

				setError(true);
			})
	}

	const signInWithTwitter = () => {
		const provider = new TwitterAuthProvider();
		signInWithPopup(auth, provider);
	}

	return (
		<div className='sign-in-buttons'>
			<ToastContainer />
			<button className='sign-in google' onClick={signInWithGoogle}>Sign in with Google <img src="./img/google.png" alt="login com Google" /></button>
			<br />
			<button className='sign-in facebook' onClick={signInWithFacebook} >Sign in with Facebook <img src="./img/facebook2.png" alt="login com Facebook" /></button>
			<br />
			<button className='sign-in twitter' onClick={signInWithTwitter}>Sign in with Twitter <img src="./img/twitter.png" alt="login com Twitter" /></button>
			<br />
			<button className='sign-in github' >Sign in with GitHub <img src="./img/github.png" alt="login com GitHub" /></button>
		</div>
	)
}

export default SignIn;
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';

function SignIn(props) {
	const auth = getAuth();

	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider);
	}

	const signInWithFacebook = async () => {
		const provider = new FacebookAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				const credential = FacebookAuthProvider.credentialFromResult(result);
				const accessToken = credential.accessToken;
				auth.onAuthStateChanged((user) => {
					if(user) {
						console.log(user.photoURL);
					}
				})
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.email;
				// The AuthCredential type that was used.
				const credential = FacebookAuthProvider.credentialFromError(error);
			})
	}

	return (
		<div className='sign-in-buttons'>
			<button className='sign-in google' onClick={signInWithGoogle}>Sign in with Google <img src="./img/google.png" alt="login com Google" /></button>
			<br />
			<button className='sign-in facebook' onClick={signInWithFacebook} >Sign in with Facebook <img src="./img/facebook2.png" alt="login com Facebook" /></button>
			<br />
			<button className='sign-in twitter' >Sign in with Twitter <img src="./img/twitter.png" alt="login com Twitter" /></button>
			<br />
			<button className='sign-in github' >Sign in with GitHub <img src="./img/github.png" alt="login com GitHub" /></button>
		</div>
	)
}

export default SignIn;
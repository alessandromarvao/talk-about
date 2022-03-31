import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function SignIn(props) {
	const auth = getAuth();
	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider);
	}

	return (
		<div className='sign-in-buttons'>
			<button className='sign-in google' onClick={signInWithGoogle}>Sign in with Google <img src="./img/google.png" alt="login com Google" /></button>
			<br />
			<button className='sign-in facebook' >Sign in with Facebook <img src="./img/facebook2.png" alt="login com Facebook" /></button>
			<br />
			<button className='sign-in twitter' >Sign in with Twitter <img src="./img/twitter.png" alt="login com Twitter" /></button>
			<br />
			<button className='sign-in github' >Sign in with GitHub <img src="./img/github.png" alt="login com GitHub" /></button>
		</div>
	)
}

export default SignIn;
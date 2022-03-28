import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function SignIn(props) {
	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(props.auth, provider);
	}

	return (
		<button className='sign-in' onClick={signInWithGoogle}>Sign in with Google</button>
	)
}

export default SignIn;
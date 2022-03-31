import { getAuth } from 'firebase/auth';

function SignOut(props) {
	let auth = getAuth();
	return auth.currentUser && (
		<button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
	)
}

export default SignOut;
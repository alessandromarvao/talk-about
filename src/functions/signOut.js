import { getAuth, signOut } from 'firebase/auth';

function SignOut() {
	let auth = getAuth();

	const logOut = () => {
		// Desconecta o usuário
		signOut(auth);

		// Apaga a conta do usuário no FireBase (Permite logar com o mesmo e-mail em outros provedores (Google, Facebook, Twitter, etc))
		auth.currentUser.delete();
	}

	return auth.currentUser && (
		<button className="sign-out" onClick={logOut}>Sign Out</button>
	)
}

export default SignOut;
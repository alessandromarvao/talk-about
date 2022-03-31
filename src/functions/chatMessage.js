import moment from 'moment';
import 'moment/locale/pt-br';
import { getAuth } from 'firebase/auth';

function ChatMessage(props) {
	moment.locale('pt-br');

	const auth = getAuth();

	const { text, uid, photoURL, createdAt, displayName } = props.message;
	// console.log(props.message);

	const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
	// alert(props.id);
	return (
		<div className={`message ${messageClass}`} >
			<img src={photoURL} alt="Foto de perfil" title={displayName} />
			<p>{text}</p>
			<small>
				{createdAt // Confere se a variável createdAt já existe (no firebase, o bd armazena inicialmente a data como null, para depois atualizar)
					? moment(createdAt.toDate()).calendar() 
					: moment().fromNow()
				}
			</small>
		</div>
	)
}

export default ChatMessage;
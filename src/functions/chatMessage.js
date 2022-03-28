function ChatMessage(props) {
	const { text, uid, photoURL } = props.message;

	const messageClass = uid === props.auth.currentUser.uid ? 'sent' : 'received';
	// alert(props.id);
	return (
		<div className={`message ${messageClass}`} >
			<img src={photoURL} alt="Foto de perfil" />
			<p>{text}</p>
		</div>
	)
}

export default ChatMessage;
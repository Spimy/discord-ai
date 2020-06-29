<script>
	import Modal from './components/Modal/Modal.svelte';
	export let api;
	let showModal = false;

	const toggleModal = () => {
		showModal = !showModal;
	}

	const logOut = () => {
		fetch(`${api}/logout`);
	}

</script>

<main>
	<button style="background-color: #000; border:none; padding: .75em 1em;" on:click={toggleModal}>Open Modal</button>
	<Modal showModal={showModal} on:click={toggleModal}>
		<label for="token_input">Enter bot token</label>
		<input id="token_input" type="text" placeholder="...">
	</Modal>
</main>
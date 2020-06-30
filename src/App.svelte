<script>

	const { Client } = require('discord.js');
	import Titlebar from './components/Titlebar/Titlebar.svelte';
	import Modal from './components/Modal/Modal.svelte';

	let message;
	let token;
	let client = new Client();
	let showModal = false;
	let guilds = [];

	const toggleModal = () => {
		showModal = !showModal;
	}


	const LogIn = () => {
		
		client.login(token)
			.then(() => {
				localStorage.setItem('token', token);
				client.on('ready', () => {
					setGuilds(client.guilds.cache.toJSON());
				});
			})
			.catch(() => {
				token = null;
				setMessage('Invalid token');
		});

	}
	
	if (localStorage.getItem('token') !== null) {
		token = localStorage.getItem('token');
		LogIn();
	}

	const setMessage = (msg) => {
		message = msg;
	}

	const setGuilds = (guildArr) => {
		guilds = guildArr;
	}

</script>

<main>

	<Titlebar />
	{#each guilds as guild}
		<h1>{guild.name}</h1>
		<img src={guild.iconURL} alt="{guild.name} server icon">
	{:else}
		{#if client.token === null}

			<Modal showModal={true}>
				<h1>{message || ''}</h1>
				
				<form on:submit|preventDefault={LogIn}>
					<label for="token_input">Enter bot token</label>
					<input id="token_input" type="text" placeholder="..." bind:value={token}>
				</form>

				<button on:click={LogIn}>Authenticate</button>
			</Modal>

		{/if}
	{/each}

</main>
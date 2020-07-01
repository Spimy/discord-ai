<script>
	import Titlebar from "./components/Titlebar/Titlebar.svelte";
</script>

<main>
	<Titlebar/>
	<div class="page home">
		<div class="field">
			<p>Enter your bot token:</p>
			<input/>
		</div>
		<button>Auth</button>
	</div>
</main>
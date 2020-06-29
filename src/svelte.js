import App from './App.svelte';
import './global.scss';

const app = new App({
	target: document.body,
	props: {
		api: 'http://localhost:3000'
	}
});

export default app;
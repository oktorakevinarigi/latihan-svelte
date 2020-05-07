// import App from './App.svelte';
import App from './cth1/Form.svelte'
// import App from './cth2/Form.svelte'
// import App from './cth3/Main.svelte'
// import App from './routes/Main.svelte'

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
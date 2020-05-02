import App from './App.svelte';
// import Form from './cth1/Form.svelte'
import Form from './cth2/Form.svelte'

const app = new Form({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
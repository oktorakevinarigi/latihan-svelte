import App from './App.svelte';
// import Form from './cth1/Form.svelte'
// import Form from './cth2/Form.svelte'
import Cth3 from './cth3/Main.svelte'

const app = new Cth3({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
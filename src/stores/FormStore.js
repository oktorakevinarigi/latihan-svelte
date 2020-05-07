import {writable} from 'svelte/store';

const FormStore = writable({
    id: '',
    title: '',
    body: ''
})

export default FormStore
<script>
import {
    Button, Card, CardBody, CardHeader,
    CardTitle, FormGroup, Label, Input
} from "sveltestrap";
import FormStore from '../stores/FormStore.js';
import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';

let title
let body

const handleSubmit = async() => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                        method: 'POST',
                        body: JSON.stringify({
                            title: $FormStore.title,
                            body: $FormStore.body,
                            userId: 1
                        }),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                     })
}

beforeUpdate(() => {
    console.log("beforeUpdate")
})
onMount(() => {
    console.log("onMount")
})
afterUpdate(() =>{
    console.log("afterUpdate")
})
onDestroy(() =>{
    console.log("onDestroy")
})
</script>

<div>
<Card class="mb-3">
  <CardHeader>
    <CardTitle>FORM {$FormStore.title} - {$FormStore.body}</CardTitle>
  </CardHeader>
  <CardBody>
    <FormGroup>
    <Label for="exampleEmail">Title</Label>
    <Input
      type="email"
      name="email"
      id="exampleEmail"
      placeholder="Title"
      bind:value={$FormStore.title}
       />
  </FormGroup>
  <FormGroup>
    <Label for="exampleText">Body</Label>
    <Input type="textarea" name="text" id="exampleText" bind:value={$FormStore.body} />
  </FormGroup>
  <Button color="primary" on:click={() => handleSubmit()}>
      Submit
  </Button>
  </CardBody>
</Card>
</div>

<style>

</style>
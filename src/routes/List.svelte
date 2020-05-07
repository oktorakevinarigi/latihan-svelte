<script>
import {
    Button, Card, CardBody, CardHeader,
    CardTitle, FormGroup, Label, Input, CardText
} from "sveltestrap";
import { onMount, beforeUpdate, afterUpdate } from 'svelte';
import ListData from '../stores/ListData.js';
// https://jsonplaceholder.typicode.com/posts

onMount(async() => {
    console.log("onMount")
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    let pars = await res.json();

    ListData.update(x => x = pars)
});

beforeUpdate(() => {
    console.log("beforeUpdate")
})

afterUpdate(() =>{
    console.log("afterUpdate")
})

</script>



<div>
    {#each $ListData as list}
        <Card class="mb-3">
        <CardHeader>
            <CardTitle>{list.title}</CardTitle>
        </CardHeader>
        <CardBody>
            <CardText>
                {list.body}
            </CardText>
        </CardBody>
        </Card>
    {/each}
</div>

<style>

</style>
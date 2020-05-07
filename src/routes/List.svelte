<script>
import {
    Button, Card, CardBody, CardHeader,
    CardTitle, FormGroup, Label, Input, CardText
} from "sveltestrap";
import { onMount } from 'svelte';
import ListData from '../stores/ListData.js';

let Data = []

onMount(() => {

})

</script>

<div>
    {#each Data as list}
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
    {:else}
        <p>Data Kosong</p>
    {/each}
</div>

<style>

</style>
<script>
import { onMount } from 'svelte';
import { Col, Container, Row } from "sveltestrap";
import Card from './shared/Card.svelte'

let lists = []

onMount(async() => {
    const res = await fetch('https://reqres.in/api/users?page=2')
    let pars = await res.json();
    lists = pars.data
});
</script>

<Container>
    {#each lists as list}
        <Row>
            <Col><Card {list}/></Col>
        </Row>
    {/each}
</Container>

<style>

</style>
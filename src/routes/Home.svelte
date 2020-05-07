<script>
import { Col, Container, Row } from "sveltestrap";
import Card from './shared/Card.svelte'

let lists = []

</script>

<Container>
    {#each lists as list}
        <Row>
            <Col><Card {list}/></Col>
        </Row>
    {:else}
        <p>Data Kosong</p>
    {/each}
</Container>

<style>

</style>
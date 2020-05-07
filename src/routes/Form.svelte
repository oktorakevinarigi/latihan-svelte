<script>
import {
    Button, Card, CardBody, CardHeader,
    CardTitle, FormGroup, Label, Input
} from "sveltestrap";
import FormStore from '../stores/FormStore.js';

let title
let body

const handleSubmit = async() => {
    
}

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
      bind:value={title}
       />
  </FormGroup>
  <FormGroup>
    <Label for="exampleText">Body</Label>
    <Input type="textarea" name="text" id="exampleText" bind:value={body} />
  </FormGroup>
  <Button color="primary" on:click={handleSubmit}>
      Submit
  </Button>
  </CardBody>
</Card>
</div>

<style>

</style>
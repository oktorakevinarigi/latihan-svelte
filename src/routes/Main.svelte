<script>
    import { Router, Link, Route } from "svelte-routing";
    import Header from './shared/Header.svelte'
    import Home from "./Home.svelte";
    import List from "./List.svelte";
    import Form from "./Form.svelte";

    export let url = "";
</script>

<div>
    <Router url="{url}">
    <Header />
      <div>
        <Route path="/"><Home /></Route>
        <Route path="list" component="{List}" />
        <Route path="form" component="{Form}" />
      </div>
    </Router>
</div>

<style>

</style>
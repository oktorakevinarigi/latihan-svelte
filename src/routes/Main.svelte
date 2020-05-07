<script>
    import { Router, Link, Route } from "svelte-routing";
    import Header from './shared/Header.svelte'
    import Home from "./Home.svelte";
    import About from "./About.svelte";
    import Blog from "./Blog.svelte";

    export let url = "";
</script>

<div>
    <Router url="{url}">
    <Header />
      <div>
        <!-- <Route path="blog/:id" component="{BlogPost}" /> -->
        <Route path="about" component="{About}" />
        <Route path="blog" component="{Blog}" />
        <Route path="/"><Home /></Route>
      </div>
    </Router>
</div>

<style>

</style>
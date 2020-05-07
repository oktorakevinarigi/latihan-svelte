<script>
  import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'sveltestrap';
  import { Router, Link, Route } from "svelte-routing";
  
  let isOpen = false;

</script>

<Navbar color="light" light expand="md">
  <NavbarBrand href="/">Latihan</NavbarBrand>
  <Nav class="ml-auto" navbar>
      <NavItem>
        <NavLink><Link to="/">Home</Link></NavLink>
      </NavItem>
      <NavItem>
        <NavLink><Link to="/list">List</Link></NavLink>
      </NavItem>
      <NavItem>
        <NavLink><Link to="/form">Form</Link></NavLink>
      </NavItem>
  </Nav>
</Navbar>
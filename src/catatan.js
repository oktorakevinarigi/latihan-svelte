//CONTOH 1 ============(cara input value ke variabel)======================================================================================================

// const handleInput = (e) =>{
//     nama = e.target.value
// }

{/* <input type="text" id="nama" on:input={handleInput} bind:value={nama}> */}

//CONTOH 2 ==============(cara looping, kondisi, event modifier)====================================================================================================
// const handleSimpan = () =>{
//     lists = [...lists, {id:Math.random(), nama, nohp, alamat, umur}]
// }

// const handleDelete = (id) =>{
//     lists = lists.filter(x => x.id !== id)
// }

{/* <form on:submit|preventDefault={handleSimpan}> */}

//jika data tidak ada ------
// {:else}
// <p>Data Tidak Ada</p>

// kondisi
// {#if list.umur === 25}
// {/if}

//CONTOH 3 ======================(cara props, dispatch ke props utama, mempersingkat props)============================================================================================

// minlList ===========
// const changeMenu = (e) => {
//       activeMenu = e.detail
//   }
// const handleAdd = (e) =>{
//       lists = [...lists, e.detail]
//       activeMenu = 'List'
// }
// const handleDelete = (e) =>{
//       lists = lists.filter(x => x.id !== e.detail)
// }

{/* <div>
    <Tab {menuList} {activeMenu} on:changeMenu={changeMenu} />
    {#if activeMenu === 'List'}
		<List {lists} on:handleDelete={handleDelete} />
	{:else if activeMenu === 'Form'}
		<Form on:handleAdd={handleAdd}/>
	{/if}
</div> */}

// Shared/Tab =================
// import {createEventDispatcher} from 'svelte'
// const dispatch = createEventDispatcher()

// on:click={() => dispatch('changeMenu', list)}


// YANG ROUTING ==================================================================================================================
{/* <Route path="blog/:id" component="{BlogPost}" /> */}

// home ==============
// import { onMount } from 'svelte';
// onMount(async() => {
//     const res = await fetch('https://reqres.in/api/users?page=2')
//     let pars = await res.json();
//     lists = pars.data
// });


//List ==============
// onMount(async() => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     let pars = await res.json();

//     ListData.update(x => x = pars)
// });
// $ListData


//Form ==============
// import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
// beforeUpdate(() => {
//     console.log("beforeUpdate")
// })
// onMount(() => {
//     console.log("onMount")
// })
// afterUpdate(() =>{
//     console.log("afterUpdate")
// })
// onDestroy(() =>{
//     console.log("onDestroy")
// })

{/* <Input
      type="email"
      name="email"
      id="exampleEmail"
      placeholder="Title"
      bind:value={$FormStore.title}
       />
<Input type="textarea" name="text" id="exampleText" bind:value={$FormStore.body} /> */}

// const handleSubmit = async() => {
//     FormStore.update(x => {
//         return {
//             id:Math.random(),
//             title:title,
//             body:body
//         }
//     })
// }


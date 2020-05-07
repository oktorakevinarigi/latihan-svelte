<script>
    import Tab from './shared/Tab.svelte'
    import Form from './Form.svelte'
    import List from './List.svelte'

    let menuList = ['List', 'Form']
    let activeMenu = 'List'

    let lists = [
        {id:1, nama: 'Malik', nohp: '0863463434', alamat:'Jakarta', umur: 20},
        {id:2, nama: 'Fajar', nohp: '0873732733', alamat:'Bandung', umur: 22},
        {id:3, nama: 'Lusi', nohp: '0833473783', alamat:'jogja', umur:25}
    ]

    const changeMenu = (e) => {
    
    }
    const handleAdd = (e) =>{
        
    }
    const handleDelete = (e) =>{
        
    }

</script>

<div>
    <Tab menuList={menuList} activeMenu={activeMenu} on:changeMenu={changeMenu} />
    {#if activeMenu === 'List'}
		<List {lists} on:handleDelete={handleDelete} />
	{:else if activeMenu === 'Form'}
		<Form on:handleAdd={handleAdd}/>
	{/if}
</div>

<style>
</style>
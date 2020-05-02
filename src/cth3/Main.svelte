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
        activeMenu = e.detail
    }
    const handleAdd = (e) =>{
        lists = [...lists, e.detail]
        activeMenu = 'List'
    }
    const handleDelete = (e) =>{
        lists = lists.filter(x => x.id !== e.detail)
    }

</script>

<div>
    <Tab {menuList} {activeMenu} on:changeMenu={changeMenu} />
    {#if activeMenu === 'List'}
		<List {lists} on:handleDelete={handleDelete} />
	{:else if activeMenu === 'Form'}
		<Form on:handleAdd={handleAdd}/>
	{/if}
</div>

<style>
</style>
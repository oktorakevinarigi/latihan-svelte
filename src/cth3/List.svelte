<script>
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher()

    export let lists
</script>

<div>
    <div>
        <h3>List</h3>
    </div>
        {#each lists as list}
            <div class="box-card">
                <span>Nama: {list.nama}</span>
                <span>No HP: {list.nohp}</span>
                <span>Alamat: {list.alamat}</span>
                <span>Alamat: {list.umur}</span>
                <div class="box-button">
                    <button on:click={() => dispatch('handleDelete', list.id)}>Delete</button>
                </div>
            </div>
            {:else}
            <p>Data Tidak Ada</p>
        {/each}
</div>

<style>
.box-card{
    padding: 10px;
    min-height: 100px;
    box-shadow: 10px 6px 25px -8px rgba(0,0,0,0.75);
    margin: 15px;
}
span{
    display: block;
    line-height: 25px
}
.box-button{
    text-align: center
}
</style>
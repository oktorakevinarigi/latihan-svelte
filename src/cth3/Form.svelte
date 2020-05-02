<script>
    import {createEventDispatcher} from 'svelte'
    
    const dispatch = createEventDispatcher()
    
    let nama = ''
    let nohp = ''
    let alamat = ''
    let umur = ''

    const handleSimpan = () =>{
        dispatch('handleAdd', {id:Math.random(), nama, nohp, alamat, umur})
    }
</script>

<div class="container">
    <form on:submit|preventDefault={handleSimpan}>
        <div class="title">
            <h2>Form Input</h2>
        </div>
        <div>
            <label for="nama">Nama :</label> 
            <input type="text" id="nama" bind:value={nama}>
        </div>
        <div>
            <label for="noHP">No HP</label>
            <input type="number" id="noHP" bind:value={nohp}>
        </div>
        <div>
            <label for="alamat">Alamat</label>
            <textarea cols="30" rows="3" id="alamat" bind:value={alamat}></textarea>
        </div>
        <div>
            <label for="umur">Umur</label>
            <input type="number" id="umur" bind:value={umur}>
        </div>
        <button>Simpan</button>
    </form>

    
</div>

<style>
.title{
    text-align: center;
}
.container{
    margin: 0 auto;
    width: 300px;
}
</style>
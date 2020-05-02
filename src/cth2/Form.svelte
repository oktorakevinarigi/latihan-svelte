<script>
    let nama = ''
    let nohp = ''
    let alamat = ''
    let umur = ''

    let lists = [
        {id:1, nama: 'Malik', nohp: '0863463434', alamat:'Jakarta', umur: 20},
        {id:2, nama: 'Fajar', nohp: '0873732733', alamat:'Bandung', umur: 22},
        {id:3, nama: 'Lusi', nohp: '0833473783', alamat:'jogja', umur:25}
    ]

    const handleSimpan = () =>{
        
    }

    const handleDelete = (id) =>{

    }
</script>

<div class="container">
    <form>
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
                    <button on:click={() => handleDelete(list.id)}>Delete</button>
                </div>
            </div>
        {/each}
</div>

<style>
.title{
    text-align: center;
}
.container{
    margin: 0 auto;
    width: 300px;
}
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
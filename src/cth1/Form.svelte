<script>
    let nama = ''
    let nohp = ''
    let alamat = ''    
</script>

<div class="container">
    <form>
        <div class="title">
            <h2>Form Input</h2>
        </div>
        <div>
            <label for="nama">Nama :</label> 
            <input type="text" id="nama" value=''>
        </div>
        <div>
            <label for="noHP">No HP</label>
            <input type="number" id="noHP" value=''>
        </div>
        <div>
            <label for="alamat">Alamat</label>
            <textarea cols="30" rows="3" id="alamat" value=''></textarea>
        </div>
        <button>Simpan</button>
    </form>

    <h3>View</h3>
    <h4>Nama : </h4>
    <h4>No HP : </h4>
    <h4>Alamat : </h4>
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
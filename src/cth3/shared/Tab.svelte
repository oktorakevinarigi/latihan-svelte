<script>
    export let menuList
    export let activeMenu;
</script>

<div class="tab">
    <ul>
        {#each menuList as list}
            <li class:active={list === activeMenu}>{list}</li>
        {/each}
    </ul>
</div>


<style>
.tab{
    width: 200px;
    margin: 0 auto
}
li{
    list-style-type: none;
    display: inline;
    padding: 20px 15px;
    font-size: 20px
}
.active{
    border-bottom: solid 2px red;
}
</style>
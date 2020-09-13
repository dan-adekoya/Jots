<template>
    <div class="manage">
        <h1>Manage Jots</h1>
        <div class="jotsWritten">
            <div class="jot">
                <h2>Title</h2> <img src="../assets/images/delete.svg" alt="">
            </div>
             <div class="jot">
                <h2>Title</h2> <img src="../assets/images/delete.svg" alt="">
            </div>
             <div class="jot">
                <h2>Title</h2> <img src="../assets/images/delete.svg" alt="">
            </div>
             <div class="jot">
                <h2>Title</h2> <img src="../assets/images/delete.svg" alt="">
            </div>
             <div class="jot">
                <h2>Title</h2> <img src="../assets/images/delete.svg" alt="">
            </div>
             <div class="jot">
                <h2>Title</h2> <img src="../assets/images/delete.svg" alt="">
            </div>
             <div class="jot">
                <h2>Title</h2> <img src="../assets/images/delete.svg" alt="">
            </div>
             <div class="jot">
                <h2>Title</h2> <img src="../assets/images/delete.svg" alt="">
            </div>
             <div class="jot">
                <h2>Title</h2> <img src="../assets/images/delete.svg" alt="">
            </div>
             <div class="jot">
                <h2>Title</h2> <img src="../assets/images/delete.svg" alt="">
            </div>
             <div class="jot">
                <h2>Title</h2> <img src="../assets/images/delete.svg" alt="">
            </div>
             <div class="jot">
                <h2>Title</h2> <img src="../assets/images/delete.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
}
</script>

<style scoped>
.manage{
    text-align: center;
    height: 92vh;
    color: var(--white);
}
.jotsWritten{
    margin-top: 40px;
    width: 100%;
    height: 70vh;
    overflow: hidden;
    overflow-y: scroll;
    padding: 0 30px;
    background: var(--secondary2);
}
.jotsWritten::-webkit-scrollbar{
  width: 6px;
}
.jotsWritten::-webkit-scrollbar-thumb{
  background: var(--secondary)
}
.jotsWritten .jot{
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
    border-bottom: 1px solid var(--white);
}
.jotsWritten .jot  h2{
    font-weight: 200;
}
.jotsWritten .jot img{
    cursor: pointer;
}
</style>

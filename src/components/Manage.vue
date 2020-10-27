<template>
    <div class="manage">
        <h1>Manage Jots</h1>
        <div class="jotsWritten">
            <ul>
                <li class="jot" v-for="(note, index) in notess" :key="index">{{note.title}} <button class="submit"></button></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['notess'],
    data(){
        return {
            
        }
    },
    method:{
    }
}
</script>

<style scoped>
.manage{
    text-align: center;
    height: 92vh;
    border-radius: 20px;
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
    border-radius: 20px;
}
.jotsWritten::-webkit-scrollbar{
  width: 6px;
}
.jotsWritten::-webkit-scrollbar-thumb{
  background: var(--secondary)
}
.jotsWritten .jot{
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    list-style: none;
    border-bottom: 1px solid var(--white);
    overflow: hidden;
}
.jotsWritten .jot button{
    padding: 10px 30px;
    border: none;
    font-size: 17px;
    border-radius: 10px;
    color: #FFFFFF;
    background: #00f60091; 
    outline: none;
}
strong{
    font-size: 15px;
}
</style>

<template>
    <div class="manage">
    <h4 v-bind:class="{save: save}" class="swr">Refreshing</h4>

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
            save: true
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
.swr{
  opacity: 0;
  color: var(--white);
  background: #0DFF6E;
  padding: 10px;
  width: 200px;
  position: absolute;
  transition: all 300ms;
  top: 8%;
  right: 0%;
  pointer-events: none;
  font-weight: 100;
}
.swr.save{
  opacity: 1;
  animation: fade 4s 0s 1 forwards ;
}
@keyframes fade{
    0%{
        opacity: 0
    }
    30%{
        opacity: 1
    }
    60%{
        opacity: 1;
    }
    90%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
</style>

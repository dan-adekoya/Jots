<template>
    <div class="manage">
    <h4 v-bind:class="{save: save}" class="swr">Refreshing</h4>

        <h1>Manage Jots</h1>
        <div class="jotsWritten">
            <ul>
                <li class="jot" v-for="(note, index) in notess" :key="index">{{note.title}} <button @click="openModal(note.title, note.note)" class="submit">preview</button></li>
            </ul>
        </div>
        <div class="preview" v-bind:class="{open: open}">
      <img src="../assets/images/close.svg" alt="" class="close" @click="open = false">
        <h1>Preview</h1>
        <h2>{{title}}</h2>
        <p>{{note}}</p>
    </div>
    </div>
</template>

<script>
export default {
    props: ['notess'],
    data(){
        return {
            save: true,
            open: false,
            title: '',
            note: '',
        }
    },
    methods:{
        openModal(title, note){
            this.open = true
            this.title = title
            this.note = note
        }
    }
}
</script>

<style scoped>

/* PREVIEW */
.preview{
  position: fixed;
  top: 0;
  left: 0;
  visibility: hidden;
  color: var(--white);
  width: 100%;
  height: 100vh;
  opacity: 0;
  transition: all 300ms;
  background: rgba(0, 0, 0, 0.616);
  z-index: 2;
}
.preview.open{
  visibility: visible;
  opacity: 1;
}
.close{
  position: absolute;
  top: 20px;
  width: 30px;
  right: 20px;
  cursor: pointer;
}
.preview h1{
  transform: translateY(30px);
  width: 200px;
  margin: auto;
}
.preview h2{
  width: 90%;
  padding: 10px;
  margin: 0 auto;
  margin-top: 40px;
  background: #3A4774;
}
.preview p{
  width: 90%;
  height: 70vh;
  overflow: hidden;
  overflow-y: scroll;
  margin: 0 auto;
  margin-top: 40px;
  background: #3A4774;
  padding: 10px;
  cursor: auto;
}
.preview p::-webkit-scrollbar{
  width: 6px;
}
.preview p::-webkit-scrollbar-thumb{
  background: var(--secondary)
}

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
    padding: 10px 20px;
    border: none;
    font-size: 14px;
    border-radius: 10px;
    color: #FFFFFF;
    background: #00f60091; 
    cursor: pointer;
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

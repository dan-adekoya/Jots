<template>
  <div id="app">
    <Nav />
    <div class="router-view">
      <router-view :notess="notes" />
    </div>
    <h2 v-if="note" class="note">NOTE<br>Jots doesn't save any data being written into a database. This was just created for demo purposes only.<br>Enjoy the Demo ! <span @click="note = false">close</span> </h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: [
        {title: "Jots", note: 'Omooo'}
      ],
      note: true
    }
  },
  methods: {
    removeJot(not){
        let noteIndex = this.notes.indexOf(not)
        this.notes.splice(noteIndex, 1)
    }
  }
}
</script>

<style>
:root{
    --primary: #3A4774;
    --secondary: #607FEC;
    --secondary2: rgb(96, 127, 236, 0.36);
    --white: #FFFFFF;
    --black: #000000;
}
#app{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.router-view{
  padding: 20px;
  width: 100%;
}
.note{
  position: fixed;
  width: 550px;
  padding: 10px;
  background: var(--primary);
  color: white;
  font-size: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  z-index: 10;
}
.note span{
  padding: 10px;
  background: green;
  margin: 5px;  
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 20px;
  cursor: pointer;
}
@media screen and (max-width: 550px) {
  .note{
    width: 90%;
  }
}
</style>

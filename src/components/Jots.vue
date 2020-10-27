<template>
  <div class="jots" >
    <form @submit.prevent="addJots">
          <input type="text" v-model="title" placeholder="Title :">
          <textarea value="" v-model="note" cols="30" rows="10"></textarea>
      <div class="btn">
        <button class="mainBtn">Save</button>
        <button @click="clear" class="mainBtn">Clear</button>
        <p class="Btn" @click="disallow">Preview Note</p>
      </div>
    </form>
    <h4 v-if="warn" class="awr">Input the fields</h4>

    <div class="preview" v-bind:class="{open: open}">
      <img src="../assets/images/close.svg" alt="" class="close" @click="open =! open">
        <h1>Preview</h1>
        <h2>{{title}}</h2>
        <p>{{note}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ['notess'],
  data() {
    return {
      title: '',
      note: '',
      warn: false,
      open: false,
    }
  },
  methods: {
    addJots(){
      if(this.title == '' || this.note == ''){
        this.warn = true
      }
      else{ 
        setTimeout(() => {
          this.notess.unshift({title: this.title, note: this.note})
          this.title = ''
          this.note = ''
          this.save = true
          this.save = true
          this.warn = false
          this.$router.push('/manage')
        }, 1000);
        
      }

    },
    disallow(){
      if(this.title == '' || this.note == ''){
        this.open = false
        this.warn = true
      }else{
        this.open = true
        this.warn = false
      }
    },
    clear(){
      this.title = ''
      this.note = ''
    }
  },
}
</script>

<style scoped>
.jots{
  text-align: center;
  height: 92vh;
}
form input{
  width: 100%;
  padding: 10px;
  background: var(--secondary2);
  border: none;
  outline: none;
  font-size: 20px;
  color: var(--white);
  border-radius: 20px;

}
::placeholder{
  color: var(--white);
  font-size: 20px;
}
form textarea{
  width: 100%;
  padding: 10px;
  outline: none;
  color: var(--white);
  height: 70vh;
  margin: 10px 0;
  background: var(--secondary2);
  border: none;
  font-size: 20px;
    border-radius: 20px;
}
.btn{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn .mainBtn{
  flex: 1;
  border-radius: 20px;

}
.Btn{
  flex: 3;
  border-radius: 20px;
}
.btn button, p{
  margin: 0 2%; 
  font-size: 20px;
  padding: 20px 40px;
  border: none;
  outline: none;
  color: var(--white);
  cursor: pointer;
  border-radius: 20px;
}
.btn button:nth-child(1){
  background: #0DFF6E
}
.btn button:nth-child(2){
  background: #FF4444
}
.btn p{
  padding: 20px  0;
  background: #6D7CFF
}
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
.awr{
  color: var(--white);
  background: rgb(255, 145, 145);
  padding: 10px;
  width: 200px;
  position: absolute;
  transition: all 300ms;
  top: 8%;
  right: 0%;
  pointer-events: none;
  font-weight: 100;
}
@media screen and (max-width: 900px) {
 .btn button, p{
   margin: 0 0%;
   padding: 20px 20px;
   font-size: 15px;
 } 
}

</style>

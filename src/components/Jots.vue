<template>
  <div class="jots">
    <form>
      <input type="text" placeholder="Title :">
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <div class="btn">
        <button class="mainBtn">Save</button>
        <button class="mainBtn">Clear</button>
        <p disabled="disabled" class="Btn" @click="open =! open">Preview Note</p>
      </div>
    </form>
    <div class="preview" v-bind:class="{open: open}">
      <img src="../assets/images/close.svg" alt="" class="close" @click="open =! open">
        <h1>Preview</h1>
        <h2>Title</h2>
        <p></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
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
}
.btn{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn .mainBtn{
  flex: 1
}
.Btn{
  flex: 3;
}
.btn button, p{
  margin: 0 2%; 
  font-size: 20px;
  padding: 20px 40px;
  border: none;
  outline: none;
  color: var(--white);
  cursor: pointer;
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
  background: rgba(0, 0, 0, 0.616);
}
.preview.open{
  visibility: visible;
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
}
.preview p::-webkit-scrollbar{
  width: 6px;
}
.preview p::-webkit-scrollbar-thumb{
  background: var(--secondary)
}
@media screen and (max-width: 900px) {
 .btn button, p{
   margin: 0 0%;
   padding: 20px 20px;
   font-size: 15px;
 } 
}
</style>

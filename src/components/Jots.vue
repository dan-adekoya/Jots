<template>
  <div class="jots">
    <form>
      <input type="text" placeholder="Title :">
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <div class="btn">
        <button class="mainBtn">Save</button>
        <button class="mainBtn">Clear</button>
        <button disabled="disabled" class="Btn">Preview Note</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
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
.btn button{
  margin: 0 2%; 
  font-size: 20px;
  padding: 20px 40px;
  border: none;
  outline: none;
  color: var(--white)
}
.btn button:nth-child(1){
  background: #0DFF6E
}
.btn button:nth-child(2){
  background: #FF4444
}
.btn button:nth-child(3){
  background: #6D7CFF
}
@media screen and (max-width: 900px) {
 .btn button{
   margin: 0 0%;
   padding: 20px 20px;
   font-size: 15px;
 } 
}
</style>

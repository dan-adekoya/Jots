<template>
  <div id="app">
    <Nav></Nav>
    <div class="router-view">
      <router-view></router-view>
    </div>
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
</style>

<template>
    <div>
        <div class="nav" v-bind:class="{open: open}" @click="open =! open">
            <div class="logos">
                <img class="logo" src="../assets/images/logobeta.svg" alt="">
            </div>
            <ul v-bind:class="{open: open}">
                    <li><router-link class="links" to="/"><img src="../assets/images/home.svg" alt="" srcset=""> <p>Jots</p> </router-link></li>
                    <li><router-link class="links" to="/manage"><img src="../assets/images/manage.svg" alt="" srcset=""><p>Manage</p> </router-link></li>
                    <li><router-link class="links" to="/dev"><img src="../assets/images/dev.svg" alt="" srcset=""><p>Developer</p></router-link></li>
            </ul>       
            <div class="socials">
                <a href="https://twitter.com/DanielAdekoya11" target="_blank"><img src="../assets/images/twitter.svg" alt=""></a>
                <a href="https://www.instagram.com/danieladekoya_/" target="_blank"><img src="../assets/images/instagram.svg" alt=""></a>
                <a href="https://www.linkedin.com/in/daniel-adekoya-010810192/" target="_blank"><img src="../assets/images/linkedin.svg" alt=""></a>
            </div>
        </div>

        <div class="space">

        </div>
    </div>
</template>

<script>
export default {
data() {
    return {
        open: false,
    }
},
methods: {
        
},
}
</script>

<style scoped>
.nav{
    width: 300px;
    height: 100vh;
    background: var(--secondary2);
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    left: 0;
    position: fixed;
    justify-content: space-around;
    transition: all 300ms;
}
.space{
    width: 300px;
    height: 10px;
}
ul{
    list-style: none;
    width: 100%;
}
ul li{
    width: 100%;
    margin: 20px 0;
}
ul li .links{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 5px 50px;
    color: var(--white);
    text-decoration: none;
}
.links.router-link-exact-active{
    background: #3A4774;
    transition: all 600ms
}
li .links p{
    margin-left: 20px;
}
.socials{
    display: flex;
    justify-content: space-evenly;
    width: 100%;
}
@media screen and (max-width: 900px) {
  .nav{
    transform: translateX(-100%);
    background: var(--secondary2);
    position: fixed;
    top: 0;
    width: 250px;
    left: 0;
  }
  .nav::after{
    content: '';
    color: white;
    position: absolute;
    background: url(../assets/images/right.svg);
    right: -32px;
    width: 40px;
    height: 40px;
    transform: translateY(-50%);
    background-size: cover; 
    cursor: pointer;
    top: 50%
   }
  .nav.open{
      transform: translateX(0%);
      background: var(--secondary)
  }
  ul{
    pointer-events: none
  }
  ul.open{
      pointer-events: all;
  }
  .space{
    width: 0px;
    height: 10px;
    transition: all 300ms
    }
}
</style>

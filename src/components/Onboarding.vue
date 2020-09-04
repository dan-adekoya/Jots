<template>
    <div>
        <img src="../assets/images/onboardinglogo.svg" alt="">
        <router-link class="link" to="/home">Write your secrets 😋</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div{
    text-align: center;
    display: grid;
    place-items: center;
    height: 80vh;
}
img{
    width: 200px
}
.link{
    margin: 30px 0;
    padding: 20px;
    background: #0DFF6E;
    color: white;
    text-decoration: none;
    font-size: 23px;
}
</style>

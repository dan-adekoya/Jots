<template>
    <div class="dev">
        <div class="daniel">
            <img src="../assets/images/daniel.svg" alt="">
            <h1>Adekoya<br>Daniel</h1>
        </div>
        <div class="about">
        <div class="aboutApp">
                <h2>About App</h2>
                <p>
                    Jots is web app used to type in notes, meant for only you to view and sharing your inner thoughts to your self, in other for you to understand and think through what you encounter or done.
                </p>
            </div>            
            <div class="aboutDev">
                <h2>About Developer</h2>
                <p>
                     Daniel Adekoya is a 17 years old web developer based in Lagos, Nigeria. That’s all the personal info you get from me, the rest are in my Jots ;)
                </p>
            </div>

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

<style scoped>
.dev{
    height: auto;
    color: var(--white);
    padding: 10px 0;
}
.daniel{
    display: flex;
    justify-content: space-evenly;
    margin: auto;
    align-items: center;
    flex-wrap: wrap-reverse;
    color: var(--white)
}
.daniel img{
    width: 300px; 
    margin: 10px;
}
.daniel h1{
    text-align: right;
    font-size: 40px;
    margin: 10px;
    font-weight: 200; 
}

.about{
    margin-top: 40px;
    width: 100%;
    height: 40vh;
    overflow: hidden;
    overflow-y: scroll;
    padding: 20px 30px;
    background: var(--secondary2);
    border-radius: 20px;
}
.about::-webkit-scrollbar{
  width: 6px;
}
.about::-webkit-scrollbar-thumb{
  background: var(--secondary)
}
.about h2{
    font-weight: 400;
}
.about p{
    font-weight: 50;
}
.aboutDev{
    margin-top: 50px;
}
@media screen and (max-width: 550px) {
    .dev{
        height: 92vh;
        text-align: center;
    }
    .daniel h1{
        margin: 0px;
        margin-bottom: 10px;
        text-align: center;
    }
    .daniel img{
        width: 300px; 
        margin: 0px;
        margin-top: 10px;
    }
}
</style>

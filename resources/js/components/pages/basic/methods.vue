<template>
    <div>
        <h1>O número é: {{ views }}</h1>
        <button @click="updateCounter(1)">Incrementar</button>
        <button @click="updateCounter(-1)">Descrementar</button>
        <br>
        <br><br>

        <div>

        </div>


    </div>
</template>

<script>
export default{
    data(){
        return {
            views:0,
            blogs: [],
        }
    },
    methods: {
        updateCounter(number){
            this.views += number
        }
    },

    created() {
        // chamar o servidor para obter visualizações deste post de blog...
        this.views = 100
        // Capturando os posts do blog.
        let posts = [
            {title: 'Esse é o titulo do post','post': 'esse é o post do blog', id: 1},
            {title: 'Esse é o titulo do post','post': 'esse é o post do blog', id: 2},
            {title: 'Esse é o titulo do post','post': 'esse é o post do blog', id: 3},
            {title: 'Esse é o titulo do post','post': 'esse é o post do blog', id: 4},
        ]
    }
}
</script>
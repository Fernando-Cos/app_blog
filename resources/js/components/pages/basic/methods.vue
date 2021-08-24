<template>
    <div>
        <h1>O número é: {{ views }}</h1>
        <button @click="updateCounter(1)">Incrementar</button>
        <button @click="updateCounter(-1)">Descrementar</button>
        <br>
        <br><br>
        <div v-for="(blog, i) in blogs" :key="i" v-if="blogs.length">
            <h1>{{blog.title}}</h1>
            <p>{{blog.post}}</p>
        </div>
        <hr>

        <div>
            <h2 v-if="showItem">Todos os itens se "showItem" for verdadeiro </h2>
            <p v-else>Todos os itens se "showItem" for False </p>
        </div>
        <button @click="showItem = !showItem">checando os itens</button>
    </div>
</template>


<script>
export default{
    data(){
        return {
            views:0,
            blogs: [],
            showItem: false,
        }
    },
    methods: {
        updateCounter(number){
            this.views += number
        },
        chengeShowItem(){
            this.showItem = !this.showItem
        }
    },
    created() {
        // chamar o servidor para obter visualizações deste post de blog...
        this.views = 100
        // Capturando os posts do blog.
        let posts = [
            {title: 'Esse é o titulo do post','post': 'esse é o post do blog 1', id: 1},
            {title: 'Esse é o titulo do post','post': 'esse é o post do blog 2', id: 2},
            {title: 'Esse é o titulo do post','post': 'esse é o post do blog 3', id: 3},
            {title: 'Esse é o titulo do post','post': 'esse é o post do blog 4', id: 4},
        ]
        this.blogs = posts
    }
}
</script>
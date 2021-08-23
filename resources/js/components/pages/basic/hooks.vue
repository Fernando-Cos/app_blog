<template>
    <div>
        <h2 ref="myref">Tutorial de Hooks...</h2>
        <p>My nome é: {{name}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                name: 'fernando'
            }
        },
        created() {
            // chamando principalmente dados iniciais dele
            console.log('testeapp', this.name);
        }
    } 

</script>



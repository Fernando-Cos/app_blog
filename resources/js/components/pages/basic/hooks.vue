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

        beforeCreate() {
            console.log(this.name)
        },

        created() {
            // chamando principalmente dados iniciais dele
            console.log('testeapp', this.name);
        },
        mounted(){
            console.log(this.$refs.myref);
        }
    } 

</script>



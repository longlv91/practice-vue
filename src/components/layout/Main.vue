<template>
    <section>
        <v-content></v-content>
        <h1>{{msg}}</h1>
        <img alt="Vue logo" src="../../assets/logo.png">
    </section>
</template>

<script>
export default {
    name: 'Main',
    data: () => {
        return {
            msg: "Main content"
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


<template>
    <section>
        <v-toolbar color="indigo" dark fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-toolbar>
    </section>
</template>

<script>
export default {
    name: 'Header',
    data: () => {
        return {
            msg: "Header content"
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


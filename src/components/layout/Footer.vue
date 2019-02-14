<template>
    <section>
        <v-footer color="indigo" app inset>
            <span class="white--text">
                {{msg}}
            </span>
        </v-footer>
    </section>
</template>

<script>
export default {
    name: 'Footer',
    data: () => {
        return {
            msg: "Footer content"
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


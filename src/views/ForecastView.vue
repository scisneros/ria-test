<script>
import cities from '../data/cities.js'

export default {
    data() {
        return {
            cities: cities,
        }
    }
}
</script>

<template>
    {{ cities[$route.params.nameId] }}
</template>

<template>
    <v-snackbar
        top
        v-model="snackbarShown"
        :color="snackbarError ? 'error' : 'success'"
        :timeout="snackbarError ? 6000 : 3000"
    >
        <v-icon v-if="snackbarError">alert-circle</v-icon>
        <v-icon v-else>check-circle-outline</v-icon>
        {{ snackbarMessage }}
    </v-snackbar>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
    computed: {
        ...mapGetters(['snackbarShown', 'snackbarMessage', 'snackbarError']),
    },
});
</script>

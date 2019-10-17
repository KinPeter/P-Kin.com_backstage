<template>
    <v-snackbar
        top
        v-model="showSnackbar"
        :color="snackbarError ? 'error' : 'success'"
        :timeout="snackbarTimeout"
    >
        <span v-if="snackbarError" class="mr-2"> <v-icon color="white">mdi-alert-circle</v-icon> </span>
        <span v-else class="mr-2"> <v-icon color="white">mdi-check-circle-outline</v-icon> </span>
        <span> {{ snackbarMessage }} </span>
        <v-spacer></v-spacer>
    </v-snackbar>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
    methods: {
        ...mapActions(['closeSnackbar']),
    },
    computed: {
        ...mapGetters(['snackbarShown', 'snackbarMessage', 'snackbarError', 'snackbarTimeout']),
        showSnackbar: {
            get() {
                return this.snackbarShown;
            },
            set(v: boolean) {
                this.closeSnackbar();
            },
        },
    },
});
</script>

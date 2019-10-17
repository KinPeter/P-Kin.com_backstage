<template>
    <v-app-bar app color="secondary" dark>
        <v-toolbar-title class="headline text-uppercase">
            <span>P-kin.com</span>
            <span class="font-weight-light">/backstage</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <template v-if="true">
            <v-btn text to="/skills">skills</v-btn>
            <v-btn text to="/portfolio"><span class="">portfolio</span></v-btn>
            <v-btn text to="/pens"><span class="">pens</span></v-btn>
            <v-btn text icon class="ml-5"
                @click="logout">
                <v-icon>mdi-logout-variant</v-icon>
            </v-btn>
        </template>
    </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    methods: {
        logout(): void {
            // call action logout
        },
    },
});
</script>

<style lang="scss">
    
</style>
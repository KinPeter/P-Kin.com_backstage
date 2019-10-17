<template>
    <v-row justify="center" no-gutters>
        <v-col md="5">
            <v-card :loading="isLoading">
                <v-card-title>Log in</v-card-title>
                <v-card-subtitle>Please enter your credentials</v-card-subtitle>
                <v-form class="pa-4" ref="loginForm">
                    <v-text-field
                        v-model="email"
                        label="Email"
                        type="email"
                        outlined
                        required>
                    </v-text-field>
                    <v-text-field
                        v-model="password"
                        label="Password"
                        type="password"
                        outlined
                        required>
                    </v-text-field>
                    <div class="d-flex justify-center">
                        <v-btn 
                            raised 
                            color="primary" 
                            class="mx-auto"
                            :disabled="!isValid"
                            @click="login({email, password})">
                            Log in
                        </v-btn>
                    </div>
                </v-form>
            </v-card>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
    data() {
        return {
            email: '',
            password: '',
        };
    },
    computed: {
        ...mapGetters(['isLoading']),
        isValid(): boolean {
            return /.+@.+\..+/.test(this.email) && !!this.password.length;
        },
    },
    methods: {
        ...mapActions(['login']),
    },
});
</script>

<style lang="scss">
    
</style>
<template>
<v-row justify="center">
    <v-col sm="12" md="10" lg="10" xl="8">
        <v-card :loading="isLoading">
            <div class="d-flex justify-space-between">
                <v-card-title>Edit Portfolio Items</v-card-title>
                <div class="mr-5 mt-n3" v-if="!isLoading">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn fab dark color="primary" class="mr-3" v-on="on" @click="addNew">
                                <v-icon dark>mdi-plus</v-icon>
                            </v-btn>
                        </template>
                        <span>Add new</span>
                    </v-tooltip>
                </div>
            </div>
            <v-container v-if="!isLoading">
                <v-expansion-panels>
                    <v-expansion-panel
                        v-for="(item, i) in portfolioSnapshot"
                        :key="item.id">
                        <v-expansion-panel-header class="font-weight-bold">{{ item.name }}</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <div class="d-flex justify-end mb-n10">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn fab dark color="success" v-on="on" @click="saveChanges(i)">
                                            <v-icon dark>mdi-content-save-outline</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Save changes</span>
                                </v-tooltip>
                            </div>

                            <v-row>
                                <v-col sm="4" class="py-0">
                                    <v-text-field 
                                        dense
                                        v-model="portfolioSnapshot[i].name"
                                        label="Name"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col sm="8" class="py-0">
                                    <v-textarea 
                                        dense auto-grow rows="2"
                                        v-model="portfolioSnapshot[i].descr"
                                        label="Description"
                                    ></v-textarea>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col sm="12" class="py-0">
                                    Badges
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col sm="8" class="py-0">
                                    Features
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col sm="6" class="py-0">
                                    <v-text-field 
                                        dense
                                        v-model="portfolioSnapshot[i].link"
                                        label="Link"
                                    ></v-text-field>
                                </v-col>
                                <v-col sm="6" class="py-0">
                                    <v-text-field 
                                        dense
                                        v-model="portfolioSnapshot[i].repo"
                                        label="Repository"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col sm="4" class="py-0">
                                    <v-text-field 
                                        dense
                                        v-model="portfolioSnapshot[i].image"
                                        label="Image filename"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-container>
        </v-card>
    </v-col>
</v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { UI } from '../store/getters';
import { PortfolioActions } from '../store/actions';
import { PortfolioItem } from '../models/portfolio';


export default Vue.extend({
    computed: {
        ...mapGetters({
            isLoading: UI.IS_LOADING,
        }),
        portfolioSnapshot(): PortfolioItem[] {
            return this.$store.getters.portfolioItems;
        },
    },
    methods: {
        ...mapActions({
            addNew: PortfolioActions.ADD_NEW_PORTFOLIO,
        }),
        saveChanges(index: number): void {
            const item = this.portfolioSnapshot[index];
            if (!!item.id) {
                // call update
            } else {
                // call save new
            }
        },
    },
});
</script>

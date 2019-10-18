<template>
    <bs-skills></bs-skills>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import { SkillsActions } from '../store/actions';
import SkillsEditVue from '../components/SkillsEdit.vue';

export default Vue.extend({
    components: {
        bsSkills: SkillsEditVue,
    },
    created() {
        this.$store.dispatch(SkillsActions.FETCH_SKILLS);
        this.$store.dispatch(SkillsActions.FETCH_OTHERS);
    },
});
</script>

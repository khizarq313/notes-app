<template>
    <section class="nav-bar">
        <button :class="panel === 'Notes' ? 'current-nav-btn' : 'nav-btn'" @click="changePanel('Notes')">
            <span class="material-symbols-outlined">home</span>
        </button>
        <button :class="panel === 'Favorite' ? 'current-nav-btn' : 'nav-btn'" @click="changePanel('Favorite')">
            <span class="material-symbols-outlined">favorite</span>
        </button>
        <button :class="panel === 'Archive' ? 'current-nav-btn' : 'nav-btn'" @click="changePanel('Archive')">
            <span class="material-symbols-outlined">archive</span>
        </button>
        <button :class="panel === 'Trash' ? 'current-nav-btn' : 'nav-btn'" @click="changePanel('Trash')">
            <span class="material-symbols-outlined">delete</span>
        </button>
    </section>
</template>

<script lang="ts">

    export default{
        name: "NavBar",
        props: {
            panel: {
                type: String,
                required: true
            }
        },
        emits: ["change-panel"],
        methods: {
            changePanel: function(value: string) {
                this.$emit("change-panel",value);
            }
        }
    }
</script>

<style lang="scss">
  @import './Navigation\ Bar.scss';
</style>
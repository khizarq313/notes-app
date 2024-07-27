<template>
    <section :class="isDark ? ['main-container','black']: ['main-container','light']">
        <header-section @note-theme="changeNoteTheme" :emptyBin="emptyBin" :panel="panel"></header-section>
        <notes :panel="panel" :isDark="isDark" @bin-length="checkBinLength"></notes>
        <nav-bar @change-panel="changePanel" :panel="panel"></nav-bar>
    </section>
</template>

<script lang="ts">
    import HeaderSection from './components/Header Section/HeaderSection.vue';
    import NavigationBar from './components/Navigation Bar/NavigationBar.vue';
    import Notes from './components/Notes/Notes.vue';



    type Datatype = {
        panel: string,
        isDark: boolean,
        emptyBin: boolean,
    }
    
    export default{
        components: {
            "header-section": HeaderSection,
            "nav-bar": NavigationBar,
            "notes": Notes
        },
        data: function(): Datatype {
            return {
                panel: "Notes",
                isDark: true,
                emptyBin: true,
            }
        },
        methods: {
            changeNoteTheme: function(noteIsDark: boolean) {
                this.isDark = noteIsDark;
            },
            changePanel: function(value: string) {
                this.panel = value;
            },
            checkBinLength: function(value: number) {
                if (value === 0) {
                    this.emptyBin = true;
                } else {
                    this.emptyBin = false;
                }
            },
        }
    }

</script>

<style lang="scss">
    @import "./styles/main.scss"
</style>

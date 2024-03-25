<template>
    <section class="header-section">
        <div class="header">
            <h1> {{ panel }} </h1>
        <button class="theme-btn" @click="changeTheme">
            <span v-if="!isDark" class="svg-bg light sun-svg">
                <span class="material-symbols-rounded">light_mode</span>
            </span>
            <span v-if="isDark" class="svg-bg dark moon-svg">
                <span class="material-symbols-rounded">dark_mode</span>
            </span>
        </button>
        </div>
    </section>
</template>

<script lang="ts"> 

    type Datatype = {
        isDark: boolean
    }
    export default{
        name: "AppHeader",
        props: {
            panel: {
                type: String,
                required: true
            },
            emptyBin: {
                type: Boolean,
                required: true
            }
        },
        emits: ["noteTheme"],
        data: function(): Datatype {
            return{
                isDark: true
            }
        },
        methods: {
            changeTheme: function() {
                this.isDark = !this.isDark;
                this.$emit("noteTheme",this.isDark);
            }
        },
        computed: {
            trashHeader: function(): boolean {
                return this.panel === 'Trash' && !this.emptyBin;
            }
        }
    }
</script>

<style lang="scss">
  @import './Header\ Section.scss';
</style>
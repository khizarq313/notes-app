<template>
    <div class="theme-palette">
        <button 
            class="palette-btn ultramarine-blue"
            @click="changeTheme('ultramarine-blue')"
            :disabled="trashed">
            <span v-if="theme === 'ultramarine-blue'" class="material-symbols-outlined">done</span>
        </button>
        <button 
            class="palette-btn mustard"
            @click="changeTheme('mustard')"
            :disabled="trashed">
            <span v-if="theme === 'mustard'" class="material-symbols-outlined">done</span>
        </button>
        <button
            class="palette-btn coral"
            @click="changeTheme('coral')"
            :disabled="trashed">
            <span  v-if="theme === 'coral'" class="material-symbols-outlined">done</span>
        </button>
        <button 
            class="palette-btn white"
            @click="changeTheme('white')"
            :disabled="trashed">
            <span v-if="theme === 'white'" class="material-symbols-outlined">done</span>
        </button>
        <button 
            class="palette-btn mystic-maroon"
            @click="changeTheme('mystic-maroon')"
            :disabled="trashed">
            <span v-if="theme === 'mystic-maroon'" class="material-symbols-outlined">done</span>
        </button>
        <button 
            class="palette-btn purple"
            @click="changeTheme('purple')"
            :disabled="trashed">
            <span v-if="theme === 'purple'" class="material-symbols-outlined">done</span>
        </button>
        <button 
            class="palette-btn bright-mint"
            @click="changeTheme('bright-mint')"
            :disabled="trashed">
            <span v-if="theme === 'bright-mint'" class="material-symbols-outlined">done</span>
        </button>
        <button 
            class="palette-btn black-img"  
            @click="changeTheme('black')"
            :disabled="trashed">
            <span v-if="theme === 'black'" style="fill: white;" class="material-symbols-outlined">done</span>
        </button>
    </div>
</template>

<script lang="ts">

    export default{
        name:"ThemePalette",
        props: {
            noteIsNew: {
                type: Boolean,
                required: true
            },
            trashed: {
                type: Boolean,
                required: true
            },
            theme: {
                type: String,
                required: true
            }
        },
        emits: ["change-theme"],
        methods: {
            changeTheme: function(value: string) {
                this.$emit("change-theme",value);
            }
        }
    }
</script>

<style lang="scss">
  @import './Theme\ Palette.scss';
</style>
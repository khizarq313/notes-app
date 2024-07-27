<template>
        <div v-if="currentPanelLength === 0" class="hint-container">
            <div v-if="panel === 'Notes'" class="hint-text home-hint" @click="openEditor">
                <notes></notes>
                <h1>Anything to add?</h1>
            </div>
            <div  v-if="panel === 'Favorite'" class="hint-text">
                <favorite></favorite>
                <h1>No favorite notes</h1>
            </div>
            <div  v-if="panel === 'Archive'" class="hint-text">
                <archive></archive>
                <h1>Archive is empty</h1>
            </div>
            <div  v-if="panel === 'Trash'" class="hint-text">
                <trash></trash>
                <h1>Trash is empty</h1>
            </div>
        </div>
</template>

<script lang="ts">
    import Notes from "../../icons/Notes.vue";
    import Favorite from "../../icons/Favorite.vue";
    import Trash from "../../icons/Trash.vue";
    import ArchiveIcon from "../../icons/ArchiveIcon.vue";

    export default{
        name: "HintText",
        components: {
            "notes": Notes,
            "favorite": Favorite,
            "trash": Trash,
            "archive": ArchiveIcon
        },
        props: {
            currentPanelNotes: {
                type: Array,
                required: true
            },
            panel: {
                type: String,
                required:true
            },
            panelLength: {
                type: Number,
                required: true
            }
        },
        emits: ["open-editor"],
        methods: {
            openEditor: function() {
                this.$emit("open-editor");
            }
        },
        computed: {
            currentPanelLength: function(): number {
                if (this.panel === "Notes") {
                    return this.panelLength;
                } else {
                    return this.currentPanelNotes.length;
                }
            }
        }
    }
</script>

<style lang="scss">
  @import './Hint\ Text.scss';
</style>
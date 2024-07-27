<template>
  <span>
    <section 
    :class="moreOptions ? ['more-options', 'more-options-dark'] : 'more-options'"
    >
    <div v-if="moreOptions" class="options-container">
      <div>
        <theme-palette
          :theme="theme"
          :noteIsNew="noteIsNew"
          :trashed="trashed"
          @change-theme="changeTheme"
        >
        </theme-palette>
      </div>
      <button :disabled="noteIsNew" v-if="!trashed" @click="updateBin" class="option-btn">
        <span class="material-symbols-outlined">delete</span>
        <h2>Delete Note</h2>
      </button>
      <button v-if="!noteIsNew && trashed" @click="updateBin" class="option-btn">
        <span class="material-symbols-outlined">restore_from_trash</span>
        <h2>Restore Note</h2>
      </button>
      <button
        v-if="!taskPanel"
        :disabled="trashed"
        @click="openTaskEditor"
        class="option-btn"
      >
      <span class="material-symbols-outlined">add</span>
        <h2>List item</h2>
      </button>
      <button :disabled="noteIsNew || archived || trashed" @click="copyNote" class="option-btn">
        <span class="material-symbols-outlined">content_copy</span>
        <h2>Copy Note</h2>
      </button>
      <button
        :disabled="noteIsNew || archived || trashed"
        v-if="!archived"
        @click="updateArchive"
        class="option-btn"
      >
      <span class="material-symbols-outlined">archive</span>
        <h2>Archive Note</h2>
      </button>
      <button v-if="!noteIsNew && archived" @click="updateArchive" class="option-btn">
        <span class="material-symbols-outlined">unarchive</span>
        <h2>Unrchive Note</h2>
      </button>
      <button v-if="trashed" :disabled="noteIsNew" @click="deleteNote" class="option-btn">
        <span class="material-symbols-outlined">delete_forever</span>
        <h2>Delete Note Permanently</h2>
      </button>
      <button
        class="pin-note-btn option-btn"
        v-if="!trashed && !archived && !pin"
        @click="changePin"
      >
        <pin-icon></pin-icon>
        <h2>Pin Note</h2>
      </button>
      <button
        class="pin-note-btn option-btn"
        v-if="!trashed && !archived && pin"
        @click="changePin"
      >
        <unpin></unpin>
        <h2>Remove Pin</h2>
      </button>
    </div>
    <div class="options-panel">
      <button :class="moreOptions ? 'option-btn': 'gallery-btn'">
        <!-- @click="getImage" -->
        <input
          ref="inputRef"
          type="file"
          accept="image"
          multiple
          @change="updateImages"
          style="display: none"
        />
        <span class="material-symbols-outlined">image</span>
      </button>
      <button @click="toggleMoreOptions" :class="moreOptions ? 'option-btn' : 'more-option-btn'">
        <span class="material-symbols-outlined">more_vert</span>
      </button>
    </div>
  </section>
  <section
    v-if="moreOptions"
    class="overlay"
    @click="toggleMoreOptions"
  ></section>
  </span>
</template>

<script lang="ts">
    import ThemePalette from "../Theme Palette/ThemePalette.vue";
    import PinIcon from "../../icons/Pin.vue";
    import Unpin from "../../icons/Unpin.vue";

export default {
  name: "Note Options",
  components: {
            "theme-palette": ThemePalette,
            "pin-icon": PinIcon,
            "unpin": Unpin
  },
  props: {
    moreOptions: {
      type: Boolean,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
    noteIsNew: {
      type: Boolean,
      required: true,
    },
    taskPanel: {
      type: Boolean,
      required: true,
    },
    liked: {
      type: Boolean,
      required: true,
    },
    archived: {
      type: Boolean,
      required: true,
    },
    trashed: {
      type: Boolean,
      required: true,
    },
    pin: {
      type: Boolean,
      required: true,
    }
  },
  emits: [
    "change-theme",
    "update-bin",
    "open-task-editor",
    "copy-note",
    "update-archive",
    "delete-note",
    "change-pin",
    "update-image",
    "toggle-more-options"
  ],
  methods: {
    changeTheme: function(value: string) {
      this.$emit("change-theme", value);
    },
    updateBin: function() {
      this.$emit("update-bin");
    },
    openTaskEditor: function() {
      this.$emit("open-task-editor");
    },
    copyNote: function() {
      this.$emit("copy-note");
    },
    updateArchive: function() {
      this.$emit("update-archive");
    },
    deleteNote: function() {
      this.$emit("delete-note");
    },
    changePin: function() {
      this.$emit("change-pin");
    },
    getImage: function () {
      const inputref = this.$refs.inputRef as HTMLInputElement;
      inputref.click();
      this.toggleMoreOptions();
    },
    updateImages: function (e: Event) {
      const target = e.target as HTMLInputElement;
      const files = target.files;
      if (files) {
        this.$emit("update-image",URL.createObjectURL(files[0]));
      }
    },
    toggleMoreOptions: function() {
      this.$emit("toggle-more-options");
    }
  },
};
</script>

<style lang="scss">
@import "./NoteOptions.scss";
</style>
<template>
  <section :class="[theme, 'editor']">
    <div class="editor-header">
      <button @click="saveTheNote">
        <span class="material-symbols-outlined">keyboard_backspace</span>
      </button>
      <button @click="updateImp">
        <span v-if="!liked" class="material-symbols-outlined">favorite</span>
        <span v-if="liked" class="material-symbols-rounded">favorite</span>
      </button>
    </div>
    <input type="text" placeholder="Title" v-model="titleText" />
    <section class="note-content">
      <div>
        <button
          class="option-btn task-close-btn"
          v-if="taskPanel"
          :disabled="archived || trashed"
          @click="closeTaskEditor"
        >
          <span class="material-symbols-outlined">keyboard_backspace</span>
        </button>
        <task-editor
          :taskData="taskData"
          :taskStatus="taskStatus"
          :tasksList="tasksList"
          :task-panel="taskPanel"
          :theme="theme"
          @add-task="addTask"
          @delete-task="deleteTask"
          @change-task-status="changeTaskStatus"
          @data-update="dataUpdate"
          @status-update="statusUpdate"
        >
        </task-editor>
      </div>
      <div v-if="images.length > 0" class="img-container">
        <div
          class="img-on-editor"
          v-for="(image, index) in images"
          :key="index"
        >
          <img v-if="image !== ''" :src="image" alt="Image" />
          <button v-if="image !== ''" class="delete-img-btn" @click="deleteImage(image)">
            <span class="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
      <textarea
        cols="20"
        rows="10"
        required
        wrap="hard"
        placeholder="Type something..."
        v-model="contentText"
      >
      </textarea>
    </section>
    <note-options
      :archived="archived"
      :liked="liked"
      :moreOptions="moreOptions"
      :noteIsNew="noteIsNew"
      :pin="pin"
      :taskPanel="taskPanel"
      :theme="theme"
      :trashed="trashed"
      @change-pin="changePin"
      @change-theme="changeTheme"
      @toggle-more-options="toggleMoreOptions"
      @copy-note="copyNote"
      @delete-note="deleteNote"
      @open-task-editor="openTaskEditor"
      @update-archive="updateArchive"
      @update-bin="updateBin"
      @update-image="updateImages"
    >
    </note-options>
  </section>
  <section class="overlay" @click="saveTheNote"></section>
</template>

<script lang="ts">
import TaskEditor from "../Task Editor/TaskEditor.vue";
import NoteOptions from "../Note Options/NoteOptions.vue";

type DataType = {
  taskPanel: boolean;
  moreOptions: boolean;
};

type TaskType = {
  data: string;
  completed: boolean;
  id: string;
};

export default {
  name: "Editor",
  components: {
    "task-editor": TaskEditor,
    "note-options": NoteOptions,
  },
  props: {
    noteIsNew: {
      type: Boolean,
      required: true,
    },
    pin: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
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
    images: {
      type: Array as () => string[],
      default: () => [],
      required: true,
    },
    taskData: {
      type: String,
      required: true,
    },
    taskStatus: {
      type: Boolean,
      required: true,
    },
    tasksList: {
      type: Array as () => TaskType[],
      default: () => [],
      required: true,
    }
  },
  emits: [
    "save-the-note",
    "cancel-the-note",
    "images-update",
    "change-theme",
    "delete-image",
    "like-update",
    "bin-update",
    "copy-note",
    "archive-update",
    "delete-note",
    "add-task",
    "delete-task",
    "change-task-status",
    "task-data-update",
    "task-status-update",
    "cancel-task",
    "title-update",
    "content-update",
    "change-pin",
  ],
  data: function (): DataType {
    return {
      taskPanel: false,
      moreOptions: false,
    };
  },
  methods: {
    toggleMoreOptions: function() {
      this.moreOptions = !this.moreOptions
    },
    saveTheNote: function () {
      if (
        this.title.trim() !== "" ||
        this.content.trim() !== "" ||
        this.images.length > 0 ||
        this.tasksList.length > 0
      ) {
        this.$emit("save-the-note");
      } else {
        this.$emit("cancel-the-note");
      }
    },
    updateImages: function (image: string) {
      this.images.unshift(image);
      this.$emit("images-update", this.images);
    },
    changeTheme: function (value: string) {
      this.$emit("change-theme", value);
    },
    deleteImage: function (imageSource: string) {
      this.$emit("delete-image", imageSource);
    },
    updateImp: function () {
      this.$emit("like-update", !this.liked);
    },
    updateBin: function () {
      this.$emit("bin-update", !this.trashed);
    },
    copyNote: function () {
      this.$emit("copy-note");
    },
    updateArchive: function () {
      this.$emit("archive-update", !this.archived);
    },
    deleteNote: function () {
      this.$emit("delete-note");
    },
    addTask: function () {
      this.taskPanel = false;
      this.$emit("add-task");
    },
    deleteTask: function (clickedTask: TaskType) {
      this.$emit("delete-task", clickedTask);
    },
    changeTaskStatus: function (clickedTaskId: string) {
      this.$emit("change-task-status", clickedTaskId);
    },
    dataUpdate: function (value: string) {
      this.$emit("task-data-update", value);
    },
    statusUpdate: function (value: boolean) {
      this.$emit("task-status-update", value);
    },
    openTaskEditor: function () {
      this.taskPanel = true;
      this.toggleMoreOptions();
    },
    closeTaskEditor: function () {
      this.taskPanel = false;
      this.$emit("cancel-task");
    },
    changePin: function () {
      this.$emit("change-pin");
      this.toggleMoreOptions();
    },
  },
  computed: {
    titleText: {
      get: function (): string {
        return this.title;
      },
      set: function (value: string): void {
        this.$emit("title-update", value);
      },
    },
    contentText: {
      get: function (): string {
        return this.content;
      },
      set: function (value: string): void {
        this.$emit("content-update", value);
      },
    },
  },
};
</script>

<style lang="scss">
@import "./Note\ Editor.scss";
</style>

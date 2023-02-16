<template>
    <section :class="panel === 'Trash' ? ['main','trash-main'] : 'main'">
        <button v-if="panel === 'Trash' && recycleBin.length > 0" @click="emptyTrash" :class="isDark ? 'empty-trash-btn' : 'light-empty-btn'">
            <span class="material-symbols-outlined">delete_forever</span>
            Empty Trash!
        </button>
        <hint-text :currentPanel="currentPanel" 
            :panel="panel"
            :panel-length="homePanelLength"
            @open-editor="openEditor">
        </hint-text>
        <pin-notes v-if="panel === 'Notes'" :pin-notes="pinnedNotes"
            @edit-note="editNote">
        </pin-notes>
        <div v-for="(note,index) in currentPanel" 
            :key="index" 
            :class="currentTheme(note.theme)"
            @click="editNote(note.id)">
                <button v-if="note.pin && panel === 'Notes'" class="pin-btn">
                    <pin></pin>
                </button>
                <h2 v-if="note.title !== ''">{{ note.title }}</h2>
                <ul v-if="note.tasks.length > 0">
		            <li v-for="(task, index) in note.tasks" :key="index">
                        <button class="checkbox">
                            <input type="checkbox" style="display: none;" v-model="task.completed"> 
                            <span v-if="task.completed" class="material-symbols-outlined">done</span>
                        </button>
			            <p :class="task.completed?'task-completed':''"> {{ task.data }} </p>
	    	        </li>
    	        </ul>
                <template v-if="note.images.length > 0">
                    <div v-for="(image,index) in note.images" :key="index">
                        <img :src="image" alt="" class="img-on-note">
                    </div>
                </template>
                <h3 v-if="note.content !== ''">{{ note.content }}</h3>
        </div>
        <add-btn @click="openEditor"></add-btn>
    </section>
    <note-editor v-if="editorIsOpen"
        @title-update="updateTitle"
        @content-update="updateContent"
        @like-update="updateLike"
        @change-theme="changeTheme"
        @images-update="updateImages"
        @deleteImage="deleteImage"
        @copy-note="copyNote"
        @bin-update="updateBin"
        @archive-update="updateArchive"
        @delete-note="deleteNote"
        @cancel-the-note="deleteNote"
        @add-task="addTask"
        @delete-task="deleteTask"
        @change-task-status="changeTaskStatus"
        @task-data-update="taskDataUpdate"
        @task-status-update="taskStatusUpdate"
        @cancel-task="clearTaskData"
        @change-pin="changePin"
        @save-the-note="saveTheNote(false)"
        :note-is-new="noteIsNew"
        :pin="pin"
        :title="title"
        :content="content"
        :theme="theme"
        :liked="liked"
        :archived="archived"
        :trashed="trashed"
        :images="images"
        :task-data="taskData"
        :task-status="taskStatus"
        :tasks-list="tasksList"
        >
    </note-editor>
</template>

<script lang="ts">
    import HintText from "../Hint Text/HintText.vue";
    import AddBtn from "../Add Btn/Add btn.vue";
    import NoteEditor from "../Note Editor/NoteEditor.vue";
    import PinNotes from "../Pin Notes/PinNotes.vue";
    import Pin from "../../icons/Pin.vue";

    type NoteType = {
        id: string,
        pin: boolean,
        title: string,
        content: string,
        tasks: TaskType[],
        theme: string,
        liked: boolean,
        archived: boolean,
        trashed: boolean,
        images: string[]
    }

    type TaskType = {
		data: string,
		completed: boolean,
		id: string
	};

    type Datatype = {
        editorIsOpen: boolean,
        id: string,
        pin: boolean,
        title: string,
        content: string,
        theme: string,
        liked: boolean,
        archived: boolean,
        trashed: boolean,
        taskStatus: boolean,
		taskData: string,
        taskId: string,
		tasksList: TaskType[],
        images: string[]
        storedNotes: NoteType[]
    }
    export default{
        name: "AppMain",
        components: {
            "hint-text": HintText,
            "add-btn": AddBtn,
            "note-editor": NoteEditor,
            "pin": Pin,
            "pin-notes": PinNotes
        },
        props: {
            panel: {
                type: String,
                required: true
            },
            isDark: {
                type: Boolean,
                required: true
            }
        },
        emits: ["bin-length"],
        data: function(): Datatype {
            return{
                editorIsOpen: false,
                    id: "",
                    pin: false,
                    title: "",
                    content: "",
                    theme: "ultramarine-blue",
                    liked: false,
                    archived: false,
                    trashed: false,
                    taskStatus: false,
				    taskData: "",
                    taskId: "",
				    tasksList: [],
                    images: [],
                storedNotes: []
            }
        },
        methods: {
            openEditor: function() {
                this.editorIsOpen = true;
            },
            saveTheNote: function(copy: boolean) {
                if (this.id === "") {
                    this.id = new Date().toISOString();
                    this.storedNotes.unshift({
                        id: this.id,
                        pin: this.pin,
                        title: this.title,
                        content: this.content,
                        tasks: this.tasksList,
                        theme: this.theme,
                        liked: this.liked,
                        archived: this.archived,
                        trashed: this.trashed,
                        images: this.images
                    });
                } else {
                    const editingNote = this.storedNotes.find((note: NoteType) => note.id === this.id);
                    if (editingNote) {
                        this.storedNotes = this.storedNotes.filter((note: NoteType) => note !== editingNote);
                        this.storedNotes.unshift({
                            id: this.id,
                            pin: this.pin,
                            title: this.title,
                            content: this.content,
                            tasks: this.tasksList,
                            theme: this.theme,
                            liked: this.liked,
                            archived: this.archived,
                            trashed: this.trashed,
                            images: this.images
                        });
                    }
                }
                if (copy) {
                    this.id = new Date().toISOString();
                    this.storedNotes.unshift({
                        id: this.id,
                        pin: this.pin,
                        title: this.title,
                        content: this.content,
                        tasks: this.tasksList,
                        theme: this.theme,
                        liked: this.liked,
                        archived: this.archived,
                        trashed: this.trashed,
                        images: this.images
                    });
                }
                this.resetValues();
                this.closeEditor();
            },
            editNote: function(noteId: string) {
                const selectedNote = this.storedNotes.find((note: NoteType) => (note.id === noteId));
                if (selectedNote) {
                    this.id = noteId;
                    this.pin = selectedNote.pin;
                    this.title = selectedNote.title;
                    this.content = selectedNote.content;
                    this.tasksList = selectedNote.tasks;
                    this.theme = selectedNote.theme;
                    this.liked = selectedNote.liked;
                    this.archived = selectedNote.archived;
                    this.trashed = selectedNote.trashed;
                    this.images = selectedNote.images;
                }
                this.openEditor();
            },
            closeEditor: function() {
                this.editorIsOpen = false;
            },
            changePin: function() {
                this.pin = !this.pin;
            },
            updateTitle: function(value: string) {
                this.title = value;
            },
            updateContent: function(value: string) {
                this.content = value;
            },
            updateLike: function(value: boolean) {
                this.liked = value;
            },
            changeTheme: function(value: string) {
                this.theme = value;
            },
            updateImages: function(value: string[]) {
                this.images = value;
            },
            deleteImage: function(imageSource: string) {
                this.images = this.images.filter((image: string) => image !== imageSource);
            },
            addTask: function() {
                this.taskId = new Date().toISOString();
                this.tasksList.unshift({
                    data: this.taskData,
                    completed: this.taskStatus,
                    id: this.taskId
                });
                this.clearTaskData();
            },
            clearTaskData: function() {
                this.taskData = "";
                this.taskStatus = false;
                this.taskId = "";
            },
            deleteTask: function(clickedTask: TaskType) {
				this.tasksList = this.tasksList.filter((item: TaskType) => (item !== clickedTask));
            },
            changeTaskStatus: function(clickedTaskId: string) {
                this.tasksList.find((item: TaskType) => {
					if (clickedTaskId === item.id) {
						item.completed = !item.completed;
					}
				});
            },
            taskDataUpdate: function(value: string) {
                this.taskData = value;
            },
            taskStatusUpdate: function(value: boolean) {
                this.taskStatus = value;
            },
            copyNote: function() {
                this.saveTheNote(true);
            },
            updateBin: function(value: boolean) {
                this.trashed = value;
                this.saveTheNote(false);
                this.checkBinLength();
            },
            updateArchive: function(value: boolean) {
                this.archived = value;
                this.saveTheNote(false);
            },
            resetValues: function() {
                this.id = "";
                this.pin = false;
                this.title = "";
                this.content = "";
                this.tasksList = [];
                this.taskData = "";
                this.taskId = "";
                this.taskStatus = false;
                this.theme = "ultramarine-blue";
                this.liked = false;
                this.archived = false;
                this.trashed = false;
                this.images = [];
            },
            deleteNote: function() {
                const editingNote = this.storedNotes.find((note: NoteType) => note.id === this.id);
                this.storedNotes = this.storedNotes.filter((note: NoteType) => note !== editingNote);
                this.resetValues();
                this.closeEditor();
                this.checkBinLength();
            },
            checkBinLength: function() {
                this.$emit("bin-length",this.recycleBin.length);
            },
            currentTheme: function(theme: string): string[] {
                if (theme === 'black') {
                    return ['note',theme,'black-box'];
                } else if (theme === 'white') {
                    return ['note',theme,'white-box'];
                } else {
                    return ['note',theme];
                }
            },
            emptyTrash: function() {
                this.storedNotes = this.storedNotes.filter((note: NoteType) => !note.trashed);
                this.checkBinLength();
            }
        },
        computed: {
            noteIsNew: function(): boolean {
                return this.id === "";
            },
            allNotes: function(): NoteType[] {
                return this.storedNotes.filter((note: NoteType) => (!note.trashed && !note.archived && !note.pin));
            },
            pinnedNotes: function(): NoteType[] {
                return this.storedNotes.filter((note: NoteType) => (note.pin && !note.trashed && !note.archived));
            },
            likedNotes: function(): NoteType[] {
                return this.storedNotes.filter((note: NoteType) => (note.liked && !note.trashed && !note.archived));
            },
            archiveNotes: function(): NoteType[] {
                return this.storedNotes.filter((note: NoteType) => (!note.trashed && note.archived));
            },
            recycleBin: function(): NoteType[] {
                return this.storedNotes.filter((note: NoteType) => (note.trashed));
            },
            currentPanel: function(): NoteType[] {
                switch (this.panel) {
                    case "Notes":
                    return this.allNotes;
                    case "Favorite":
                    return this.likedNotes;
                    case "Archive":
                    return this.archiveNotes;
                    case "Trash":
                    return this.recycleBin;
                    default:
                    return this.allNotes;
                }
            },
            homePanelLength: function(): number {
                return this.allNotes.length + this.pinnedNotes.length;
            }
        }
    }
</script>

<style lang="scss">
  @import './Notes.scss';
</style>
<template>
    <section class="main">
        <hint-text :currentPanelNotes="currentPanelNotes" 
            :panel="panel"
            :panel-length="homePanelLength"
            @open-editor="openEditor">
        </hint-text>
        <pin-notes v-if="panel === 'Notes'" :pin-notes="pinnedNotes"
            @edit-note="editNote">
        </pin-notes>
        <div v-for="(note,index) in currentPanelNotes" 
            :key="index" 
            :class="currentTheme(note.theme)"
            id="notes"
            @click="editNote(note.id)">
                <button v-if="note.pin && panel === 'Notes'" class="pin-btn">
                    <pin></pin>
                </button>
                <h2 v-if="note.title !== ''">{{ note.title }}</h2>
                <div v-if="note.tasks.length > 0">
		            <div v-for="(task, index) in note.tasks" :key="index" class="tasks-on-note">
                        <span v-if="task.data !== '' && task.id !== ''">
                            <button class="checkbox">
                            <input type="checkbox" style="display: none;" v-model="task.completed"> 
                            <span v-if="task.completed" class="material-symbols-outlined">done</span>
                            </button>
			                <p :class="task.completed?'task-completed':''"> {{ task.data }} </p>
                        </span>
	    	        </div>
    	        </div>
                <template v-if="note.images.length > 0">
                    <div v-for="(image,index) in note.images" :key="index" >
                        <img v-if="image !== ''" :src="image" alt="" class="img-on-note">
                    </div>
                </template>
                <h3 v-if="note.content !== ''">{{ note.content }}</h3>
        </div>
        <button v-if="panel === 'Notes'" @click="openEditor" class="add-note-btn">
            <span class="material-symbols-outlined">add</span>
        </button>
        <button v-if="panel === 'Trash' && recycleBin.length > 0" @click="openTrashPanel" class='clear-trash-btn'>
            <span class="material-symbols-outlined">delete_forever</span>
        </button>
        <div v-if="emptyTrashConfirmPanel" :class="isDark ? 'clear-trash-panel' : 'clear-trash-panel-white'">
            <h2>Are you sure you want to delete all notes?</h2>
            <span>
                <button :class="isDark ? 'delete-all-btn' : 'delete-all-btn-white'" @click="closeTrashPanel">Cancel</button>
                <button :class="isDark ? 'delete-all-btn' : 'delete-all-btn-white'" @click="emptyTrash">Delete all</button>
            </span>
        </div>
        <div class="overlay" v-if="emptyTrashConfirmPanel" @click="closeTrashPanel"></div>
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
    import NoteEditor from "../Note Editor/NoteEditor.vue";
    import PinNotes from "../Pin Notes/PinNotes.vue";
    import Pin from "../../icons/Pin.vue"

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
        storedNotes: NoteType[],
        alphabets: string[],
        randomAlphabet: string,
        randomAlphabet2: string,
        min: string,
        sec: string,
        emptyTrashConfirmPanel: boolean,
    }
    export default{
        name: "AppMain",
        components: {
            "hint-text": HintText,
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
                storedNotes: [],
                alphabets: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
                    "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"],
                randomAlphabet: "",
                randomAlphabet2: "",
                min: "",
                sec: "",
                emptyTrashConfirmPanel: false,
            }
        },
        methods: {
            generateNoteId : function () {
                let randomNum = Math.floor((Math.random() * 26));
                this.randomAlphabet = this.alphabets[randomNum];
                randomNum = Math.floor((Math.random() * 26));
                this.randomAlphabet2 = this.alphabets[randomNum];
                let tempTime = new Date();
                if(tempTime.getMinutes() < 10) {
                    this.min = "0" + tempTime.getMinutes().toString();
                } else {
                    this.min = tempTime.getMinutes().toString();
                }
                if(tempTime.getSeconds() < 10) {
                    this.sec = "0" + tempTime.getSeconds().toString();
                } else {
                    this.sec = tempTime.getSeconds().toString();
                }
                this.id = this.randomAlphabet + this.randomAlphabet2 + this.min + this.sec;
            },
            getNotesFromDB: async function() {
                const url = "https://notes-app-313-default-rtdb.asia-southeast1.firebasedatabase.app/Notes/.json";
                const response = await fetch(url);
                const storedNotesInfo: NoteType[] = await response.json();
                if( storedNotesInfo ) {
                    const tempNotesArray = Object.values(storedNotesInfo);
                    tempNotesArray.forEach((note: NoteType) => {
                        this.storedNotes.push(note);
                    })
                } else {
                    console.log("Database Is Empty!");
                }    
            },
            postNotesToDB: async function(note: NoteType) {
                let tempTasks: TaskType[];
                let tempImages: string[];
                if (this.tasksList.length === 0) {
                    tempTasks = [{
                            id: "",
                            completed: false,
                            data: ""
                        }]
                } else {
                    tempTasks = [...this.tasksList];
                }
                if (this.images.length === 0) {
                    tempImages = [""];
                } else {
                    tempImages = [...this.images];
                }
                const options = {
                    method: "PUT",
                    header: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id: this.id,
                        pin: this.pin,
                        title: this.title,
                        content: this.content,
                        tasks: [...tempTasks],
                        theme: this.theme,
                        liked: this.liked,
                        archived: this.archived,
                        trashed: this.trashed,
                        images: [...tempImages]
                    })
                }
                const url = "https://notes-app-313-default-rtdb.asia-southeast1.firebasedatabase.app/Notes/" + note.id + ".json";
                const res = await fetch(
                    url,
                    options
                )
                if(!res) {
                console.log("Error Occured");
                } else {
                    console.log(res);
                }
                
            },
            deleteNoteFromDB: async function(id: string) {
                const options = {
                    method: "DELETE",
                    header: {
                        "Content-Type": "application/json"
                    },
                }
                const url = "https://notes-app-313-default-rtdb.asia-southeast1.firebasedatabase.app/Notes/" + id + ".json";
                const res = await fetch(
                    url,
                    options
                )
                if(!res) {
                console.log("Error Occured");
                } else {
                    console.log(res);
                }
            },
            openEditor: function() {
                this.editorIsOpen = true;
            },
            saveTheNote: function(copy: boolean) {
                if (this.id === "") {
                    this.generateNoteId();
                    const tempNote = {
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
                    };
                    this.storedNotes.unshift(tempNote);
                    this.postNotesToDB(tempNote);
                } else {
                    const editingNote = this.storedNotes.find((note: NoteType) => note.id === this.id);
                    if (editingNote) {
                        this.storedNotes = this.storedNotes.filter((note: NoteType) => note !== editingNote);
                        const tempNote = {
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
                        }
                        if (tempNote.title.trim() === '' && tempNote.content.trim() === '' && tempNote.images.length === 0 && tempNote.tasks.length === 0) {
                            this.deleteNoteFromDB(tempNote.id);
                        } else {
                            this.storedNotes.unshift(tempNote);
                            this.postNotesToDB(tempNote);
                        }
                    }
                }
                if (copy) {
                    this.generateNoteId();
                    const tempCopiedNote = {
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
                    };
                    this.storedNotes.unshift(tempCopiedNote);
                    this.postNotesToDB(tempCopiedNote);
                }
                this.resetValues();
                this.closeEditor();
            },
            editNote: function(noteId: string) {
                const selectedNote: NoteType[] = this.storedNotes.filter((note: NoteType) => (note.id === noteId));
                const tasks: TaskType[] = selectedNote[0].tasks.filter((task: TaskType) => {
                    return task.data.trim() !== "";
                });
                const images: string[] = selectedNote[0].images.filter((imgSrc: string) => {
                    return imgSrc !== "";
                })
                    this.id = noteId;
                    this.pin = selectedNote[0].pin;
                    this.title = selectedNote[0].title;
                    this.content = selectedNote[0].content;
                    this.tasksList = tasks;
                    this.theme = selectedNote[0].theme;
                    this.liked = selectedNote[0].liked;
                    this.archived = selectedNote[0].archived;
                    this.trashed = selectedNote[0].trashed;
                    this.images = images;
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
                this.deleteNoteFromDB(this.id);
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
                const notesToBeDeleted: NoteType[] = this.storedNotes.filter((note: NoteType) => note.trashed);
                notesToBeDeleted.forEach((note: NoteType) => {
                    this.deleteNoteFromDB(note.id);
                })
                this.storedNotes = this.storedNotes.filter((note: NoteType) => !note.trashed);
                this.checkBinLength();
                this.emptyTrashConfirmPanel = false;
            },
            openTrashPanel: function() {
                this.emptyTrashConfirmPanel = true;
            },
            closeTrashPanel: function() {
                this.emptyTrashConfirmPanel = false;
            },
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
            currentPanelNotes: function(): NoteType[] {
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
        },
        mounted() {
            this.getNotesFromDB.call(this);
        },
    }
</script>

<style lang="scss">
  @import './Notes.scss';
</style>
<template>
    <span>
        <div v-for="(note,index) in pinNotes" 
                :key="index" 
                :class="currentTheme(note.theme)"
                @click="editNote(note.id)">
                    <button v-if="note" class="pin-btn">
                        <pin></pin>
                    </button>
                    <h2>{{ note.title }}</h2>
                    <ul>
                        <li class="tasks" v-for="(task, index) in note.tasks" :key="index">
                            <span v-if="task.data !== '' && task.id !== ''">
                                <button class="checkbox">
                                    <input type="checkbox" style="display: none;" v-model="task.completed"> 
                                    <span v-if="task.completed" class="material-symbols-outlined">done</span>
                                </button>
                                <p :class="task.completed?'task-completed':''"> {{ task.data }} </p>
                            </span>
                        </li>
                    </ul>
                    <div v-for="(image,index) in note.images" :key="index">
                        <img v-if="image !== ''" :src="image" alt="" class="img-on-note">
                    </div>
                    <h3>{{ note.content }}</h3>
            </div>
    </span>
</template>

<script lang="ts">
    import Pin from '../../icons/Pin.vue';

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


    export default{
        name: "PinNotes",
        components: {
            pin: Pin
        },
        props: {
            pinNotes: {
                type: Array as () => NoteType[],
                default: () => [],
                required: true
            }
        },
        emits: ["edit-note"],
        methods: {
            currentTheme: function(theme: string): string[] {
                if (theme === 'black') {
                    return ['note',theme,'black-box'];
                } else if (theme === 'white') {
                    return ['note',theme,'white-box'];
                } else {
                    return ['note',theme];
                }
            },
            editNote: function(id: string) {
                this.$emit("edit-note",id);
            }
        }
    }

</script>

<style lang="scss">
  @import './Pin\ Notes.scss';
</style>
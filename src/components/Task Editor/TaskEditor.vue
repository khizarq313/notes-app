<template> 
	<section class="task-panel">
        <div class="task-input-panel" v-if="taskPanel">
            <div class="option-btn">
                <input type="checkbox"  ref="checkbox" v-model="taskInputStatus" style="display: none;"> 
                <span class="checkbox" @click="checkboxClick">
                    <span v-if="taskInputStatus" class="material-symbols-outlined">done</span>
                </span>
            </div>
    		<input type="text" class="input-task" v-model="taskInputData" placeholder="Enter your task here:">
	    	<button @click="addNewTask" class="task-add-btn option-btn">
                <span class="material-symbols-outlined">add</span>
            </button>
	    </div>
    </section>
	    <div class="task-container" v-if="!taskPanel" >
	        <ul v-if="tasksList.length > 0">
		        <li v-for="(task, index) in tasksList" :key="index">
                    <button :class="['checkbox',checkboxTheme]" @click="taskStatusClick(task)">
                        <input type="checkbox" style="display: none;" v-model="task.completed" @click="changeTaskStatus(task.id)"> 
                        <span v-if="task.completed" class="material-symbols-outlined">done</span>
                    </button>
			        <p :class="task.completed?'task-completed':''" @click="changeTaskStatus(task.id)"> {{ task.data }} </p>
		    	    <button @click="deleteThisTask(task)" class="task-delete-btn option-btn"> 
                        <span class="material-symbols-outlined">delete</span>
                    </button>
	    	    </li>
    	    </ul>
        </div>
    <section class="overlay" v-if="taskPanel"></section>
</template>	
<script lang="ts">

	type TaskType = {
		data: string,
		completed: boolean,
		id: string
	};

	export default {
		name: "TaskEditor",
        props: {
            taskPanel: {
                type: Boolean,
                required: true
            },
            taskData: {
                type: String,
                required: true
            },
            taskStatus: {
                type: Boolean,
                required: true
            },
            tasksList: {
                type: Array as () => TaskType[],
                default: () => [],
                required: true
            },
            theme: {
                type: String,
                required: true
            }
        },
        emits: ["add-task","delete-task","change-task-status","data-update","status-update"],
		methods: {
			addNewTask: function() {
				if (this.taskInputData.trim() !== "") {
                    this.$emit("add-task");
				}
			},
			deleteThisTask: function(clickedTask: TaskType) {
                this.$emit("delete-task",clickedTask);
			},
			changeTaskStatus: function (clickedTaskId: string) {
				this.$emit("change-task-status",clickedTaskId)	
			},
            checkboxClick: function() {
                const checkbox = this.$refs.checkbox as HTMLInputElement;
                checkbox.click();
            },
            taskStatusClick: function(task: TaskType) {
                task.completed = !task.completed;
            },
		},
        computed: {
            taskInputData: {
                get: function(): string {
                    return this.taskData;
                },
                set: function(value: string): void {
                    this.$emit("data-update",value);
                }
            },
            taskInputStatus: {
                get: function(): boolean {
                    return this.taskStatus;
                },
                set: function(value: boolean): void {
                    this.$emit("status-update",value);
                }
            },
            checkboxTheme: function(): string {
                switch (this.theme) {
                    case "ultramarine-blue":
                        return "checkbox-white";
                    case "mustard":
                        return "checkbox-black";
                    case "white":
                        return "checkbox-black";
                    case "mystic-maroon":
                        return "checkbox-white";
                    case "bright-mint":
                        return "checkbox-black";
                    case "coral":
                        return "checkbox-white";
                    case "black":
                        return "checkbox-white";
                    default:
                        return "checkbox-white";
                }
            }
        }
	}
</script>

<style lang="scss">
  @import './Task\ Editor.scss';
</style>
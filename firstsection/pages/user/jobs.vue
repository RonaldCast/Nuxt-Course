<template>
    <div>
     <h3>Task</h3>
     <h4>List tasks</h4>
     <!-- {{listTasks}} -->
     {{count}}
     <ul v-for="task in listTasks" :key="task.id">
         <li>{{task.title}}</li>
     </ul>
    </div>
</template>
<script>
import axios from "axios" 

export default {
   async  asyncData(context) {
      const listTasks =  await axios.get("https://jsonplaceholder.typicode.com/todos")
       console.log(listTasks)
       return {listTasks: listTasks.data }
    },
    data() {
        return {
        
        };
    },
    methods: {
    
    },
    computed: {
      count(){
         return this.listTasks.length
      }
    },
    watch: {
    
    }
};
</script>
<style scoped>
    
</style>
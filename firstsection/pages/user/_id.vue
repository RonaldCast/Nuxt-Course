<template>
    <div>
       {{$route.params.id}}
    </div>
</template>
<script>
export default {
    validate({params, query, store}){
         return true  
    }
 
};
</script>
<style scoped>
    
</style>
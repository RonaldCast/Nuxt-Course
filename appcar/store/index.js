export const state = () => ({
    list_post:[]
})

export const mutations = {
    SET_LIST_POST(state, payload){
        state.list_post = payload;
    }
}   
export const actions = {
     
    async nuxtServerInit({commit}, context){
        try {
            const resp = await context.$axios.get("https://jsonplaceholder.typicode.com/posts");
            commit("SET_LIST_POST", resp.data)
        } catch (e) {
           context.error({message:e}) 
        }
    }
}
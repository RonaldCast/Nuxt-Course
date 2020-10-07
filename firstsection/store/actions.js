export const actions = () => ({ async nuxtServerInit(vuex_context, nuxt_context){
    try {
       const resp = await  axios.get("https://jsonplaceholder.typicode.com/albums")
       vuex_context.commit("blog/SET_LIST_ALBUMS",resp.data )
    } catch (e) {
       nuxt_context.error({message:e.message})
    }
}})

import axios from "axios";

// const createStore = () => {

//     return new Vuex.Store({
//         modules: {},

//         state:()=>({
//             listPost:[],
//             listUsers:[],
//             listAlbum:[]
//         }),

//         mutations:{
//             SET_LIST_POST(state, payload){
//                 state.listPost = payload;
//             },
//             EMPTY_LIST(state){
//                 state.listPost = [];
//             },

//             SET_LIST_USER(state, paylod){
//                 state.listUsers = paylod;
//             },

//             SET_LIST_ALBUMS(state, payload){
//                 state.listAlbum = payload;
//             }
//         },

//         actions:{
//             async getPost({commit}){
//                 const resp = await  axios.get("https://jsonplaceholder.typicode.com/posts")
//                 commit("SET_LIST_POST", resp.data)
//             },

//             async nuxtServerInit(vuex_context, nuxt_context){
//                  try {
//                     const resp = await  axios.get("https://jsonplaceholder.typicode.com/albums")
//                     vuex_context.commit("SET_LIST_ALBUMS",resp.data )
//                  } catch (e) {
//                     nuxt_context.error({message:e.message})
//                  }
//             }


//         }
    
//     })
// }

// export default createStore


    export const state = ()=>({
            listPost:[],
            listUsers:[],
            listAlbum:[]
        })

   export  const   mutations = {
            SET_LIST_POST(state, payload){
                state.listPost = payload;
            },
            EMPTY_LIST(state){
                state.listPost = [];
            },

            SET_LIST_USER(state, paylod){
                state.listUsers = paylod;
            },

            SET_LIST_ALBUMS(state, payload){
                state.listAlbum = payload;
            }
        }

  export const  actions = {
            async getPost({commit}){
                const resp = await  axios.get("https://jsonplaceholder.typicode.com/posts")
                commit("SET_LIST_POST", resp.data)
            },

            async nuxtServerInit(vuex_context, nuxt_context){
                 try {
                    const resp = await  axios.get("https://jsonplaceholder.typicode.com/albums")
                    vuex_context.commit("blog/SET_LIST_ALBUMS",resp.data )
                 } catch (e) {
                    nuxt_context.error({message:e.message})
                 }
            }


        }


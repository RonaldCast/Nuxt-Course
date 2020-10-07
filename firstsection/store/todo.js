export const state = () => ({
    prooff: "hola"
  });

  export const mutations = {
    setPosts(state, posts){
      state.loadedPosts = posts;
    }
  };
  
  export const actions = {
    setPosts(vuexContext, posts){
      vuexContext.commit('setPosts', posts);
    }
  };
  
  export const getters = {
    loadedPosts(state){
      return state.loadedPosts;
    }
  };
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

const store = new Vuex.Store({
  //stateオプションで初期値を設定
  state: {
    skillCategories: [],
  },
  getters: {
    getSkills: (state) => (category) => {
      if (state.skillCategories.length >0) {
        return state.skillCategories.find((skill) =>skill.category==category);
      }
      return[];
    },
  },

  mutations: {
    setSkillCategories(state,payload){
      state.skillCategories = payload.skillCategories;
    },
  },

  actions: {
    async updateSkillCategories({commit}){
      const skillCategories = [];
      const res = await axios.get('https://us-central1-haru-sato.cloudfunctions.net/skills');
      res.data.forEach((category) =>{
        skillCategories.push(category);
      });
      commit('setSkillCategories',{skillCategories});
    },
  },
});
//store.stateで参照
console.log(store.state) //10

export default store

import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
Vue.use(Vuex);
export default new Vuex.Store({
//stateオプションで初期値を設定
// stateはdataのオブジェクト版？？
  state:{
    skills:[],
    loaded: false
  },
  // stateはここでしか変更できない
  mutations: {
    setSkills:function(state,skills){
     state.skills = skills
     state.loaded = true
    }
  },
  actions: {
    getSkills: function({commit}){
      return axios.get('https://us-central1-haru-sato.cloudfunctions.net/skills')
        .then(response => {
          commit('setSkills',response.data)
        })
      }
    },
  getters: {
     // =>:アロー関数 Vueでアロー関数を使う時はthisの挙動が違うから注意
     // アロー関数は関数定義 function(){};を()=>{}と書ける
     // https://vuex.vuejs.org/ja/guide/getters.html
    skillName:(state) => (index) => {
      const skillNameArray = []
      if(state.skills[index]) {
        // forEachの中のSkillはpushのSkillと一緒やったらなんでもよい
        /* eslint-disable no-debugger */
        // debugger
        state.skills[index].skill.forEach((Skill) => {
        // skillNameArrayの空の場所にnameをpush
          skillNameArray.push(Skill.name)
        })
      }
      return skillNameArray
    },
    skillScore: (state) => (index) => {
      const skillScoreArray = []
      if(state.skills[index]) {
        state.skills[index].skill.forEach((Score) => {
          skillScoreArray.push(Score.score)
        })
      }
      return skillScoreArray
    }
  }
})
// import Vue from 'vue';
// import Vuex from 'vuex';
// import axios from 'axios';

// Vue.use(Vuex)

// const store = new Vuex.Store({
//   //stateオプションで初期値を設定
//   // stateはdataのオブジェクト版？？
//   state: {
//     skills: [],
//     loaded: false
//   },

//   // stateはここでしか変更できない
//   mutations: {
//     // payloadはvuexの引数
//     setSkills(state,payload){
//       // state.skillCategoriesをstateのskillCategoriesに代入
//       // payload：追加の引数
//       state.skills = payload.skills;
//       state.loaded = true
//     },
//   },

//   getters: {
//     // =>:アロー関数 Vueでアロー関数を使う時はthisの挙動が違うから注意
//     // アロー関数は関数定義 function(){};を()=>{}と書ける
//     // https://vuex.vuejs.org/ja/guide/getters.html
//     skillName:(state) => (index) => {
//       const skillNameArray = []
//       if(state.skills[index]) {
//         // SkillがpushのSkillと一緒やったらよい
//         state.skills[index].skill.forEach((Skill) => {
//           // skillNameArrayの空の場所にnameをpush
//           skillNameArray.push(Skill.name)
//         })
//       }
//       return skillNameArray
//   },

//   actions: {
//     // async:非同期関数を定義する関数宣言
//     async updateSkills({commit}){
//       // dataのスキルを初期化
//       const skills = [];
//       // functionにawait axiosを用いてアクセス
//       const res = await axios.get('https://us-central1-haru-sato.cloudfunctions.net/skills');
//       // 取得したデータを配列に設定
//       res.data.forEach((category) =>{
//         skills.push(category);
//       });
//       // その格納された配列をmutationのserSkillScoreにデータを渡す
//       // mutationをコミット
//       commit('setSkills',{skills});
//     }
//   }
// }
// //store.stateで参照
// // console.log(store.state) //10
// // // storeをエクスポート
// // export default store

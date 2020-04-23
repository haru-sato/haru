import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
Vue.use(Vuex);
const store = new Vuex.Store({
//stateオプションで初期値を設定
// stateはdataのオブジェクト版？？
// ここのskillsはskills.jsonの中のskills
  state:{
    skills:[],
    loaded: false
  },
  // stateはここでしか変更できない
  mutations: {
    // stateのskillsを変更できるようにsetSkills定義
    setSkills:function(state,skills){
     state.skills = skills
     state.loaded = true
    }
  },
  actions: {
    // getSkillsで引っ張ってくる
    // actionはどこか(反映させたいとこ)でディスパッチしないと動かない
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
    //  index:firebaseのデータにふられていた番号
    skillName:(state) => (index) => {
      // 読み取り専用の定義
      const skillNameArray = []
      if(state.skills[index]) {
        // forEachの中のSkillはpushのSkillと一緒やったらなんでもよい
        /* eslint-disable no-debugger */
        // debugger
        // 例えばindex1がBackやったらその中のデータをなくなるまで繰り返しとってくる
        // forEach:なくなるまで繰り返し行う
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
console.log(store.state)
export default store

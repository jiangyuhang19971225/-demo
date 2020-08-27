import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 要设置的全局访问的state对象
    // 要设置的初始值
    count: 1,
    com: true

  },
  getters: { // 实时监听state值的变化
    getCount (state) { // 承载变化的count的值
      return state.count
    }
  },
  mutations: {

    // 要修改store中的值唯一的方法就是提交mutation来修改
    addCount (state, num) { // state为state num为传过来的参数  也就是commit的第二个值
      state.count = state.count + num
    },
    delCount (state, num) {
      // state为state num为传过来的参数  也就是commit的第二个值
      if (state.count > 0) { state.count = state.count - num }
    }
  },

  actions: { // Action 提交的是 mutation，而不是直接变更状态。
    // Action 可以包含任意异步操作。
    //   context:{
    //     state,   等同于store.$state，若在模块中则为局部状态
    //     rootState,   等同于store.$state,只存在模块中
    //     commit,   等同于store.$commit
    //     dispatch,   等同于store.$dispatch
    //     getters   等同于store.$getters
    // }

    // 常规写法调用的时候会使用context.commit，但更多的是使用es6的变量解构赋值，也就是直接在参数的
    // 位置写自己想要的属性，如：{commit}。
    getAddCount (context, num) { // commit调用mutations里的方法 num 参数
      context.commit('addCount', num)
    },
    getDelCount (context, num) {
      context.commit('delCount', num)
    }

  },
  modules: {
  }
})

export const Keys = {
    state:{
        keysCount:0, //总键位
        keysCurrentCount:0, //当前键位
        keysCurrentContent:0, //内容起始键位
        keysCurrentOver:0, //内容结束键位
        keysCurrentAdd:1, //左右键位
        keysCurrentUp:4, //上下键位
        keysCurrentNeedUp:0 //需要往上的键位
    },

    mutations:{
        KeysLeft(state) {
            state.keysCurrentCount-=state.keysCurrentAdd;
        },

        KeysRight(state) {
            state.keysCurrentCount+=state.keysCurrentAdd;
            // alert(state.keysCurrentCount);
            // alert(state.keysCurrentAdd);
            // alert(state.keysCurrentCount);
        },

        KeysUp(state) {
            if (state.keysCurrentCount == state.keysCurrentNeedUp) {
                state.keysCurrentCount-=2;
            } else {
                state.keysCurrentCount-=state.keysCurrentUp;
            }
        },

        KeysDown(state) {
            state.keysCurrentCount+=state.keysCurrentUp;
        }
    },

    actions:{
        KeysLeft: ({commit,state}) => {
            commit('KeysLeft');
            if (state.keysCurrentCount < (state.keysCurrentContent - 1)) {
                if (state.keysCurrentCount < 0) {
                    state.keysCurrentCount = 0;
                }
            } else {
                if (state.keysCurrentCount < state.keysCurrentContent) {
                    state.keysCurrentCount = state.keysCurrentOver;
                }
            }
        },

        KeysRight: ({commit,state}) => {
            commit('KeysRight');
            if (state.keysCurrentCount > state.keysCount) {
                state.keysCurrentCount = state.keysCurrentContent;
            }
        },

        KeysUp: ({commit,state}) => {
            commit('KeysUp');
            if (state.keysCurrentCount < 0) {
                state.keysCurrentCount = state.keysCount;
            }
        },

        KeysDown: ({commit,state}) => {
            commit('KeysDown');
            if (state.keysCurrentCount > state.keysCount) {
                state.keysCurrentCount = state.keysCurrentContent;
            }
        },

        classObject:({commit},count) => {
            return count;
            // return {
            //     'item-active':this.count == number,
            //     'item-leaveout':this.count!= number
            // }
        }
    }
};
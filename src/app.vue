<template>
  <div id="main" @click="focus">
    <!-- 路由出口 -->
    <input style="width: 0;height: 0;position: fixed;left: -100%;" id="key" type="text" @keyup.delete="back" @keyup.enter="enter" @keyup.left="KeysLeft" @keyup.right="KeysRight" @keyup.up="KeysUp"  @keyup.down="KeysDown">
    <router-view></router-view>
    <!-- 路由匹配到的组件将渲染在这里 -->
  </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { mapActions } from 'vuex';

    export default{
        name:'app',

        data() {
            return{

            }
        },

        computed: {
            ...mapState({
                keysCount:state => state.Keys.keysCount,
                keysCurrentCount:state => state.Keys.keysCurrentCount,
                keysCurrentAdd:state => state.Keys.keysCurrentAdd,
                keysCurrentUp:state => state.Keys.keysCurrentUp
            })
        },


        methods:{
            ...mapActions([
                'KeysLeft',
                'KeysRight',
                'KeysUp',
                'KeysDown'
            ]),

            back() {
              this.$router.go(-1);
            },

            click() {
                console.log('click');
            },

            enter() {
                let selected = document.querySelectorAll('.header-box-item-active')[0] ? document.querySelectorAll('.header-box-item-active')[0] : document.querySelectorAll('.item-active')[0];
                if (selected.getAttribute('data-url')) {
                    this.$router.push(selected.getAttribute('data-url'));
                }
            },

            left() {
                console.log('left');
//                this.count--;
//                if (this.count < 0) {
//                    this.count = 7;
//                }
            },

            right() {
                console.log('right');
//                this.count++;
//                if (this.count > 7) {
//                    this.count = 0;
//                }
            },

            up() {
                console.log('up');
//                this.count-=4;
//                if (this.count < 0) {
//                    this.count = 7;
//                }
            },

            down() {
                console.log('down');
//                this.count+=4;
//                if (this.count > 7) {
//                    this.count = 0;
//                }
            },

            focus() {
                let key = document.querySelectorAll('#key')[0];
                key.focus();
            }
        },

        mounted() {
            let key = document.querySelectorAll('#key')[0];
            key.focus();
        },

        created() {
//            this.KeysLeft();
        }
    }
</script>
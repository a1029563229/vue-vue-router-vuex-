<template>
    <div id="first">
        <mainHeader></mainHeader>
        <div class="box">
            <div class="box-item" v-for="(item,index) in list" :class="ClassObject(index + 3)">
                <img :src="item.img" alt="">
                <div>
                    {{item.text}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import * as main from '../main/main';
    export default{
        name:'flex',

        data() {
            return{
                count:0,

                list:[
                    {
                        img:'/static/flex/1.jpg',
                        text:'A Little Cat.'
                    },
                    {
                        img:'/static/flex/2.jpg',
                        text:'A Little Cat.'
                    },
                    {
                        img:'/static/flex/3.jpg',
                        text:'A Little Cat.'
                    },
                    {
                        img:'/static/flex/4.jpg',
                        text:'A Little Cat.'
                    },
                    {
                        img:'/static/flex/5.jpg',
                        text:'A Little Cat.'
                    },
                    {
                        img:'/static/flex/6.jpg',
                        text:'A Little Cat.'
                    },
                    {
                        img:'/static/flex/7.jpg',
                        text:'A Little Cat.'
                    },
                    {
                        img:'/static/flex/8.jpg',
                        text:'A Little Cat.'
                    }
                ]
            }
        },

        methods:{

        },

        computed: {
            ...mapState({
                keysCount:state => state.Keys.keysCount,
                keysCurrentCount:state => state.Keys.keysCurrentCount,
                keysCurrentAdd:state => state.Keys.keysCurrentAdd,
                keysCurrentUp:state => state.Keys.keysCurrentUp
            })
        },

        created() {

        },

        mounted() {
            this.$store.state.Keys.keysCount = 10;
            this.$store.state.Keys.keysCurrentCount = 3;
            this.$store.state.Keys.keysCurrentContent = 3;
            this.$store.state.Keys.keysCurrentOver = 10;
            this.$store.state.Keys.keysCurrentAdd = 1;
            this.$store.state.Keys.keysCurrentUp = 4;
            this.$store.state.Keys.keysCurrentNeedUp = 3;
        },

        components:{
            mainHeader:main.header
        }
    }
</script>

<style lang="less" scoped rel="stylesheet/less" type="text/css">
    @import "../../public/css/animate.less";
    *{
        margin:0;
        padding: 0;
    }
    #first {
        height:100vh;
    }
    .flex{
        display: flex;
        display: -webkit-flex;
        flex-wrap:wrap;
        justify-content: space-around;
        align-items: baseline;
    }
    .box{
        font-family:"Microsoft YaHei UI";
        margin-top: 5rem;
        .flex;
        &-item{
            width: 15%;
            text-align: center;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            margin:5rem;
            padding:5px;
            -webkit-border-radius:10px;
            -moz-border-radius:10px;
            border-radius:10px;
            div{
                padding-top:.9rem;
            }
        }
    }
</style>
<template>
    <div id="first">
        <mainHeader></mainHeader>
        <div class="main">这里是first</div>
        <div class="count">
            {{$store.state.Add.count}}
        </div>
        <div class="button">
            <button @click="increment">Add</button>
            <button @click="decrement">Dec</button>
            <button @click="incrementIfOdd">AddIfOdd</button>
            <button @click="incrementAsync">AddSync</button>
        </div>
        <div class="main-link">
            <router-link to="/first">Go to first</router-link>
        </div>
        <div class="main-link">
            <router-link to="/second">Go to second</router-link>
        </div>
        <mainFooter></mainFooter>
    </div>
</template>
<script>
    import * as main from '../main/main'; //导入刚才注册的两个模块
    import { mapActions } from 'vuex'; //导入actions
    export default{
        name:'first',

        methods:{
            ...mapActions([
                'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
                'decrement',
                'incrementIfOdd',
                'incrementAsync'
            ])
        },

        components:{ //注册组件为当前模块的子模块
            mainHeader:main.header,
            mainFooter:main.footer
        }
    }
</script>

<style lang="less" scoped rel="stylesheet/less" type="text/css">
    .main{
        text-align: center;
        font-size:16px;
        margin: 50px;
    }
    .count{
        font-family:"Microsoft YaHei UI";
        text-align: center;
        font-size:30px;
    }
    .button{
        .count;
    }
</style>
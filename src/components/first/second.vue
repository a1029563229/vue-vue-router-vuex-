<template>
    <div id="second">
        <mainHeader></mainHeader>
        <div class="main">这里是second</div>
        <div class="count">
            {{$store.state.Add.count}}
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
    export default{
        name:'second',

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
</style>
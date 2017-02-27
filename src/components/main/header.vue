<template>
    <div id="header">
        <header>
            <div class="header-box-left"></div>
            <div class="header-box">
                <div class="header-box-item" data-url="/flex" :class="[ClassHeader(0),{'header-box-item-actived': this.$route.name == 'flex'}]">精彩推荐</div>
                <div class="header-box-item" data-url="/other" :class="[ClassHeader(1),{'header-box-item-actived': this.$route.name == 'other'}]">专题活动</div>
                <div class="header-box-item" :class="ClassHeader(2)">分类导航</div>
            </div>
        </header>
    </div>
</template>
<script>
    export default{
        name:'header',

        created() {

        }
    }
</script>

<style lang="less" scoped rel="stylesheet/less" type="text/css"> //加入scoped属性，样式只控制当前模块
    @import "../../public/css/flex";
    header{
        font-size:30px;
        font-family:"Microsoft YaHei UI";
        .flex;
    }
    .header-box-left{
        width: 60%;
    }
    .header-box{
        width: 40%;
        .flex;
        &-item {

        }
        &-item-actived{
            color: #00C7D3;
            font-weight:bold;
        }
        &-item-active{
            color: #F73F88;
            font-weight:bold;
        }
    }
</style>
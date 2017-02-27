export const first = r => {
    require(['./first.vue'], r)
};

export const second = r => {
    require(['./second.vue'], r)
};
//这个导出方法是将模块转化为函数，按需加载需要的资源
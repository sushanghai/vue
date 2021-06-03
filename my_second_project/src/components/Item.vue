<template>
<div class="item" :class="{active:isActive}" @click="hanldClick">
    <!--插槽-->
    <slot></slot>
</div>
</template>

<script>
    export default {
        props: {
            isActive:{
                type: Boolean,//约束该属性为boolean类型
                required: true //约束必须传递该属性
            },
        },
        methods:{
            hanldClick(){
                this.$emit("active",123)
            },
        },
    };
</script>

<style scoped>
.active{
    background: #e7e7e7;
}
.item {
    cursor: pointer;
    width: 100%;
    height: 100%;
    transition: 0.2s;
}
.item:hover{
    background: #f4f4f4;
}
</style>
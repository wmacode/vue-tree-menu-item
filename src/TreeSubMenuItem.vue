<template>
    <div class="tree-sub-menu">
        <div class="tree-item-group" v-for="item in items" :key="item.name">
            <transition name="fade">
                <div v-show="opened">
                    <div :class="{'tree-item': !dark, 'tree-item-dark': dark}" @click="setItemStatus(item)">
                        <div class="sub-menu-item" :style="{'margin-left': px + 'px'}">
                            <div class="prepend"><v-icon>{{ item.prepend }}</v-icon></div>
                            <div class="label" >{{ item.label }}</div>
                            <div class="append">
                                <v-icon v-show="item.children.length && !item.opened">keyboard_arrow_right </v-icon>
                                <v-icon v-show="item.children.length && item.opened">keyboard_arrow_down</v-icon>
                                <v-icon v-show="!item.children.length">{{ item.append}}</v-icon>
                            </div>
                        </div>
                    </div>
                    <sub-item
                        :dark="dark"
                        :px="getPx"
                        :opened="item.opened"
                        v-if="item.children.length"
                        :items="item.children">
                    </sub-item>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sub-item',
        data() {
            return {

            }
        },
        props: {
            items: {
                type: Array
            },
            px: {
                type: String
            },
            opened:{
                type: Boolean
            },
            dark:{
                type: Boolean
            }
        },
        methods: {
            getAppend(children) {
                if(children.length){
                    return 'keyboard_arrow_right'
                } else {
                    return ''
                }
            },
            setItemStatus(item){
                item.opened = !item.opened
            }
        },
        computed: {
            getPx() {
                let a = parseInt(this.px) + 30
                return a.toString()
            },
        },
    }
</script>

<style scoped>
    .tree-sub-menu{
        display: flex;
        flex-direction: column;
    }
    .sub-menu-item{
        display: flex;
        flex-direction: row;
        height: 40px;
        align-items: center;
    }
    .tree-item:hover{
        background: rgba(245, 245, 245, 0.8);
        cursor: pointer;
    }
    .tree-item-dark:hover{
        background: rgba(255, 255, 255, 0.2);
        cursor: pointer;
    }
    .sub-menu-item .prepend {
        width: 5%;
        margin-left: 10px
    }
    .sub-menu-item .label{
        width: 80%;
        margin-left: 25px;
        flex-grow: 1;
    }
    .sub-menu-item .append {
        width: 10%;
        margin-right: 10px
    }

    .fade-enter {
        opacity: 0.5;
        transition: .5s;
        transform: translateX(-30px);
    }

    .fade-enter-active {
        opacity: 0.9;
        transition: .5s;
    }

    .fade-leave{
        opacity: 0;
        transition: .2s;
    }

    .fade-leave-active{
        opacity: 0;
        transition: .2s;
        transform: translateX(-25px);
    }
</style>

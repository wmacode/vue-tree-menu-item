<template>
    <div class="tree-menu" :class="{dark: dark}">
        <div class="search" style="padding: 10px 10px 0 10px">
            <v-flex xs12 sm12 md12 >
                <v-text-field
                    placeholder="Buscar categoria ..."
                    append-icon="search"
                    clearable
                    color
                    autofocus
                    v-model="filter"
                ></v-text-field>
            </v-flex>
        </div>
        <div class="tree-item-group" v-for="item in items" :key="item.name">
            <div :class="{'tree-item': !dark, 'tree-item-dark': dark}" @mouseover="mouseHover" @click="setItemStatus(item)">
                <div class="menu-item">
                    <div class="prepend"><v-icon>{{ item.prepend }}</v-icon></div>
                    <div class="label">{{ item.label }}</div>
                    <div class="append">
                        <v-icon v-show="item.children.length && !item.opened">keyboard_arrow_right </v-icon>
                        <v-icon v-show="item.children.length && item.opened">keyboard_arrow_down</v-icon>
                        <v-icon v-show="!item.children.length">{{ item.append}}</v-icon>
                    </div>
                </div>
            </div>
            <tree-sub-menu
                :dark="dark"
                :px="px"
                :opened="item.opened"
                :items="item.children"
                v-if="item.children.length">
            </tree-sub-menu>
        </div>
    </div>
</template>

<script>
    import TreeSubMenu from './TreeSubMenuItem.vue'

    export default {
        name: 'Tree-menu',
        components: { TreeSubMenu },
        props: {
            items: {
                type: Array
            },
            dark: {
                type: Boolean
            }
        },
        data() {
            return {
                px: '30',
                filter: ''
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
            },
            mouseHover(){
                this.hover = !this.hover
            }
        }
    }
</script>

<style scoped>
    .tree-menu{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
    .dark{
        color: #fff;
    }
    .menu-item{
        display: flex;
        flex-direction: row;
        height: 40px;
        /* border-bottom: 1px solid #333; */
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
    .menu-item .prepend {
        width: 5%;
        margin-left: 10px;
    }
    .menu-item .label{
        width: 80%;
        margin-left: 25px;
        flex-grow: 1;
    }
    .menu-item .append {
        width: 10%;
        margin-right: 10px
    }
</style>

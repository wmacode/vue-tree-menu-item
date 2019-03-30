<template>
<div class="tree-menu" :style="{ color: getColor }" :class="{dark: dark}">

	<field-search-dark :color="getColor" v-if="dark"></field-search-dark>
	<field-search :color="getColor" v-else></field-search>

    <div class="tree-item-group" v-for="item in items" :key="item.name">
        <div :class="{'tree-item': !dark, 'tree-item-dark': dark}" @mouseover="mouseHover" @click="setItemStatus(item)">
            <div class="menu-item">
                <div class="prepend">
                    <v-icon :name="(item.prepend) ? item.prepend : null" />
                </div>
                <div class="label">{{ item.label }}</div>
                <div class="append">
                    <v-icon v-show="item.children.length && !item.opened" name="angle-right" />
                    <v-icon v-show="item.children.length && item.opened" name="angle-down" />
                    <v-icon v-show="!item.children.length" :name="(item.append) ? item.append : null" />
                </div>
            </div>
        </div>
        <tree-sub-menu :dark="dark" :px="px" :opened="item.opened" :items="item.children" v-if="item.children.length"></tree-sub-menu>
    </div>
</div>
</template>

<script>
import TreeSubMenu from "./TreeSubMenuItem.vue";
import "vue-awesome/icons/flag";
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
import FieldSearch from './FieldSearch.vue'
import FieldSearchDark from './FieldSearchDark.vue'

export default {
    name: "Tree-menu",
    components: {
		TreeSubMenu,
		FieldSearch,
		FieldSearchDark,
        "v-icon": Icon
    },
    props: {
        items: {
            type: Array
        },
        dark: {
            type: Boolean
        },
        search: {
            type: Boolean
        },
        color: {
            type: String,
        }
    },
    data() {
        return {
            px: "30",
            filter: "",
            value: "sitemap",
        };
    },
    methods: {
        getIcon(iconName) {
            return iconName;
        },
        setItemStatus(item) {
            item.opened = !item.opened;
        },
        mouseHover() {
            this.hover = !this.hover;
        }
    },
    computed: {
        getColor() {
            let color = this.color ? this.color : this.dark ?  '#fff' : '#333'
            return color
        }
    },
};
</script>

<style scoped>
.tree-menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

/* .dark {
    color: cadetblue;
} */

.menu-item {
    display: flex;
    flex-direction: row;
    height: 40px;
    /* border-bottom: 1px solid #333; */
    align-items: center;
}

.tree-item:hover {
    background: rgba(245, 245, 245, 0.8);
    cursor: pointer;
}

.tree-item-dark:hover {
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
}

.menu-item .prepend {
    width: 5%;
    margin-left: 10px;
}

.menu-item .label {
    width: 80%;
    margin-left: 25px;
    flex-grow: 1;
}

.menu-item .append {
    width: 10%;
    margin-right: 10px;
}
</style>

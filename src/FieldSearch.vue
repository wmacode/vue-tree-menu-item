<template>
<div class="search">
    <form method="post">
        <input :style="{color: color}" type="text" class="textbox" placeholder="Search">
    </form>
</div>
</template>

<script>
import "vue-awesome/icons/flag";
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";

export default {
    name: "FieldSearch",
    components: {
        "v-icon": Icon
    },
    props: {
        color: {
            type: String
        },
    },
};
</script>

<style scoped>

.icon-search{
    margin-top: 14px;
    margin-right: 10px;
}

div.search {
    display: flex;
    justify-content: center;
}

form {
    margin: 30px 0;
    display: flex;
    width: 90%;
    outline: 0;
    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
        0 1px 2px rgba(0, 0, 0, 0.24);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    -webkit-border-radius: 4px;
    border-radius: 4px;
}

form>.textbox {
    outline: 0;
    height: 42px;
    width: 80%;
    line-height: 42px;
    padding: 0 16px;
    background-color: rgba(255, 255, 255, 0.8);
    color: #212121;
    border: 0;
    float: left;
    -webkit-border-radius: 4px 0 0 4px;
    border-radius: 4px 0 0 4px;
    font-size: 1em;
}

form>.textbox:focus {
    outline: 0;
    background-color: #fff;
    color: cadetblue;
}


</style>

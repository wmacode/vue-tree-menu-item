<template>
	<div class="container">
		<tree-menu :items="items" color="cadetblue"></tree-menu>
	</div>
</template>

<script>
	import TreeMenu from './TreeMenuItem.vue'
	export default {
		components: { TreeMenu },
		data() {
			return {
				items: [
                {
                    name: 'home',
                    label: 'Home',
					prepend: 'home',
                    path: '/',
                    children: []
                },
                {
					name: 'category',
                    label: 'Category',
                    prepend: 'sitemap',
                    path: '/category',
                    opened: false,
                    children: [
                        {
                            name: 'category',
                            label: 'Sub-Category',
                            prepend: 'sitemap',
                            path: '/category',
                            children: []
                        },
                        {
                            name: 'contactPhone',
                            label: 'Contact Phone',
                            prepend: 'id-card',
                            path: '/contact_phone',
                            opened: false,
                            children: [
                                {
                                    name: 'maria',
                                    label: 'Maria',
                                    prepend: 'id-card',
                                    path: '/maria',
                                    children: []
                                },
                                {
                                    name: 'joao',
                                    label: 'Joao',
                                    prepeappendnd: 'contact_phone',
                                    path: '/joao',
                                    children: []
                                },
                                {
                                    name: 'camila',
                                    label: 'Camila',
                                    prepend: '',
                                    path: '/camila',
                                    children: []
                                },
                            ]
                        }
                    ]
                },
                {
                    name: 'contactPhone',
                    label: 'Contact Phone',
                    prepend: 'id-card',
                    path: '/contact_phone',
                    opened: false,
                    children: [
                        {
                            name: 'maria',
                            label: 'Maria',
							prepend: '',
							append: 'id-card',
                            path: '/maria',
                            children: []
                        },
                        {
                            name: 'joao',
                            label: 'Joao',
							prepend: '',
							append: 'id-card',
                            path: '/joao',
                            children: []
                        },
                        {
                            name: 'camila',
                            label: 'Camila',
							prepend: '',
							append: 'id-card',
                            path: '/camila',
                            children: []
                        },
                    ]
                }
            ],
			}
		},
	}
</script>

<style>
	body{
		margin: 0;
		padding: 0;
	}
	.container{
		width: 300px;
		height: 100vh;
		background-color: rgb(30, 30, 30);
		background-color: #fff;
		border-right: 3px solid #aaa;
	}
</style>

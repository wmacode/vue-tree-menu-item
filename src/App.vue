<template>
	<div>
		<tree-menu :items="items"></tree-menu>
	</div>
</template>

<script>
	import TreeMenu from './treeMenuItem.vue'
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
                    prepend: 'category',
                    path: '/category',
                    opened: false,
                    children: [
                        {
                            name: 'category',
                            label: 'Sub-Category',
                            prepend: 'category',
                            path: '/category',
                            children: []
                        },
                        {
                            name: 'contactPhone',
                            label: 'Contact Phone',
                            prepend: 'contact_phone',
                            path: '/contact_phone',
                            opened: false,
                            children: [
                                {
                                    name: 'maria',
                                    label: 'Maria',
                                    prepend: 'contact_phone',
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
                    prepend: 'contact_phone',
                    path: '/contact_phone',
                    opened: false,
                    children: [
                        {
                            name: 'maria',
                            label: 'Maria',
                            prepend: '',
                            path: '/maria',
                            children: []
                        },
                        {
                            name: 'joao',
                            label: 'Joao',
                            prepend: '',
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
            ],
			}
		},
	}
</script>

<style scoped>

</style>

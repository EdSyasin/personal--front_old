<template>
	<div class="hello-world" id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: "App",
	data: () => ({
		test: "hello world"
	})
	
}
</script>

<style lang="scss" scoped>
	.hello-world{
		color: darkred;
	}
</style>
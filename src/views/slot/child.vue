<template>
<div class='container'>

 <h4>这是默认的</h4>
<slot></slot>
<slot></slot>
<slot name="one"></slot>
<slot name="two"></slot>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>

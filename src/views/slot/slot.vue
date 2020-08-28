<template>
  <div class="container">
    <v-child>这是slot站位</v-child>
    <v-child>
       <template v-slot:two>
这是具名插槽two
    </template>
      <template v-slot:one>
这是具名插槽one
    </template>

    </v-child>

  </div>
</template>

<script>
import child from '@/views/slot/child.vue'

export default {
  data () {
    return {}
  },
  components: {
    'v-child': child
  },
  methods: {}
}
</script>

<style scoped>
</style>

<template>
  <main>
    <div class="button-wrapper">
      <add-aspect/>
    </div>
    <div>
      <div :key="n" v-for="n in aspectInputs">
        <div>
          <aspect-input :name="n.id"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import addAspect from '@/components/addaspect.vue'
import aspectInput from '@/components/aspectinput.vue'

export default {
  name: 'home',
  data () {
    return {
      count: 0
    }
  },
  computed: {
    aspectInputs () {
      return this.$store.state.aspects
    }
  },
  components: {
    aspectInput,
    addAspect
  }
}
</script>

<style scoped>
  main {
    padding: 40px;
  }

  .button-wrapper {
    text-align: right;
  }
</style>

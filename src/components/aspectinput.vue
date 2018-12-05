<template>
  <div>
    <form>
      <div>
        <label for="aspect">Aspect name</label>
        <input id="aspect" :name="name" type="text">
      </div>
      <field-input :key="n" v-for="n in fieldCount" :name="n">
      </field-input>
    </form>
    <add-field :aspectId="name"/>
    <button @click="saveAspect">save aspect</button>
  </div>
</template>

<script>
import addField from '@/components/addfield.vue'
import fieldInput from '@/components/fieldinput.vue'

export default {
  name: 'aspectInput',
  props: ['name'],
  computed: {
    fieldCount () {
      return this.$store.getters.getAspectById(this.name).fieldCount
    }
  },
  methods: {
    saveAspect () {
    }
  },
  components: {
    addField,
    fieldInput
  }
}
</script>

<style scoped>
  label, input {
    font-size: 18px;
    padding: 5px 10px;
  }
</style>

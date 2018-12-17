<template>
  <select @change="onSelect">
    <option :key="index" v-for="(item, index) in options"
            :value="item" :selected="isSelected(item)">{{item}}</option>
    <option v-if="defaultOption" :selected="isDefaultSelected" value="null">{{defaultOption}}</option>
  </select>
</template>

<script>
export default {
  name: 'shapeSelect',
  props: ['options', 'defaultOption', 'selectedItem'],
  computed: {
    isDefaultSelected () {
      return this.selectedItem === null
    }
  },
  methods: {
    onSelect (e) {
      this.$emit('onSelectChange', e.target.value)
    },
    isSelected (item) {
      return item === this.selectedItem
    }
  }
}
</script>

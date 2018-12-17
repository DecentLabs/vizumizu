<template>
  <select @change="onSelect">
    <option :key="index" v-for="(item, index) in shapes"
            :value="item" :selected="isSelected(item)">{{item}}</option>
    <option v-if="defaultOption" :selected="isDefaultSelected" value="null">{{defaultOption}}</option>
  </select>
</template>

<script>
import {visualTypes} from '../data/interfaces'

export default {
  name: 'shapeSelect',
  props: ['options', 'defaultOption', 'selectedItem'],
  computed: {
    isDefaultSelected () {
      return this.selectedItem === null
    },
    shapes () {
      const shapes = visualTypes.filter(i => {
        return i.type === 'Shape'
      }).pop()
      return shapes.mappedValue
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

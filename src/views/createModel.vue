<template>
  <main>
    <div class="button-wrapper">
      <button @click="addField" title="add field" class="add-field"></button>
      <router-link :to="{name: 'ModelData', params: {id}}"
                   class="button see" title="see visual"></router-link>
      <router-link :to="{name: 'ShapeEditor', params: {id}}"
                   class="button edit" title="edit layout"></router-link>
      <button @click="save" class="yellow">save</button>

      <!--<input class="button shape" type="file" @change="handleUpload">-->
    </div>
    <div class="model-details">
      <label>Model name</label>
      <input type="text" placeholder="add model name" v-model="name" class="title" :class="{error: isError(name)}">
      <div class="basic-visuals">
        <div>
          <label>Basic shape</label>
          <shape-select defaultOption="select a shape" @onSelectChange="onShapeChange" :selectedItem="shape" ></shape-select>
        </div>
        <div>
          <label>Basic fill</label>
          <input type="text" placeholder="add fill color" v-model="fill" :class="{error: isError(fill)}">
          <div class="colormarker" :style="{backgroundColor: fill}"></div>
        </div>
        <div>
          <label>Basic stroke</label>
          <input type="text" placeholder="add stroke color" v-model="stroke" :class="{error: isError(stroke)}">
          <div class="colormarker" :style="{borderColor: stroke}"></div>
        </div>
      </div>
    </div>
    <field-input :key="field.id" v-for="field in fields" :id="field.id" :field="field"/>
  </main>
</template>

<script>
import fieldInput from '@/components/field.vue'
import shapeSelect from '@/components/shapeSelect.vue'

import { visualTypes } from '../data/interfaces'

export default {
  name: 'createModel',
  data () {
    return {
      id: this.$route.params.id,
      shapes: visualTypes.find(i => i.type === 'Shape').mappedValue
    }
  },
  computed: {
    name: {
      get () {
        return this.$store.state.modelStore.name
      },
      set (value) {
        this.$store.commit('modelStore/setName', value)
      }
    },
    shape: {
      get () {
        return this.$store.state.modelStore.shape
      }
    },
    fill: {
      get () {
        return this.$store.state.modelStore.fill
      },
      set (value) {
        this.$store.commit('modelStore/setFill', value)
      }
    },
    stroke: {
      get () {
        return this.$store.state.modelStore.stroke
      },
      set (value) {
        this.$store.commit('modelStore/setStroke', value)
      }
    },
    fields () {
      return this.$store.state.modelStore.fields
    }
  },
  methods: {
    handleUpload (e) {
      const file = e.target.files[0]
      const ext = file.name.split('.')[file.name.split('.').length - 1]

      if (ext === 'svg') {
        const reader = new FileReader()
        reader.onload = () => {
          const thisImage = reader.result
          localStorage.setItem('imgData', thisImage)
        }
        reader.readAsDataURL(file)
      }
    },
    isError (val) {
      return !val && this.$store.state.modelStore.error
    },
    onShapeChange (value) {
      this.$store.commit('modelStore/setShape', value)
    },
    save () {
      this.$store.dispatch('modelStore/save')
    },
    addField () {
      this.$store.dispatch('modelStore/addFieldToModel')
    }
  },
  mounted () {
    this.$store.dispatch('modelStore/refreshModel', this.$route.params.id)
  },
  components: {
    fieldInput,
    shapeSelect
  }
}
</script>

<style>
  main {
    width: 900px;
    padding: 40px;
    margin: 0 auto;
  }

  .model-details {
    padding: 30px;
    text-align: left;
    background-color: #efefef;
  }

  .model-details input,
  .model-details select {
    margin-bottom: 5px;
  }

  .button-wrapper {
    text-align: right;
    margin-bottom: 20px;
  }

  label {
    font-size: 18px;
    font-weight: 500;
    margin-right: 10px;
    color: #090202;
  }

  input,
  select,
  option {
    max-width: 160px;
    font-size: 17px;
    color: #121212;
    appearance: initial;
    border: none;
    border-bottom: 1px solid #c8c8c8;
    border-radius: 0;
    background: none;
    font-family: 'Avenir', sans-serif;
  }

  input.error,
  select.error {
    border-color: #ff6232;
  }

  .colormarker {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 2px solid transparent;
  }

  .edit,
  .see,
  .add-field {
    width: 40px;
    height: 40px;
    border: 0;
  }

  .edit {
    background: url('../assets/edit.png') center / 80% no-repeat transparent;
  }

  .see {
    background: url('../assets/see.png') center / 80% no-repeat transparent;
  }

  .add-field {
    background: url('../assets/add.png') center / 80% no-repeat transparent;
  }
</style>

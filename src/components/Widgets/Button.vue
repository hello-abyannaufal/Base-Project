<template>

  <!-- This is for initial button -->
  <div v-if="(devMode == false)">
    <button :class="theme" @click="execute()">
      <div>
        <slot></slot>
      </div>
    </button>
  </div>

  <!-- This is for advanced button (Dev Mode) -->
  <div v-else>
    <button :class="theme" @click="execute()">
      <p v-if="(shape == 'parallelogram')" class="skew-x-12">
        <slot></slot>
      </p>
      <p v-else>
        <slot></slot>
      </p>
    </button>
  </div>
  
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Setter from '@/misc/button'

export default defineComponent({
  props: {
    color: { required: true, type: String },
    lined: { required: true, type: Boolean },
    shape: { type: String },
    round: { type: Boolean },
    creator: { type: Boolean }
  },
  setup(props) {
    const setTheme = computed(() => {
      if(props.creator == true) {
        return Setter.custom(props.color, props.shape, props.lined)
      } else {
        return Setter.init(props.color, props.round, props.lined)
      }
    })
    return { setTheme }
  },
  data() {
    return {
      theme: Setter.custom(this.color, this.shape, this.lined),
      devMode: false
    }
  },
  methods: {
    execute() {
      this.$emit('run')
    }
  },
  mounted() {
    this.devMode = this.creator
    this.theme = this.setTheme
  }
})
</script>
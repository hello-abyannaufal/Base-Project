<template>
  <div v-if="(dmode == false)">
    <button :class="theme" @click="execute()">
      <div>
        <slot></slot>
      </div>
    </button>
  </div>

  <div v-else>
    <button :class="theme" class="shape-polygon" @click="execute()">
      <div>
        <slot></slot>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Setter from '@/misc/button'

export default defineComponent({
  props: {
    color: { required: true, type: String },
    round: { required: true, type: Boolean },
    lined: { required: true, type: Boolean },
    dev: { type: Boolean }
  },
  data() {
    return {
      theme: Setter.process(this.color, this.round, this.lined),
      dmode: false
    }
  },
  // setup(props) {
  //   const setTheme = computed(() => {
  //     // Set for rounded button
  //     const rounded = `rounded-${props.round}`

  //     // Set for color and depth button
  //     const attribute = props.color.split('-')
  //     const color = attribute[0]
  //     const depth = Number(attribute[1])
  //     const hover = depth + 100

  //     return `bg-${color}-${depth} hover:bg-${color}-${String(hover)} ${rounded}`
  //   })
  //   return { setTheme }
  // },
  methods: {
    execute() {
      this.$emit('run')
    }
  },
  mounted() {
    this.dmode = this.dev
  }
})
</script>

<style>
.shape-polygon{
  clip-path: polygon(
    20% 0%,
    100% 0%,
    80% 100%,
    0% 100%
  ) !important
}

</style>
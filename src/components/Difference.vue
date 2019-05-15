<template lang="html">
  <div v-show="rendered" class="">
    <div class="alert" :class="alertClass">
      Differences were <span v-if="!hasDifference">not</span> detected.
    </div>

    <pre ref="pre" class="bg-light p-3"></pre>
  </div>
</template>

<script>
import * as Diff from 'diff'

export default {
  name: 'Difference',
  data: () => ({
    diff: null
  }),
  computed: {
    rendered () {
      return this.diff ? true : false
    },
    hasDifference () {
      return this.diff ? (this.diff.length > 1) : false
    },
    alertClass () {
      return this.hasDifference ? 'alert-danger' : 'alert-success'
    }
  },
  methods: {
    render (oldJson, newJson) {
      this.diff = Diff.diffJson(oldJson, newJson)

      var span = null,
      fragment = document.createDocumentFragment()

      this.diff.forEach(part => {
        var classes = []
        classes.push(part.added ? 'text-success' : (part.removed ? 'text-danger' : 'text-muted'))
        classes.push(part.added ? 'table-success' : (part.removed ? 'table-danger' : null))

        span = document.createElement('span')
        span.setAttribute('class', classes.join(' '))

        span.appendChild(document.createTextNode(part.value))

        fragment.appendChild(span)
      })

      this.$refs.pre.appendChild(fragment)
    }
  }
}
</script>

<template>
  <div>

    <h3>
      {{ seed.name }}
    </h3>

    <form @submit.prevent="compare">
      <div class="input-group input-group-sm mb-1">
        <div class="input-group-prepend">
          <span class="input-group-text text-center font-weight-bold " style="width: 75px;">PROD</span>
        </div>
        <input v-model="prodUrl" class="form-control font-italic text-muted" required>
      </div>

      <div class="input-group input-group-sm mb-2">
        <div class="input-group-prepend">
          <span class="input-group-text text-center font-weight-bold " style="width: 75px;">DR</span>
        </div>
        <input v-model="testUrl" class="form-control font-italic text-muted" required>
      </div>

      <p class="text-center">
        <button type="submit" class="btn btn-primary ">Compare JSON Endpoints</button>
      </p>
    </form>

    <div v-if="loading" class="h4 text-center text-muted p-3 bg-light">
      Loading...
    </div>

    <Difference ref="diff" />

  </div>
</template>

<script>
import seeds from '../assets/seeds'
import Difference from '../components/Difference'

// console.log(Diff)

export default {
  name: 'Endpoint',
  props: ['id'],
  components: { Difference },
  data: () => ({
    prodUrl: null,
    testUrl: null,
    loading: false
  }),
  computed: {
    seed () {
      if (this.id) {
        return seeds.find(x => x.id == this.id)
      } else {
        return {
          id: null,
          name: ''
        }
      }

    }
  },
  methods: {
    fetchUrl (url) {
      return fetch(url).then(res => res.json())
    },
    compare () {
      this.loading = true
      return Promise.all([
        this.fetchUrl(this.prodUrl),
        this.fetchUrl(this.testUrl)
      ]).then(responses => {
        this.loading = false
        this.$refs.diff.render(responses[0], responses[1])
      })
    }
  },
  mounted () {
    this.prodUrl = this.seed.prodUrl
    this.testUrl = this.seed.drUrl
  }
}
</script>

<template>
  <div id="app" class="container-fluid py-5">
    <div class="row">

      <div class="col-md-4 col-lg-3 col-xl-2 mb-3">
        <div class="sticky">
          <router-link to="/" class="d-flex justify-content-center">
            <img alt="Vue logo" src="./assets/logo.png" height="100">
          </router-link>
          <nav class="list-group">
            <div v-for="s in seeds" :key="s.id" class="d-flex align-items-center justify-content-between list-group-item list-group-item-action">
              <router-link  :to="s.id" class="list-group-item-action">
                {{ s.name }}
              </router-link>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                  &nbsp;
                </label>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div class="col">
        <router-view :key="$route.fullPath" />
      </div>

    </div>
  </div>
</template>

<script>
import seeds from './assets/seeds'

export default {
  name: 'app',
  data: () => ({
    seeds
  })
}
</script>

<style src="./assets/main.scss" lang="scss"></style>

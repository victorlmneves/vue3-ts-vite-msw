<script setup lang="ts">
import { ref } from 'vue'

const movies = ref([])
const getSpaceMovies = async ()  => {
  const response = await fetch('/movies')

  if (response.ok) {
    const data = await response.json()
    movies.value = data.movies
  } else {
    throw response.status
  }
}

getSpaceMovies()
</script>

<template>
  <div class="about">
    <ul>
      <li v-for="{ title, id } in movies" :key="id">
        {{ title }}
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

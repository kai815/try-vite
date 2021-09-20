<template>
<div>
  一覧
  <ul>
    <li v-for="post in posts" :key="post.id">
      <nuxt-link :to="`/post/${post.id}`">
      {{post.title}}
      </nuxt-link>
    </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios';
export default {
  async asyncData({ app, payload }) {
    const posts = payload !== undefined ? payload 
      : (await axios.get('https://qiita.com/api/v2/items?page=1&per_page=100',
        {
          headers: {
            Authorization: `Bearer ${app.$config.token}`,
          }
        }
        )).data
    return { posts }
  }
}
</script>

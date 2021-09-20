<template>
<div>
  {{post.title}}
</div>
</template>

<script>
import axios from 'axios';
export default {
  async asyncData({app, params, payload}){
    const post = payload !== undefined ? payload
      : (await axios.get(`https://qiita.com/api/v2/items/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${app.$config.token}`,
          }
        }
        )).data
    return {post}
  }
}
</script>

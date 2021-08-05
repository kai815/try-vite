<template>
<div>
  {{payload}}
  <Tutorial/>
</div>
</template>

<script>
export default {
  async asyncData({payload}){
    console.log(payload);
    return { payload:payload}
  },
  mounted(){
    console.log(this.payload)
  }
}
</script>

<template>
  <div>
    <h2>{{ msg }}</h2>
    <form method="get" action="/">
      <input type="text" name="q" id="q" />
      <button type="submit">Yhdyssana vai ei</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'InputForm',
  props: {
    msg: String
  }
}
</script>

<style></style>

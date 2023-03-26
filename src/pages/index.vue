<template>
  <div>
    <h1>Ei Home</h1>
    <button type="button" @click="$router.push('/app/dashboard')">Let's Begin</button>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style lang="scss" scoped>
div {
  height: 100vh;
  width: 100%;
  background: var(--brand-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--brand-white);
    font-size: 5rem;
    margin-bottom: 20px;
  }

  button {
    background-color: var(--brand-white);
    color: var(--text-primary);
  }
}
</style>

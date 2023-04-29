<svelte:head>
  <link rel="icon" type="image/png" href="./disCalculatorIcon.png" />
  <title>DisCalculator | {selectedView}</title>
</svelte:head>

<script lang="ts">
  import Time from './components/Time.svelte'
  import TimeInText from './components/TimeInText.svelte'
  import { inject } from '@vercel/analytics';

  inject();

  let selectedView = 'Time as Text'
</script>

<main>
  <div id="app">
    <header>
      <div class="logo">
        disCALCULATOR
      </div>
      <div id="nav">
        <a href="#" on:click={() => {selectedView = "Time as Text"}}>Tijd als tekst</a>      
        <a href="#"  on:click={() => {selectedView = "Text as Time"}}>Tekst als tijd</a>
      </div>
    </header>
    <div class="wrapper">
      {#if selectedView === "Time as Text"}
        <Time />
      {/if}
      {#if selectedView === "Text as Time"}
        <TimeInText />
      {/if}
    </div>
  </div>
</main>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,300&display=swap');
html {
  font-size: 10px;
}
body {
  font-family: 'Roboto', sans-serif;
  background: #0C2840;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #F2E6CE;
  font-size: 1.8rem;
  line-height: 1.4rem;
  padding: 3rem;
  padding-top: 16rem;
  font-weight: 300;
  margin: 0;
}

header{
  height: 100px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: top;
  justify-content: center;
  flex-wrap: wrap;
  background: #F2E6CE;
  box-shadow: 0 0 50px rgba(0,0,0,.3);

  .logo {
    flex-grow: 1;
    margin-left: 3rem;
    font-size: 28px;
    font-weight: 300;
    width: 100%;
    text-align: center;
    color: #D97F77;
    line-height: 1.5;
  }

  #nav {
    a {
      font-weight: bold;
      color: #0C2840;
      height: 100%;
      padding: 0 2rem;
      text-decoration: none;
      transform: scale(1);
      transition: color .2s ease-in-out, transform .2s ease-in-out;

      &:hover {
        color: #D97F77;
        transform: scale(1.1);
      }

      &.router-link-exact-active {
        color: #8C403A;
      }
    }
  }
}

.wrapper { 
  text-align: center;
  padding-top: 3rem;
  max-width: 550px;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>


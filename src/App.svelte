<script lang="ts">
  import AnalogToDigital from "./components/AnalogToDigital.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import TimeAsText from "./components/TimeAsText.svelte";
  import TimeInText from "./components/TimeInText.svelte";
  import TimeDifference from "./components/TimeDifference.svelte";
  import { inject } from "@vercel/analytics";
  import { onMount } from "svelte";

  inject();

  let activePage = null;

  let activePageTitle = null;

  const pages = [
    { name: "Tijd als Text", component: TimeAsText },
    { name: "Tijd in Text", component: TimeInText },
    { name: "Analoog naar Digitaal", component: AnalogToDigital },
    { name: "Tijdsverschil", component: TimeDifference },
  ];

  onMount(() => {
    // Set the initial active page
    activePage = pages[0].component;
  });

  function handlePageSelected(event) {
    activePage = event.detail.component;
    activePageTitle = event.detail.name;
  }
</script>

<svelte:head>
  <link rel="icon" type="image/png" href="./disCalculatorIcon.png" />
  <title>DisCalculator | {activePageTitle}</title>
</svelte:head>

<div id="app">
  <main>
    <header>
      <div class="logo">disCALCULATOR</div>
    </header>

    <!-- Render the active page component -->
    <svelte:component this={activePage} />
  </main>

  <aside>
    <Sidebar {pages} {activePageTitle} on:pageSelected={handlePageSelected} />
  </aside>
</div>

<style lang="scss">
  aside {
  }
  header {
    height: 100px;
    width: 100vw;
    display: flex;
    align-items: top;
    justify-content: center;
    flex-wrap: wrap;
    background: #f2e6ce;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);

    .logo {
      flex-grow: 1;
      margin-left: 3rem;
      font-size: 28px;
      font-weight: 300;
      width: 100%;
      text-align: center;
      color: #d97f77;
      line-height: 1.5;
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

<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let pages = [];
  export let activePageTitle = null;

  let isSidebarOpen = false;

  const dispatch = createEventDispatcher();

  function selectPage(page) {
    dispatch("pageSelected", page);
    closeSidebar();
  }

  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
  }

  function closeSidebar() {
    isSidebarOpen = false;
  }
</script>

<div class="sidebar" class:open={isSidebarOpen}>
  <div class="sidebar-overlay" on:click={closeSidebar} />
  <div class="sidebar-content">
    <ul>
      {#each pages as page}
        <li
          class:selected={page.name === activePageTitle}
          on:click={() => selectPage(page)}
        >
          {page.name}
        </li>
      {/each}
    </ul>
  </div>
</div>

<button class="toggle-button" on:click={toggleSidebar}>
  {#if isSidebarOpen}
    Close Sidebar
  {:else}
    Open Sidebar
  {/if}
</button>

<style lang="scss">
  /* Add your custom styles here */
  .sidebar {
    position: fixed;
    z-index: 12;
    top: 0;
    right: 0;
    bottom: 0;
    transform: translateX(100%);
    transition: transform 0.2s ease-out;
  }

  .sidebar.open {
    transform: translateX(0);
  }

  .sidebar-overlay {
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .sidebar-content {
    padding: 16px;
  }

  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }

  .sidebar li {
    cursor: pointer;
    padding: 8px;
    border-bottom: 1px solid #ddd;
    transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;
  }

  .sidebar li:hover {
    color: #d97f77;
    background: rgba(255, 255, 255, 0.2);
  }

  .sidebar li.selected {
    background: rgba(255, 255, 255, 0.4);
    color: #8c403a;
    font-weight: bold;
  }

  .toggle-button {
    position: fixed;
    top: 16px;
    right: 16px;
    padding: 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>

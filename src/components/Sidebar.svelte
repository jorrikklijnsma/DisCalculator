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

<nav class:open={isSidebarOpen}>
  <div class="sidebar-overlay" on:click={closeSidebar} />
  <div class="sidebar">
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
</nav>

<button class="toggle-button" on:click={toggleSidebar}>
  {#if isSidebarOpen}
    Close Sidebar
  {:else}
    Open Sidebar
  {/if}
</button>

<style lang="scss">
  nav {
    pointer-events: none;

    .sidebar-overlay {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.85);
      transition: scale 0.2s ease-out;
      scale: 0 1;
      transform-origin: 100% 0%;
    }

    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .sidebar {
      transform: translateX(100%);
      opacity: 0;
      transition: transform 0.2s ease-out;

      .sidebar-content {
        padding: 1rem;
        z-index: 10;

        ul {
          list-style-type: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 50px;

          li {
            cursor: pointer;
            padding: 8px;
            border-bottom: 1px solid #ddd;
            transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;

            &:hover {
              // color: #8c403a;
              color: #d97f77;
            }

            &.selected {
              color: #d97f77;
              border-color: #8c403a;
              font-weight: bold;
            }
          }
        }
      }
    }

    &.open {
      pointer-events: initial;
      .sidebar-overlay {
        scale: 1 1;
      }
      .sidebar {
        opacity: 1;
        transform: translateX(0);
      }
    }
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

<script lang="ts">
  import { onMount } from "svelte";

  import Clock from "./Clock.svelte";

  let minuteForClock = 0;
  let hourForClock = 0;

  function setHandlePositions() {
    const hourHandle = document.getElementById("hourHandle");
    const minuteHandle = document.getElementById("minuteHandle");

    if (hourHandle && minuteHandle) {
      hourHandle.style.transform = `rotate(${hourForClock * 30}deg)`;
      minuteHandle.style.transform = `rotate(${minuteForClock * 6}deg)`;
    }
  }

  onMount(() => {
    const currentTime = new Date();
    hourForClock = currentTime.getHours() % 12; // Convert to 12-hour format
    minuteForClock = currentTime.getMinutes();
    setHandlePositions();
  });

  function handleInputChange() {
    const hourInput = document.getElementById("hourInput") as HTMLInputElement;
    const minuteInput = document.getElementById(
      "minuteInput"
    ) as HTMLInputElement;

    if (hourInput && minuteInput) {
      hourForClock = +hourInput.value;
      minuteForClock = +minuteInput.value;
      setHandlePositions();
    }
  }
</script>

<div class="analogToDigital">
  <label for="hourInput">Hour:</label>
  <input
    type="range"
    id="hourInput"
    min="0"
    max="12"
    step="1"
    value="0"
    on:input={handleInputChange}
  />

  <label for="minuteInput">Minute:</label>
  <input
    type="range"
    id="minuteInput"
    min="0"
    max="60"
    step="1"
    value="0"
    on:input={handleInputChange}
  />

  <Clock hours={hourForClock} minutes={minuteForClock} />
</div>

<style lang="scss">
  /* Add your custom styles here */
</style>

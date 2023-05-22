<script lang="ts">
  import { onMount } from "svelte";

  import Clock from "./Clock.svelte";

  let minuteForClock = 0;
  let hourFor24Clock = 0;
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
      hourForClock = hourInput.value;
      hourFor24Clock = (hourInput.value + 12) % 24;
      minuteForClock = minuteInput.value;
      setHandlePositions();
    }
  }
</script>

<div class="analogToDigital">
  <div class="sliderInputs">
    <div>
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
    </div>
    <div>
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
    </div>
  </div>

  <div>
    <p>
      {hourForClock.toString().padStart(2, "0")} : {minuteForClock
        .toString()
        .padStart(2, "0")}
    </p>
    <p>
      {hourFor24Clock.toString().padStart(2, "0")} : {minuteForClock
        .toString()
        .padStart(2, "0")}
    </p>
    <Clock hours={hourForClock} minutes={minuteForClock} />
  </div>
</div>

<style lang="scss">
  .analogToDigital {
    text-align: center;
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    .sliderInputs {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }
  }
  /* Add your custom styles here */
</style>

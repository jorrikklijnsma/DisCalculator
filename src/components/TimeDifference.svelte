<script lang="ts">
  let startHours = 0;
  let startMinutes = 0;
  let endHours = 0;
  let endMinutes = 0;
  let differenceHours = 0;
  let differenceMinutes = 0;

  const calcDifference = () => {
    const startTime = startHours * 60 + startMinutes;
    const endTime = endHours * 60 + endMinutes;
    let difference = endTime - startTime;

    if (difference < 0) {
      difference += 1440; // Assuming 24-hour format, 1440 minutes in a day
    }

    differenceHours = Math.floor(difference / 60);
    differenceMinutes = Math.round((difference % 60) / 15) * 15;
  };
</script>

<div class="timeCalc">
  <h3>Selecteer de start tijd:</h3>
  <form>
    <input
      type="number"
      inputmode="numeric"
      enterkeyhint="go"
      bind:value={startHours}
      on:click={() => {
        startHours = null;
      }}
      on:keyup={calcDifference}
      min="0"
      max="23"
    />
    :
    <input
      type="number"
      inputmode="numeric"
      enterkeyhint="go"
      bind:value={startMinutes}
      on:click={() => {
        startMinutes = null;
      }}
      on:keyup={calcDifference}
      min="0"
      max="59"
    />
  </form>

  <h3>Selecteer de eind tijd:</h3>
  <form>
    <input
      type="number"
      inputmode="numeric"
      enterkeyhint="go"
      bind:value={endHours}
      on:click={() => {
        endHours = null;
      }}
      on:keyup={calcDifference}
      min="0"
      max="23"
    />
    :
    <input
      type="number"
      inputmode="numeric"
      enterkeyhint="go"
      bind:value={endMinutes}
      on:click={() => {
        endMinutes = null;
      }}
      on:keyup={calcDifference}
      min="0"
      max="59"
    />
  </form>

  <h3>Resultaat:</h3>
  <p>{differenceHours} uur en {differenceMinutes} minuten</p>
</div>

<style lang="scss">
  /* Add your custom styles here */
</style>

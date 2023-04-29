    
  <script lang="ts">
    import {quarters, hours, intervalCombined} from '../lib/data'
    import Clock from './Clock.svelte'

    let selectedInterval:number = 0
    let selectedHour:number = 12
    let hourForClock:number = 0
    let early:string
    let late:string

    const calcText = () => {
        let lateTime = ((selectedHour - Math.floor(selectedInterval/60) + 12) % 24).toString()
        hourForClock = selectedHour - Math.floor(selectedInterval/60)
        let hourDef = (selectedHour - Math.floor(selectedInterval/60)).toString();
        const intervalTime = (selectedInterval%60).toString()

        early = `${hourDef.padStart(2, '0')}:${intervalTime.padStart(2, '0')}`
        late = `${lateTime.padStart(2, '0')}:${intervalTime.padStart(2, '0')}`
    }
</script>

<div class="timeTextCalc">
  <h3>Selecteer de text:</h3>
    <form on:submit|preventDefault>
        <div class="select">
            <select bind:value={selectedInterval} on:change={calcText}>
                <option disabled value="">Kies een kwartier</option>
                {#each intervalCombined as interval}
                    <option value={interval.nextHour ? interval.value + 60 : interval.value}>
                        {interval.text }
                    </option>
                {/each}
            </select>
        </div>
        <div class="select">
            <select bind:value={selectedHour} on:change={calcText}>
                <option disabled value="">Kies een Uur</option>
                {#each hours as hour}
                    <option value={hour.value}>
                        {hour.text }
                    </option>
                {/each}
            </select>
        </div>
    </form>

    {#if late || early}
        <h2>Je leest of schrijft</h2>
        {#if early}
            <p>voor de middag<sup>*</sup>: {early}</p>
        {/if}
        {#if late}
            <p>Na de middag<sup>*</sup>: { late }</p>
        {/if}
        <div class="reference"><sup>*</sup>12:00 of twaalf uur</div>
    {/if}

    <Clock hours={hourForClock} minutes={selectedInterval%60} />
</div>
  
<style lang="scss">
    .timeTextCalc {
      text-align: center;
      width: 100%;
    }
  
    form {
      display: flex;
      justify-content: space-between;
    }
  
    /* Reset Select */
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      outline: 0;
      box-shadow: none;
      border: 0 !important;
      background: rgb(22, 53, 80);
      background-image: none;
    }
    /* Remove IE arrow */
    select::-ms-expand {
      display: none;
    }
    /* Custom Select */
    .select {
      position: relative;
      width: 46%;
      margin: 0 2%;
      display: flex;
      height: 3em;
      line-height: 3;
      overflow: hidden;
      background: rgb(22, 53, 80);
      color: #F2E6CE;
    }
    select {
      padding: 0 .5em;
      color: #fff;
      cursor: pointer;
      width: 100%;
    }
    /* Arrow */
    .select::after {
      content: '\25BC';
      position: absolute;
      top: 0;
      right: 0;
      padding: 0 1em;
      background: #34495e;
      cursor: pointer;
      pointer-events: none;
      -webkit-transition: .25s all ease;
      -o-transition: .25s all ease;
      transition: .25s all ease;
    }
    /* Transition */
    .select:hover::after {
      color: #f39c12;
    }
    .reference {
        font-size: .75rem;
        opacity: .5;;
    }
</style>
<script lang='ts'>
  import Clock from './Clock.svelte'
  import {hourConvert, minuteConvert} from '../lib/data'

    type LabelTypeObject = {
      type: "Exacte tijd" | "Exacte tijd versie 2" | "Ongeveer (logisch)" | "Ongeveer (minder logisch)",
      value: string
    }
    type TimeText = LabelTypeObject[]

    let hours = 18;
    let minutes = 56;
    let tijdText:TimeText = [];
    let errorText: string | null = null;

    const convertTo5MinuteInterval = (inputMinute:number) => {
      return Math.round(inputMinute/5)*5
    }

    const calcText = () => {
      if (hours < 0 || hours > 23) {
        errorText = 'geen geldige uren';
        return
      } else if (minutes < 0 || minutes > 59) {
        errorText = 'geen geldige minuten'
        return
      } else {
        errorText = null;
      }

      tijdText = [];

      let hourText = hourConvert[hours]
      let nextHourText = hourConvert[hours + 1]
      let minuteText = minuteConvert[minutes]
      
      tijdText.push({type:"Exacte tijd", value:minutes === 0 ? `${hourText} uur` : minutes < 30 ? `${minuteText} over ${hourText}` : `${minuteConvert[60 - minutes]} voor ${nextHourText}`})
      minutes !== 0 && tijdText.push({type:"Exacte tijd versie 2", value:`${hourText} uur ${minuteText}`})
      
      const fiveMinuteValue = convertTo5MinuteInterval(minutes)

      let aproximationLogical: string
      let aproximationLessLogical: string
      
      switch (fiveMinuteValue) {
          case 0:
            aproximationLogical = `${hourText} uur`
            break;
          case 5:
          case 10:
            aproximationLogical = `${minuteConvert[fiveMinuteValue]} over ${hourText}`
            break;
          case 15:
            aproximationLogical = `kwart over ${hourText}`
            aproximationLessLogical = `${minuteConvert[fiveMinuteValue]} over ${hourText}`
            break;
          case 20:
          case 25:
            aproximationLogical = `${minuteConvert[30 - fiveMinuteValue]} voor half ${nextHourText}`
            aproximationLessLogical = `${minuteConvert[fiveMinuteValue]} over ${hourText}`
            break;
          case 30:
            aproximationLogical = `half ${nextHourText}`
            aproximationLessLogical = `${minuteConvert[fiveMinuteValue]} voor ${nextHourText} of ${minuteConvert[fiveMinuteValue]} over ${hourText}`
            break;
          case 35:
          case 40:
            aproximationLogical = `${minuteConvert[fiveMinuteValue - 30]} over half ${nextHourText}`
            aproximationLessLogical = `${minuteConvert[60 - fiveMinuteValue]} voor ${nextHourText}`
            break;
          case 45:
            aproximationLogical = `kwart voor ${nextHourText}`
            aproximationLessLogical = `${minuteConvert[60 - fiveMinuteValue]} voor ${nextHourText}`
            break;
          case 50:
          case 55:
            aproximationLogical = `${minuteConvert[60 - fiveMinuteValue]} voor ${nextHourText}`
            break;
          case 60:
            aproximationLogical = `${nextHourText} uur`
            break;
      } 


      if (aproximationLogical) {
        tijdText.push({type:"Ongeveer (logisch)", value: aproximationLogical})
      }
      if (aproximationLessLogical) {
        tijdText.push({type:"Ongeveer (minder logisch)", value: aproximationLessLogical})
      }
    }
  </script>

<div class="timeCalc">
  <h3>Selecteer de tijd:</h3>
  <form>
    <input type="number" inputmode="numeric" enterkeyhint="go" bind:value={hours} placeholder="18" on:keyup={calcText} min="00" max="23">
    :
    <input type="number" inputmode="numeric" enterkeyhint="go" bind:value={minutes} placeholder="56" on:keyup={calcText} min="00" max="59">
  </form>

  {#if errorText}
    <p>{errorText}</p>
  {/if}

  <h2>Je zegt:</h2>
  <div class="time-texts">
    {#each tijdText as formattedLabel}
    <div class="label-row">
      <span class="label-type">
        {formattedLabel.type}
      </span>
      <span class="label-text">
        {formattedLabel.value}
      </span>
    </div>
    {/each}
  </div>
  
  <Clock 
      hours={hours}
      minutes={minutes}
  />
</div>
  
<style scoped lang="scss">
  .timeCalc {
    text-align: center;
    width: 100%;
  }

  input {
    outline: none;
    border: 0;
    background: rgb(22, 53, 80);
    color: #F2E6CE;
    padding: 1.5rem 3rem;
    font-size: 1rem;
    width: 24px
  }
  input::placeholder {
    color: #A3BFBF;
    font-size: 2.2rem;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .time-texts {
    min-width: 35vw;
    display: flex;
    flex-direction: column;
    
    .label-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid rgba(255,255,255,.4);
      align-items: center;

      .label-type {
        font-weight: bold;
        font-size: 1rem;
      }
      .label-text {
        font-weight: italic;
        font-size: 1.2rem;
      }
    }
  }
</style>

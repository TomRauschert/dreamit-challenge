<template>
  <FlottoSection>
    <div class="draws">
      <h1 class="draws__heading">EUROJACKPOT</h1>
      <div>
        <NSelect
          class="draws__date"
          v-model:value="variables.date"
          :options="dateOptions"
          default-value="Jun 11 2024"
        />
      </div>
      <NSpin v-if="loading" size="large" />

      <NFlex v-else class="draws__result-container" justify="center" data-testid="fetched-data">
        <div class="draws__numbers">
          <span
            class="draws__numbers__number"
            v-for="(number, index) in draws.numbers"
            :key="index"
            data-testid="draw-number"
          >
            {{ number }}
          </span>

          <span
            class="draws__numbers__number draws__numbers__number--additional"
            v-for="(number, index) in draws.additionalNumbers"
            :key="index"
            data-testid="draw-number"
          >
            {{ number }}
          </span>
        </div>

        <NDataTable
          :columns="columns"
          :data="transformedOdds"
          :bordered="false"
          data-testid="draws-table"
        />
      </NFlex>
    </div>
  </FlottoSection>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { GET_DRAWS } from '@/apollo/queries'
import { NDataTable, NSelect, NSpin, NFlex, type DataTableColumns } from 'naive-ui'
import FlottoSection from '@/components/section/FlottoSection.vue'

interface Odd {
  winningClass: string
  numberOfWinners: string
  odd: string
}

const dateOptions = [
  { label: '11. Juni 2024', value: 'Jun 11 2024' },
  { label: '4. Juni 2024', value: 'Jun 04 2024' },
  { label: '28. Mai 2024', value: 'May 28 2024' },
  { label: '21. Mai 2024', value: 'May 21 2024' },
  { label: '14. Mai 2024', value: 'May 14 2024' },
  { label: '7. Mai 2024', value: 'May 07 2024' },
  { label: '30. April 2024', value: 'Apr 30 2024' },
  { label: '23. April 2024', value: 'Apr 23 2024' },
  { label: '16. April 2024', value: 'Apr 16 2024' },
  { label: '9. April 2024', value: 'Apr 09 2024' }
]

const classConditionMap: Record<string, string> = {
  ['1']: '5 Richtige + 2 Eurozahlen',
  ['2']: '5 Richtige + 1 Eurozahl',
  ['3']: '5 Richtige + 0 Eurozahlen',
  ['4']: '4 Richtige + 2 Eurozahlen',
  ['5']: '4 Richtige + 1 Eurozahl',
  ['6']: '3 Richtige + 2 Eurozahlen',
  ['7']: '4 Richtige + 0 Eurozahlen',
  ['8']: '2 Richtige + 2 Eurozahlen',
  ['9']: '3 Richtige + 1 Eurozahl',
  ['10']: '3 Richtige + 0 Eurozahlen',
  ['11']: '1 Richtige + 2 Eurozahlen',
  ['12']: '2 Richtige + 1 Eurozahl'
}

const columns = ref<DataTableColumns>([
  {
    title: 'Klasse',
    key: 'class'
  },
  {
    title: 'Anzahl Richtige',
    key: 'classCondition'
  },
  {
    title: 'Gewinne',
    key: 'winners'
  },
  {
    title: 'Gewinnbetrag',
    key: 'odd'
  }
])

const variables = ref({
  date: 'Jun 11 2024',
  limit: 10,
  type: 'eurojackpot'
})

const { result, loading } = useQuery(GET_DRAWS, variables)

const draws = computed(() => {
  return result.value?.draw.draws[0]
})

const transformedOdds = computed(() => {
  return draws.value?.odds.map((odd: Odd) => {
    return {
      class: odd.winningClass,
      winners: odd.numberOfWinners,
      classCondition: classConditionMap[odd.winningClass],
      odd: odd.numberOfWinners === '0' ? 'unbesetzt' : formatOdd(odd.odd)
    }
  })
})

function formatOdd(odd: string) {
  let cents = parseInt(odd, 10)
  let euros = cents / 100
  let formatted = euros.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })

  return formatted
}
</script>

<style scoped lang="scss">
.draws {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 8rem;

  &__heading,
  &__date {
    font-size: 1.5rem;
    font-weight: 900;

    color: white;
  }

  &__date {
    font-size: 1.2rem;

    margin-top: 1.5rem;
    margin-bottom: 3rem;
  }

  &__result-container {
    width: 100%;
  }

  &__numbers {
    display: flex;
    gap: 1rem;

    margin-bottom: 4rem;

    &__number {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 2rem;
      height: 2rem;

      background-color: white;
      border-radius: 5rem;

      font-size: 1rem;
      font-weight: 900;
    }

    &__number--additional {
      background-color: rgb(255, 233, 108);
    }
  }
}
</style>

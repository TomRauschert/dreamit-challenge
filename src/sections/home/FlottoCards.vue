<template>
  <FlottoSection>
    <NFlex justify="space-between">
      <FlottoActionCard
        v-for="(card, index) in cards"
        :key="index"
        v-bind="card"
        class="action-card"
      />
    </NFlex>
  </FlottoSection>
</template>

<script setup lang="ts">
import FlottoActionCard from '@/components/card/FlottoActionCard.vue'
import FlottoSection from '@/components/section/FlottoSection.vue'
import { NFlex } from 'naive-ui'

const cards = [
  {
    heading: 'Aktueller Jackpot',
    text: [
      'Nicht verpassen! Der aktuelle Jackpot beträgt 18,000,000 €.',
      'Spiele noch heute und gewinne schnell und einfach mit Flotto.'
    ],
    buttonText: 'Jackpot Knacken',
    buttonTo: 'eurojackpot'
  },
  {
    heading: 'Neueste Gewinner',
    text: [
      'Schau dir an, wer kürzlich gewonnen hat!',
      'Diese glücklichen Spieler haben ihren Gewinn mit Flotto blitzschnell erhalten.'
    ],
    buttonText: 'Gewinner Ansehen',
    buttonTo: 'eurojackpot'
  },
  {
    heading: 'Sofort Spielen',
    text: [
      'Spiele jetzt und sichere dir die Chance auf den nächsten großen Gewinn!',
      'Mit Flotto ist es kinderleicht und blitzschnell.'
    ],
    buttonText: 'Jetzt Spielen',
    buttonTo: 'eurojackpot'
  }
]
</script>

<style scoped>
.action-card {
  margin: 0 auto;
  margin-bottom: 2rem;
}
</style>

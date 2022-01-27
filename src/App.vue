<template>
  <LNB />
  <RNB />
  <TheHeader />
  <Billboard />
  <Direct />
  <HotFocus />
  <TimeDeal />
  <Airlift />
  <PlanBanner />
  <WideBanner />
  <BestProduct />
  <TodaysChance />
  <GlobalBanner />
  <Promotion />
  <MdsRecommendation />
  <Partner />
  <Footer />
</template>

<script>
import LNB from '~/components/LNB'
import RNB from '~/components/RNB'
import TheHeader from '~/components/TheHeader'
import Billboard from './components/Billboard.vue'
import Direct from './components/Direct.vue'
import HotFocus from './components/HotFocus.vue'
import GlobalBanner from './components/GlobalBanner.vue'
import TimeDeal from '~/components/TimeDeal'
import Airlift from '~/components/Airlift'
import WideBanner from '~/components/WideBanner'
import PlanBanner from '~/components/PlanBanner'
import TodaysChance from '~/components/TodaysChance'
import Promotion from '~/components/Promotion'
import MdsRecommendation from '~/components/MdsRecommendation'
import Partner from '~/components/Partner'
import Footer from '~/components/Footer'


export default {
  components: {
    LNB,
    RNB,
    TheHeader,
    Billboard,
    Direct,
    HotFocus,
    Airlift,
    TimeDeal,
    GlobalBanner,
    WideBanner,
    PlanBanner,
    TodaysChance,
    Promotion,
    MdsRecommendation,
    Partner,
    Footer
  }
}
</script>

<style lang="scss">
@import "~/scss/main";
</style>

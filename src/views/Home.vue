<template>
  <div>
    <Home />
    <Contact />
    <Welcome />
    <TimeNomoz />
    <Articles />
    <News />
    <PillarsIslam />
    <Map />
  </div>
</template>

<script>
import Home from "@/components/Home";
import Contact from "@/components/Contact";
import Welcome from "@/components/Welcome";
import TimeNomoz from "@/components/TimeNomoz";
import Articles from "@/components/Articles";
import News from "@/components/News";
import PillarsIslam from "@/components/PillarsIslam";
import Map from "@/components/Map";

export default {
  name: "App",
  components: {
    Home,
    Contact,
    Welcome,
    TimeNomoz,
    Articles,
    News,
    PillarsIslam,
    Map,
  },
};
</script>

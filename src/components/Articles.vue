<template>
  <div>
    <section>
      <div class="w-100 pt-90 pb-80 position-relative">
        <img
          class="img-fluid sec-top-mckp position-absolute"
          src="/images/sec-top-mckp2.png"
          alt="Sec Top Mockup 2"
        />
        <div class="container">
          <div class="sec-title text-center w-100">
            <div class="sec-title-inner d-inline-block">
              <i class="thm-clr flaticon-rub-el-hizb"></i>
              <h2 class="mb-0">Maqolalar</h2>
              <p class="mb-0">
                So'nggi yuklangan maqolalar shu yerda yoritib boriladi. Ko'proq
                maqolalarni o'qish uchun
                <router-link to="/Blog">Maqolalar</router-link> sahifasiga
                o'ting
              </p>
            </div>
          </div>
          <div class="event-wrap res-row w-100">
            <div class="row">
              <div class="col-md-6 col-sm-6 col-lg-4" v-for="item of articles" :key="item.id">
                <div class="event-box w-100">
                  <div
                    class="event-img overflow-hidden position-relative w-100"
                  >
                    <router-link to="/Blog"
                      ><img
                        class="img-fluid w-100"
                        :src="item.src"
                        alt="Maqolalar 1"
                    /></router-link>
                  </div>
                  <div
                    class="event-info pat-bg gray-layer opc85 position-relative back-blend-multiply gray-bg w-100"
                    style="background-image: url(/images/pattern-bg.jpg)"
                  >
                    <span class="event-loc d-block thm-clr"
                      ><i class="fas fa-book-open"></i>{{item.title}}</span
                    >
                    <h3 class="mb-0">
                      <router-link to="/Blog"
                        >{{item.description}}</router-link
                      >
                    </h3>
                    <span class="event-time d-block thm-clr"
                      >09:43 da joylangan</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Articles from "@/articles.json";
export default {
  data(){
    return{
      articles: Articles.articles
    }
  },
  name: "Articles",
};
</script>

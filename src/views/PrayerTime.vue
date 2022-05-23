<template>
  <div>
    <section>
      <div class="w-100 pt-80 black-layer pb-70 opc65 position-relative">
        <div
          class="fixed-bg"
          style="background-image: url(/images/page-title-bg.jpg)"
        ></div>
        <div class="container">
          <div class="page-title-wrap text-center w-100">
            <div class="page-title-inner d-inline-block">
              <h1 class="mb-0">Namoz vaqtlari</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item">
                  <router-link to="/" title="Home">Bosh sahifa</router-link>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="w-100 position-relative">
        <div class="time-course-wrap w-100">
          <div class="row mrg">
            <div class="col-md-12 col-sm-12 col-lg-6">
              <div
                class="time-wrap d-flex flex-wrap align-items-center justify-content-end thm-layer opc95 position-relative w-100"
              >
                <div
                  class="fixed-bg"
                  style="background-image: url(/images/time-bg.jpg)"
                ></div>
                <div class="time-inner w-100">
                  <div class="sec-title w-100">
                    <div class="sec-title-inner d-inline-block">
                      <h2 class="mb-0">
                        Kech bo'lmasdan oldin Allohga qayting
                      </h2>
                      <p class="mb-0">
                        Islomiy:, 9 Shavvol 1441 hijriy - dushanba, 1-iyun,
                        2020-yil
                      </p>
                    </div>
                  </div>
                  <div class="time-list-wrap d-flex flex-wrap w-100">
                    <ul class="time-list mb-0 list-unstyled">
                      <li>
                        <div
                          class="time-box d-flex flex-wrap align-items-center justify-content-between"
                        >
                          <span
                            ><i class="flaticon-rub-el-hizb"></i>Bomdod</span
                          >
                          <span>04:06</span>
                        </div>
                      </li>
                      <li>
                        <div
                          class="time-box d-flex flex-wrap align-items-center justify-content-between"
                        >
                          <span
                            ><i class="flaticon-rub-el-hizb"></i>Quyosh</span
                          >
                          <span>05:30 </span>
                        </div>
                      </li>
                      <li>
                        <div
                          class="time-box d-flex flex-wrap align-items-center justify-content-between"
                        >
                          <span
                            ><i class="flaticon-rub-el-hizb"></i>Peshin</span
                          >
                          <span>12:23 </span>
                        </div>
                      </li>
                    </ul>
                    <ul class="time-list mb-0 list-unstyled">
                      <li>
                        <div
                          class="time-box d-flex flex-wrap align-items-center justify-content-between"
                        >
                          <span><i class="flaticon-rub-el-hizb"></i>Asr</span>
                          <span>15:43</span>
                        </div>
                      </li>
                      <li>
                        <div
                          class="time-box d-flex flex-wrap align-items-center justify-content-between"
                        >
                          <span><i class="flaticon-rub-el-hizb"></i>Shom</span>
                          <span>19:10</span>
                        </div>
                      </li>
                      <li>
                        <div
                          class="time-box d-flex flex-wrap align-items-center justify-content-between"
                        >
                          <span
                            ><i class="flaticon-rub-el-hizb"></i>Xufton</span
                          >
                          <span>20:35</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-sm-12 col-lg-6">
              <div
                class="course-wrap d-flex flex-wrap align-items-center black-layer opc7 position-relative w-100"
              >
                <div
                  class="fixed-bg"
                  style="background-image: url(/images/course-bg.jpg)"
                ></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PrayerTime",
  components: {},
};
</script>

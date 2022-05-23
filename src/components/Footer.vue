<template>
  <div>
    <footer>
      <div class="w-100 pt-100 dark-layer pb-50 opc85 position-relative">
        <div
          class="fixed-bg patern-bg back-blend-multiply dark-bg"
          style="background-image: url(/images/pattern-bg.jpg)"
        ></div>
        <div class="container">
          <div class="footer-data w-100">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-lg-3">
                <div class="widget w-100">
                  <div class="logo">
                    <h1 class="mb-0">
                      <router-link to="/" title="Bosh sahifa"
                        ><img
                          class="img-fluid"
                          src="/images/Masjid 9.png"
                          alt="Logo"
                          srcset="/images/Masjid 9.png"
                      /></router-link>
                    </h1>
                  </div>
                  <p class="mb-0">
                    إِنَّ الصَّلاَةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَاباً
                    مَّوْقُوتاً
                    <br />
                    “Albatta, namoz mo‘minlarga vaqtida farz qilingandir” <br />
                    (Niso surasi, 103-oyat).
                  </p>
                </div>
              </div>
              <div class="col-md-12 col-sm-12 col-lg-9">
                <div class="row justify-content-between">
                  <div class="col-md-6 col-sm-6 col-lg-6">
                    <div class="row">
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="widget w-100">
                          <h4 class="widget-title">Sahifalar</h4>
                          <ul class="mb-0 list-unstyled w-100">
                            <li>
                              <router-link to="/Blog" title="Maqolalar"
                                >Maqolalar</router-link
                              >
                            </li>
                            <li>
                              <router-link
                                to="/FridayDetail"
                                title="Juma Maruzalari"
                                >Juma Maruzalari</router-link
                              >
                            </li>
                            <li>
                              <router-link
                                to="/AudioListening"
                                title="Qur'on tinglang"
                                >Qur'on tinglang</router-link
                              >
                            </li>
                            <li>
                              <router-link to="/Hadislar" title="Kun hadisi"
                                >Kun hadisi</router-link
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="widget w-100">
                          <h4 class="widget-title">Kontaktlar</h4>
                          <ul class="cont-info-list2 mb-0 list-unstyled w-100">
                            <li>
                              <i class="thm-clr">P:</i
                              ><a href="tel:+998994260401">+998 99 426 04 01</a>
                            </li>
                            <li>
                              <i class="thm-clr">E:</i
                              ><a href="mailto:surxonvakilligi@mail.ru"
                                >surxonvakilligi@mail.ru</a
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-5 col-sm-6 col-lg-5">
                    <h4 class="widget-title">Boshqa ma'lumotlar</h4>
                    <div class="row">
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="widget w-100">
                          <ul class="mb-0 list-unstyled w-100">
                            <li>
                              <router-link to="/About" title=""
                                >Masjid haqida</router-link
                              >
                            </li>
                            <li>
                              <router-link to="/PrayerTime" title="Namoz vaqti"
                                >Namoz vaqtlari</router-link
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="widget w-100">
                          <ul class="mb-0 list-unstyled w-100">
                            <li>
                              <router-link to="/Contact" title=""
                                >Bog'lanish</router-link
                              >
                            </li>
                            <li>
                              <router-link to="/Gallery" title=""
                                >Galareya</router-link
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

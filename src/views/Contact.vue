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
              <h1 class="mb-0">Kontaktlar</h1>
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
      <div class="w-100 pt-90 thm-layer opc6 position-relative">
        <div
          class="fixed-bg patern-bg back-blend-multiply thm-bg"
          style="background-image: url(/images/pattern-bg.jpg)"
        ></div>
        <div class="container">
          <div class="cont-info-wrap res-row overlap-115 w-100">
            <div class="row">
              <div class="col-md-6 col-sm-6 col-lg-4">
                <div class="cont-info-box-wrap w-100">
                  <div
                    class="cont-info-box text-center position-relative w-100 pat-bg white-layer opc8 back-blend-multiply bg-white"
                    style="background-image: url(/images/pattern-bg.jpg)"
                  >
                    <span class="bg-color1"><i class="flaticon-call"></i></span>
                    <h4 class="mb-0">Telefon raqamlari</h4>
                    <p class="mb-0">+998 99 426 04 01</p>
                    <p class="mb-0">+998 99 426 04 01</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-6 col-lg-4">
                <div class="cont-info-box-wrap w-100">
                  <div
                    class="cont-info-box text-center position-relative w-100 pat-bg white-layer opc8 back-blend-multiply bg-white"
                    style="background-image: url(/images/pattern-bg.jpg)"
                  >
                    <span class="bg-color1"><i class="flaticon-mail"></i></span>
                    <h4 class="mb-0">Elektron Pochta manzili</h4>
                    <p class="mb-0">
                      <a href="javascript:void(0);" title=""
                        ><span
                          class="__cf_email__"
                          data-cfemail="c3b6b0a6b1ada2aea683a7acaea2aaadada2aea6eda0acae"
                          >[email&#160;protected]</span
                        ></a
                      >
                    </p>
                    <p class="mb-0">
                      <a href="javascript:void(0);" title=""
                        ><span
                          class="__cf_email__"
                          data-cfemail="365950505f555358575b537652595b575f5858575b531855595b"
                          >[email&#160;protected]</span
                        ></a
                      >
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-6 col-lg-4">
                <div class="cont-info-box-wrap w-100">
                  <div
                    class="cont-info-box text-center position-relative w-100 pat-bg white-layer opc8 back-blend-multiply bg-white"
                    style="background-image: url(/images/pattern-bg.jpg)"
                  >
                    <span class="bg-color1"
                      ><i class="fas fa-map-marker-alt"></i
                    ></span>
                    <h4 class="mb-0">Joylashuvi</h4>
                    <p class="mb-0">Surxandaryo viloyati Termiz shaxri</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="w-100 pb-250 position-relative">
        <img
          class="sec-botm-rgt-mckp img-fluid position-absolute"
          src="/images/sec-botm-mckp.png"
          alt="Sec Bottom Mockup"
        />
        <div id="contact-map" class="contact-map w-100"></div>
        <div class="container">
          <div class="contact-wrap mt-100 w-100">
            <div class="row">
              <div class="col-md-6 col-sm-12 col-lg-6">
                <div class="cont-info-desc w-100">
                  <h3 class="mb-0">Bizga qanday taklif va talablaringiz bor</h3>
                  <p class="mb-0">
                    Biz har qanday talab va takliflarga ochiqmiz istalgan vaqt
                    murojaat qilishingiz mumkin.
                  </p>
                  <h6 class="mb-0">
                    Bizni ijtimoiy tarmoqlarda kuzatib boring
                  </h6>
                  <div class="social-links2 v2 text-center d-inline-flex">
                    <a
                      class="facebook"
                      href="../../index.htm"
                      title="Facebook"
                      target="_blank"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                    <a
                      class="twitter"
                      href="https://telegram.com/"
                      title="Telegram"
                      target="_blank"
                      ><i class="fab fa-telegram"></i
                    ></a>
                    <a
                      class="google"
                      href="https://youtube.com/"
                      title="Youtube"
                      target="_blank"
                      ><i class="fab fa-youtube"></i
                    ></a>
                    <a
                      class="instagram"
                      href="https://www.vk.com/"
                      title="Instagram"
                      target="_blank"
                      ><i class="fab fa-instagram"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-12 col-lg-6">
                <form class="cont-form w-100">
                  <input type="text" placeholder="O'zingiz haqida" />
                  <input type="email" placeholder="Elektron pochtasi" />
                  <input type="tel" placeholder="Telefon raqami" />
                  <textarea placeholder="Xabar yozish"></textarea>
                  <button class="thm-btn thm-bg" type="submit">
                    Xabarni yuborish<span></span><span></span><span></span
                    ><span></span>
                  </button>
                </form>
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
  name: "Contact",
  components: {},
};
</script>

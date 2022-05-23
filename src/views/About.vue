<template>
    <div>
        <section>
                <div class="w-100 pt-80 black-layer pb-90 opc65 position-relative" >
                    <div class="fixed-bg" style="background-image: url(/images/page-title-bg.jpg);">
                    </div>
                    <div class="container">
                        <div class="page-title-wrap text-center w-100">
                            <div class="page-title-inner d-inline-block">
                                <h1 class="mb-0">Biz haqimizda</h1>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <section>
            <div class="w-100 pt-120 pb-100 position-relative">
                <div class="container">
                    <div class="about-wrap4 w-100">
                        <div class="row align-items-center">
                            <div class="col-md-12 col-sm-12 col-lg-7 order-lg-1">
                                <div class="about-video position-relative w-100">
                                    <video style="height: 400px; width: 100% !important; object-fit: cover;" preload="" autoplay="" muted="" playsinline="" loop="">
                                        <source src="/images/Termiziy maasjidi.mp4" type="video/mp4">
                                    </video>
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-12 col-lg-5">
                                <div class="about-inner4 w-100">
                                    <h2 class="mb-0">Masjidimiz haqida</h2>
                                    <p class="mb-0">Surxondaryo viloyatida masjidlar soni yana bittaga ko‘paydi. Bugun 24-may muborak Juma kuni Termiz shahrida Islom olamidagi ulug‘ alloma Hakim Termiziy nomidagi yangi qurilgan masjidning ochilish marosimi bo‘ldi. Bu haqda O‘zbekiston musulmonlari idorasi xabar berdi.

                                    </p>
                                    <p class="mb-0">2018-yilda O‘zbekiston Prezidenti Surxondaryo viloyatiga qilgan safari chog‘ida buyuk alloma Hakim Termiziy majmuasiga yaqin joyda jome masjidi qurilishi bo‘yicha bir qator topshiriq bergan edi.

                                        Ana shu tashabbusning ijrosi sifatida bugun bu joyda 3000 dan ortiq sig‘imga ega bo‘lgan muhtasham jome masjid bunyod bo‘ldi. Mazkur masjid Termiz shahrining darvozasi, ya’ni shaharga kirish yo‘lida barpo etildi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="w-100 pb-110 position-relative">
                <div class="container">
                    <div class="sec-title text-center w-100">
                        <div class="sec-title-inner d-inline-block">
                            <i class="thm-clr flaticon-rub-el-hizb"></i>
                            <h2 class="mb-0">Masjidimiz ko'rinishi</h2>
                            <p class="mb-0">Dunyodagi eng yaxshi barokali uy yoki makon bu Allohning uyi bo'lsa kerak</p>
                        </div>
                    </div>
                    <div class="serv-wrap wide-sec">
                        <div class="row mrg10 serv-caro justify-center">
                            <div class="col-md-4 col-sm-6 col-lg-3 " v-for="item of about" :key="item.id">
                                <div class="serv-box text-center pat-bg gray-layer opc85 position-relative back-blend-multiply gray-bg w-100"
                                    style="background-image: url(/images/pattern-bg.jpg);">
                                    <img src="https://xabar.uz/static/crop/3/5/736_736_95_3540221406.jpg" style="width: auto; height: 242px; border-radius: 10px; margin-bottom: 10px; " alt="mosque in">
                                    <h3 class="mb-0">{{item.title}}</h3>
                                    <p class="mb-0">{{ item.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <PillarsIslam />
    </div>
</template>

<script>
import PillarsIslam from "@/components/PillarsIslam";
import About from "@/about.json"

export default {
    name: "About",
    data(){
        return{
           about: About.about
        }
    },
    components: {
        PillarsIslam,
    },
}
</script>
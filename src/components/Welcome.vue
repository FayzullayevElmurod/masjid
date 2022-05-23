<template>
    <div>
        <section>
            <div class="w-100 pt-90 gray-layer opc85 position-relative">
                <div class="fixed-bg patern-bg back-blend-multiply gray-bg"
                    style="background-image: url(/images/pattern-bg.jpg);"></div>
            </div>
        </section>
        <section>
            <div class="w-100 pt-220 pb-80 position-relative">
                <img class="img-fluid sec-top-mckp position-absolute" src="/images/sec-top-mckp.png"
                    alt="Sec Top Mockup">
                <div class="container">
                    <div class="about-wrap text-center position-relative w-100">
                        <div class="about-inner d-inline-block">
                            <img class="img-fluid" src="/images/bism-img1.png" alt="Bismillah Image">
                            <h2 class="mb-0">Islom Uyiga Xush Kelibsiz</h2>
                            <p class="mb-0">Bu nafaqat namoz uchun masjid, balki hamma uchun jamoat markazidir. Markaz
                                islomiy oʻziga xoslikni saqlash, barkamol musulmon jamiyatini barpo etish va
                                qoʻllab-quvvatlash, Qurʼoni Karim va Muhammad Sollallohu Alayhi Vasallam Paygʻambarimiz
                                sunnatlariga asoslangan keng qamrovli islomiy hayot tarzini targʻib qilish tarafdori.
                            </p>
                            <router-link class="thm-btn thm-bg" to="/about" title="">Ko'proq
                                o'qish<span></span><span></span><span></span><span></span></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "Welcome"
}
</script>
<template>
  <div>
    <header class="stick style1 w-100">
        <div class="topbar bg-color1 d-flex flex-wrap justify-content-center w-100">
            <ul class="topbar-info-list mb-0 list-unstyled d-inline-flex">
                <li><i class="thm-clr flaticon-sun"></i>Quyosh chiqishi: <span class="thm-clr">07:25</span></li>
                <li><i class="thm-clr flaticon-moon"></i>Quyosh botishi: <span class="thm-clr">16:58</span></li>
            </ul>
            <div class="social-links d-inline-flex">
                <a href="https://t.me/Hakimtermiziy" title="Telegram" target="_blank"><i class="fab fa-telegram"></i></a>
                <a href="https://facebook.com" title="Facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.youtube.com/channel/UCLm424cYLRmiOOUVpFfAthA" title="Youtube" target="_blank"><i class="fab fa-youtube"></i></a>
                <a href="https://www.instagram.com/hakim_termiziy.uz/" title="Instagram" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
        <div class="logo-menu-wrap d-flex flex-wrap justify-content-between w-100">
            <div class="logo position-relative thm-layer opc7 back-blend-multiply thm-bg"
                style="background-image: url(/images/pattern-bg.jpg);">
                <h1 class="mb-0"><router-link to="/" title="Bosh sahifa"><img class="img-fluid"
                            src="/images/Masjid 7.png" alt="Logo" srcset="/images/Masjid 7.png"></router-link>
                </h1>
            </div>
            <nav class="d-flex flex-wrap align-items-center justify-content-center">
                <div class="header-left">
                    <ul class="mb-0 list-unstyled d-inline-flex">
                        <li class="cate-list">
                            <router-link to="/" title="Bosh sahifa">Bosh sahifa</router-link>
                        </li>
                        <li class="menu-item-has-children"><a href="javascript:void(0);" title="">Ma'qolalar</a>
                            <ul class="mb-0 list-unstyled">
                                <li><router-link to="/FridayDetail" title="Juma Maruzalari">Juma Maruzalari</router-link></li>
                                <li><router-link to="/Blog" title="Maqolalar">Maqolalar</router-link></li>
                                <li><router-link to="/BlogDetail" title="Boshqa maqolalar">Boshqa maqolalar</router-link></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children"><a href="javascript:void(0);" title="">Sahifalar</a>
                            <ul class="mb-0 list-unstyled">
                                <li class="menu-item-has-children"><a href="javascript:void(0);" title="">Namoz
                                        vaqtlari</a>
                                    <ul class="mb-0 list-unstyled">
                                        <li><router-link to="/PrayerTime" title="Namoz vaqti">Namoz vaqti</router-link></li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children"><a href="javascript:void(0);"
                                        title="">Hadislar</a>
                                    <ul class="mb-0 list-unstyled">
                                        <li><router-link to="/Hadislar" title="Kun hadisi">Kun hadisi</router-link></li>
                                        <li><router-link to="/HadisDetail" title="Hadislar to'plami">Hadislar to'plami</router-link></li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children"><a href="javascript:void(0);"
                                        title="">Galareya</a>
                                    <ul class="mb-0 list-unstyled">
                                        <li><router-link to="/Gallery" title="Juma suratlari">Juma suratlari</router-link></li>
                                        <li><router-link to="/Gallery2" title="Bayram suratlari">Bayram suratlari</router-link></li>
                                        <li><router-link to="/Gallery3" title="Boshqa suratlari">Boshqa suratlari</router-link></li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children"><a href="javascript:void(0);" title="">Foydali
                                        manbalar</a>
                                    <ul class="mb-0 list-unstyled">
                                        <li><a href="https://islom.uz" title="Islom.uz">Islom.uz</a></li>
                                        <li><a href="https://muslim.uz" title="Muslim.uz">Muslim.uz</a></li>
                                    </ul>
                                </li>
                                <li><router-link to="/AudioListening" title="Qur'on tinglang">Qur'on tinglang</router-link></li>
                            </ul>
                        </li>
                        <li><router-link to="/About" title="">Biz haqimizda</router-link></li>
                        <li><router-link to="/Contact" title="">Kontaktlar</router-link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    <div class="sticky-menu">
        <div class="container">
            <div class="sticky-menu-inner d-flex flex-wrap align-items-center justify-content-between w-100">
                <div class="logo">
                    <h1 class="mb-0"><router-link to="/" title="Home"><img class="img-fluid"
                                src="/images/Masjid 8.png" alt="Logo" srcset="/images/Masjid 8.png"></router-link>
                    </h1>
                </div>
                <nav class="d-flex flex-wrap align-items-center justify-content-between">
                    <div class="header-left">
                        <ul class="mb-0 list-unstyled d-inline-flex">
                            <li class="cate-list">
                                <router-link to="/" title="Bosh sahifa">Bosh sahifa</router-link>
                            </li>
                            <li class="menu-item-has-children"><a href="javascript:void(0);" title="">Ma'qolalar</a>
                                <ul class="mb-0 list-unstyled">
                                    <li><router-link to="/FridayDetail" title="Juma Maruzalari">Juma Maruzalari</router-link></li>
                                    <li><router-link to="/Blog" title="Maqolalar">Maqolalar</router-link></li>
                                    <li><router-link to="/BlogDetail" title="Boshqa maqolalar">Boshqa maqolalar</router-link></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children"><a href="javascript:void(0);" title="">Sahifalar</a>
                                <ul class="mb-0 list-unstyled">
                                    <li class="menu-item-has-children"><a href="javascript:void(0);" title="">Namoz
                                            vaqtlari</a>
                                        <ul class="mb-0 list-unstyled">
                                            <li><router-link to="/PrayerTime" title="Namoz vaqti">Namoz vaqti</router-link></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children"><a href="javascript:void(0);"
                                            title="">Hadislar</a>
                                        <ul class="mb-0 list-unstyled">
                                            <li><router-link to="/Hadislar" title="Kun hadisi">Kun hadisi</router-link></li>
                                            <li><router-link to="/HadisDetail" title="Hadislar to'plami">Hadislar to'plami</router-link></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children"><a href="javascript:void(0);"
                                            title="">Galareya</a>
                                        <ul class="mb-0 list-unstyled">
                                            <li><router-link to="/Gallery" title="Juma suratlari">Juma suratlari</router-link></li>
                                        <li><router-link to="/Gallery2" title="Bayram suratlari">Bayram suratlari</router-link></li>
                                        <li><router-link to="/Gallery3" title="Boshqa suratlari">Boshqa suratlari</router-link></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children"><a href="javascript:void(0);"
                                            title="">Foydali manbalar</a>
                                        <ul class="mb-0 list-unstyled">
                                            <li><a href="https://islom.uz" title="Islom.uz">Islom.uz</a></li>
                                            <li><a href="https://muslim.uz" title="Muslim.uz">Muslim.uz</a></li>
                                        </ul>
                                    </li>
                                    <li><router-link to="/AudioListening" title="Qur'on tinglang">Qur'on tinglang</router-link></li>
                                </ul>
                            </li>
                            <li><router-link to="/About" title="">Biz haqimizda</router-link></li>
                            <li><router-link to="/Contact" title="">Kontaktlar</router-link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    <div class="rspn-hdr">
        <div class="rspn-mdbr">
            <div class="rspn-scil">
                
            <div class="social-links d-inline-flex">
                <a href="https://t.me/Hakimtermiziy" title="Telegram" target="_blank"><i class="fab fa-telegram"></i></a>
                <a href="https://facebook.com" title="Facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://youtube.com" title="Youtube" target="_blank"><i class="fab fa-youtube"></i></a>
                <a href="https://instagram.com" title="Instagram" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>
            </div>
        </div>
        <div class="lg-mn">
            <div class="logo"><router-link to="/" title="Bosh sahifa"><img src="/images/Masjid 8.png"
                        alt="Logo"></router-link>
            </div>
            <div class="rspn-cnt">
                <span><i class="thm-clr far fa-envelope"></i><a href="javascript:void(0);" title=""></a></span>
                <span><i class="thm-clr fas fa-phone-alt"></i></span>
            </div>
            <span class="rspn-mnu-btn"><i class="fa fa-list-ul"></i></span>
        </div>
        <div class="rsnp-mnu">
            <span class="rspn-mnu-cls"><i class="fa fa-times"></i></span>
            <ul class="mb-0 list-unstyled w-100">
                <li class="cate-list">
                    <router-link to="/" title="Bosh sahifa">Bosh sahifa</router-link>
                </li>
                <li class="menu-item-has-children"><a href="javascript:void(0);" title="">Ma'qolalar</a>
                    <ul class="mb-0 list-unstyled">
                        <li><router-link to="/FridayDetail" title="Juma Maruzalari">Juma Maruzalari</router-link></li>
                        <li><router-link to="/Blog" title="Maqolalar">Maqolalar</router-link></li>
                        <li><router-link to="/BlogDetail" title="Boshqa maqolalar">Boshqa maqolalar</router-link></li>
                    </ul>
                </li>
                <li class="menu-item-has-children"><a href="javascript:void(0);" title="">Sahifalar</a>
                    <ul class="mb-0 list-unstyled">
                        <li class="menu-item-has-children"><a href="javascript:void(0);" title="">Namoz
                                vaqtlari</a>
                            <ul class="mb-0 list-unstyled">
                                <li><router-link to="/PrayerTime" title="Namoz vaqti">Namoz vaqti</router-link></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children"><a href="javascript:void(0);" title="">Hadislar</a>
                            <ul class="mb-0 list-unstyled">
                                <li><router-link to="/Hadislar" title="Kun hadisi">Kun hadisi</router-link></li>
                                <li><router-link to="/HadisDetail" title="Hadislar to'plami">Hadislar to'plami</router-link></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children"><a href="javascript:void(0);" title="">Galareya</a>
                            <ul class="mb-0 list-unstyled">
                                <li><router-link to="/Gallery" title="Juma suratlari">Juma suratlari</router-link></li>
                                        <li><router-link to="/Gallery2" title="Bayram suratlari">Bayram suratlari</router-link></li>
                                        <li><router-link to="/Gallery3" title="Boshqa suratlari">Boshqa suratlari</router-link></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children"><a href="javascript:void(0);" title="">Foydali
                                manbalar</a>
                            <ul class="mb-0 list-unstyled">
                                <li><a href="https://islom.uz" title="Islom.uz">Islom.uz</a></li>
                                <li><a href="https://muslim.uz" title="Muslim.uz">Muslim.uz</a></li>
                            </ul>
                        </li>
                        <li><router-link to="/AudioListening" title="Qur'on tinglang">Qur'on tinglang</router-link></li>
                    </ul>
                </li>
                <li><router-link to="/About" title="">Biz haqimizda</router-link></li>
                <li><router-link to="/Contact" title="Kontaktlar">Kontaktlar</router-link></li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>
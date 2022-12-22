<template>
    <nav class="side-nav">
        <a href="" class="intro-x flex items-center pl-5 pt-4">
            <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/hamburger (1).png">
            <span class="hidden xl:block text-white text-lg ml-3"> ZoGo-Appli </span>
        </a>
        <div class="side-nav__devider my-6"></div>
        <ul>
            <li style="margin-bottom: 20px" class="li-show">
                <router-link to="/" class="side-menu side-menu--active li-white">
                    <div class="side-menu__icon"> <!--<i data-lucide="home"></i>-->
                         <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/maison.png"></div>
                    <div class="side-menu__title text-bold">
                        Dashboard
                        <!--<div class="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>-->
                    </div>
                </router-link>
            </li>
            <!--<li class="side-nav__devider my-6"></li>-->
            <li class="li-show">
                <a href="javascript:;" class="side-menu li-white">
                    <div class="side-menu__icon"> <!--<i data-lucide="box"></i>--> 
                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/gestion-de-projet.png"></div>
                    <div class="side-menu__title text-bold">
                       Gestions
                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </a>
                <ul class="side-menu__sub-open ul-hidden">
                    <li>
                        <router-link to="/Client1"  class="side-menu">
                           <!--<div class="side-menu__icon"> <i data-lucide="activity"></i></div>-->
                            <div class="side-menu__title">
                                    <div class="side-menu__icon"> 
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/client.png" /> </div>
                                    <div class="side-menu__title">Clients</div>
                                <!--<div class="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>-->
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Profile1"  class="side-menu">
                            <!--<div class="side-menu__icon"> <i data-lucide="activity"></i> </div>-->
                            <div class="side-menu__title">
                                    <div class="side-menu__icon"> 
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/livreur (2).png" /> </div>
                                    <div class="side-menu__title">Livreurs</div>
                                <!--<div class="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>-->
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Blog1"  class="side-menu">
                            <!--<div class="side-menu__icon"> <i data-lucide="activity"></i> </div>-->
                            <div class="side-menu__title">
                                    <div class="side-menu__icon"> 
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/vendeur (1).png" /> </div>
                                    <div class="side-menu__title">Vendeurs</div>
                                <!--<div class="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>-->
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Commerçiaux1"  class="side-menu">
                            <!--<div class="side-menu__icon"> <i data-lucide="activity"></i> </div>-->
                            <div class="side-menu__title">
                                    <div class="side-menu__icon"> 
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/commercant.png" /> </div>
                                    <div class="side-menu__title">Commerçiaux</div>
                                <!--<div class="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>-->
                            </div>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="side-nav__devider mt-2 mb-4"></li>
            <li class="li-show">
                <a href="javascript:;" class="side-menu li-white">
                    <div class="side-menu__icon"> <!--<i data-lucide="box"></i>--> 
                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/report.png"></div>
                    <div class="side-menu__title text-bold">
                       Rapports
                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </a>
                <ul class="side-menu__sub-open ul-hidden">
                    <li>
                        <router-link to="/Livreurs1"  class="side-menu">
                           <!-- <div class="side-menu__icon"> <i data-lucide="activity"></i></div>-->
                            <div class="side-menu__title">
                                    <div class="side-menu__icon"> 
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/rapport/livreur (3).png" /> </div>
                                    <div class="side-menu__title">Livraisons</div>
                                <!--<div class="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>-->
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Profile2"  class="side-menu">
                            <!--<div class="side-menu__icon"> <i data-lucide="activity"></i> </div>-->
                            <div class="side-menu__title">
                                    <div class="side-menu__icon"> 
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/rapport/livraison-gratuite (3).png" /> </div>
                                    <div class="side-menu__title">Livreurs</div>
                                <!--<div class="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>-->
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Tab1"  class="side-menu">
                            <!--<div class="side-menu__icon"> <i data-lucide="activity"></i> </div>-->
                            <div class="side-menu__title">
                                    <div class="side-menu__icon"> 
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/transaction (1).png" /> </div>
                                    <div class="side-menu__title">Transactions</div>
                                <!--<div class="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>-->
                            </div>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="side-nav__devider mt-2 mb-4"></li>
            <li class="li-show">
                <a href="javascript:;" class="side-menu li-white">
                    <div class="side-menu__icon"> <!--<i data-lucide="box"></i>--> 
                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/outils-de-reparation.png"></div>
                    <div class="side-menu__title text-bold">
                       Paramètres
                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </a>
                <ul class="side-menu__sub-open ul-hidden">
                    <li>
                        <router-link to="/Table1"  class="side-menu">
                           <!-- <div class="side-menu__icon"> <i data-lucide="activity"></i></div>-->
                            <div class="side-menu__title">
                                    <div class="side-menu__icon"> 
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/user-interface.png" /> </div>
                                    <div class="side-menu__title">Utilisateurs</div>
                                <!--<div class="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>-->
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Tarif1"  class="side-menu">
                            <!--<div class="side-menu__icon"> <i data-lucide="activity"></i> </div>-->
                            <div class="side-menu__title">
                                    <div class="side-menu__icon"> 
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/tarification (1).png" /> </div>
                                    <div class="side-menu__title">Tarifs</div>
                                <!--<div class="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>-->
                            </div>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="side-nav__devider mt-2 mb-4"></li>
            <li>
                <router-link to="/Manager1" class="side-menu li-white">
                    <div class="side-menu__icon"> <!--<i data-lucide="hard-drive"></i>-->
                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/report.png" /> </div>
                    <div class="side-menu__title"> File Manager </div>
                </router-link>
            </li>
            <li>
                <router-link to="/Sale1" class="side-menu li-white">
                    <div class="side-menu__icon"> <!--<i data-lucide="credit-card"></i>--> 
                    <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/rapport-annuel.png"/></div>
                    <div class="side-menu__title"> Point of Sale </div>
                </router-link>
            </li>
            <li>
                <router-link to="/Chat1" class="side-menu li-white">
                    <div class="side-menu__icon"> <!--<i data-lucide="message-square"></i>-->
                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/hamburger (1).png"/> </div>
                    <div class="side-menu__title"> Chat </div>
                </router-link>
            </li>
            <li>
                <router-link to="/Post1" class="side-menu li-white">
                    <div class="side-menu__icon"> <!--<i data-lucide="file-text"></i>--> </div>
                    <div class="side-menu__title"> Post </div>
                </router-link>
            </li>
            <li>
                <router-link to="/Calender1" class="side-menu li-white">
                    <div class="side-menu__icon"> <!--<i data-lucide="calendar"></i>--> </div>
                    <div class="side-menu__title"> Calendar </div>
                </router-link>
            </li>
            <li class="side-nav__devider my-3"></li>
            <li class="li-show">
                <a href="javascript:;" class="side-menu li-white">
                    <div class="side-menu__icon"> <!--<i data-lucide="edit"></i>--> </div>
                    <div class="side-menu__title">
                        Crud
                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </a>
                <ul class="side-menu__sub-open ul-hidden">
                    <li>
                        <router-link to="/Data1" class="side-menu">
                            <!--<div class="side-menu__icon"> <i data-lucide="activity"></i> </div>-->
                            <div class="side-menu__title">
                                    <div class="side-menu__icon">
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/house (4).png" /> </div>
                                    <div class="side-menu__title"> Data List </div>
                                <!--<div class="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>-->
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Form1" class="side-menu">
                            <!--<div class="side-menu__icon"> <i data-lucide="activity"></i> </div>-->
                            <div class="side-menu__title">
                                    <div class="side-menu__icon"> 
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/house (4).png" /> </div>
                                    <div class="side-menu__title"> Form </div>
                                <!--<div class="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>-->
                            </div>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="side-nav__devider my-3"></li>
            <li class="li-show">
                <a href="javascript:;" class="side-menu li-white">
                    <div class="side-menu__icon"> <!--<i data-lucide="users"></i>--> </div>
                    <div class="side-menu__title">
                        Users
                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </a>
                <ul class="side-menu__sub-open ul-hidden">
                    <li>
                        <router-link to="/Users1" class="side-menu">
                            <!--<div class="side-menu__icon"> <i data-lucide="activity"></i> </div>-->
                            <div class="side-menu__title">
                                    <div class="side-menu__icon">
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/house (4).png"> </div>
                                    <div class="side-menu__title"> Layout 1 </div>
                                <!--<div class="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>-->
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Users2" class="side-menu">
                            <!--<div class="side-menu__icon"> <i data-lucide="activity"></i> </div>-->
                            <div class="side-menu__title">
                                    <div class="side-menu__icon"> 
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/house (4).png" /> </div>
                                    <div class="side-menu__title"> Layout 2 </div>
                                <!--<div class="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>-->
                            </div>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="side-nav__devider my-3"></li>
            <li class="li-show">
                <a href="javascript:;" class="side-menu li-white">
                    <div class="side-menu__icon"> <!--<i data-lucide="trello"></i>--> </div>
                    <div class="side-menu__title">
                        Profile
                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </a>
                <ul class="side-menu__sub-open ul-hidden">
                    <li>
                        <router-link to="/Profile1"  class="side-menu">
                            <!--<div class="side-menu__icon"> <i data-lucide="activity"></i> </div>-->
                            <div class="side-menu__title">
                                    <div class="side-menu__icon"> 
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/house (4).png" /> </div>
                                    <div class="side-menu__title"> Overview 1 </div>
                                <!--<div class="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>-->
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Profile2"  class="side-menu">
                            <!--<div class="side-menu__icon"> <i data-lucide="activity"></i> </div>-->
                            <div class="side-menu__title">
                                    <div class="side-menu__icon"> 
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/house (4).png" /> </div>
                                    <div class="side-menu__title"> Overview 2 </div>
                                <!--<div class="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>-->
                            </div>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="side-nav__devider my-3"></li>
            <li>
                <router-link to="/RegularTable" class="side-menu li-white">
                    <div class="side-menu__icon"> <!--<i data-lucide="activity"></i>--> </div>
                    <div class="side-menu__title">
                        Table
                        <!--<div class="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>-->
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/Tabulator" class="side-menu li-white">
                    <div class="side-menu__icon"> <!--<i data-lucide="activity"></i>--> </div>
                    <div class="side-menu__title">
                        Tabulator
                        <!--<div class="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>-->
                    </div>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'Sidebar'
    }
    // side-menu cible
    // side-menu--active ajouter
</script>

<style>
    @import '../../assets/base.css';
</style>
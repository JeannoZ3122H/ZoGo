<template>
    <nav class="side-nav">
        <a href="" class="intro-x flex items-center pl-5 pt-4">
            <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/hamburger (1).png">
            <span class="hidden xl:block text-white text-lg ml-3"> ZoGo-Appli </span>
        </a>
        <div class="side-nav__devider my-6"></div>
        <ul>
            <li style="margin-bottom: 10px" class="li-show">
                <router-link to="/" v-on:click="Click" class="side-menu  li-white">
                    <div class="side-menu__icon"> <!--<i data-lucide="home"></i>-->
                         <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/maison.png"></div>
                    <div class="side-menu__title text-bold">
                        Dashboard
                        <div class="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </router-link>
                <ul class="side-menu__sub-open ul-hidden">
                    <li>
                        <router-link to="/" v-on:click="Click" class="side-menu">
                            <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div class="side-menu__title">
                                    <div class="side-menu__icon"> 
                                    <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/house (4).png"> </div>
                                    <div class="side-menu__title"> Overview 1 </div>
                                <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </router-link>
                    </li>
                </ul><!---->
            </li>
            <!--<li class="side-nav__devider my-6"></li>-->
            <li class="li-show">
                <a href="javascript:;" class="side-menu side-menu--active li-white">
                    <div class="side-menu__icon"> <!--<i data-lucide="box"></i>--> <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/Avatar.png"></div>
                    <div class="side-menu__title">
                       Others Pages
                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </a>
                <ul class="side-menu__sub-open ul-hidden">
                    <li>
                        <router-link to="/" v-on:click="Click" class="side-menu">
                            <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div class="side-menu__title">
                                    <div class="side-menu__icon"> 
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/house (4).png" /> </div>
                                    <div class="side-menu__title">Simple Menu</div>
                                <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/" v-on:click="Click" class="side-menu">
                            <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div class="side-menu__title">
                                    <div class="side-menu__icon"> 
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/house (4).png" /> </div>
                                    <div class="side-menu__title">Top Menu</div>
                                <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="side-nav__devider my-3"></li>
            <li>
                <router-link to="/FileManager" v-on:click="Click" class="side-menu li-white">
                    <div class="side-menu__icon"> <i data-lucide="hard-drive"></i> </div>
                    <div class="side-menu__title"> File Manager </div>
                </router-link>
            </li>
            <li>
                <router-link to="/PointSale" v-on:click="Click" class="side-menu li-white">
                    <div class="side-menu__icon"> <i data-lucide="credit-card"></i> </div>
                    <div class="side-menu__title"> Point of Sale </div>
                </router-link>
            </li>
            <li>
                <router-link to="/Chat" v-on:click="Click" class="side-menu li-white">
                    <div class="side-menu__icon"> <i data-lucide="message-square"></i> </div>
                    <div class="side-menu__title"> Chat </div>
                </router-link>
            </li>
            <li>
                <router-link to="/Post" v-on:click="Click" class="side-menu li-white">
                    <div class="side-menu__icon"> <i data-lucide="file-text"></i> </div>
                    <div class="side-menu__title"> Post </div>
                </router-link>
            </li>
            <li>
                <router-link to="/Calender" v-on:click="Click" class="side-menu li-white">
                    <div class="side-menu__icon"> <i data-lucide="calendar"></i> </div>
                    <div class="side-menu__title"> Calendar </div>
                </router-link>
            </li>
            <li class="side-nav__devider my-3"></li>
            <li class="li-show">
                <a href="javascript:;" class="side-menu li-white">
                    <div class="side-menu__icon"> <i data-lucide="edit"></i> </div>
                    <div class="side-menu__title">
                        Crud
                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </a>
                <ul class="side-menu__sub-open ul-hidden">
                    <li>
                        <router-link to="/Data" v-on:click="Click" class="side-menu">
                            <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div class="side-menu__title">
                                    <div class="side-menu__icon">
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/house (4).png" /> </div>
                                    <div class="side-menu__title"> Data List </div>
                                <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Form" v-on:click="Click" class="side-menu">
                            <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div class="side-menu__title">
                                    <div class="side-menu__icon"> 
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/house (4).png" /> </div>
                                    <div class="side-menu__title"> Form </div>
                                <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="side-nav__devider my-3"></li>
            <li class="li-show">
                <a href="javascript:;" class="side-menu li-white">
                    <div class="side-menu__icon"> <i data-lucide="users"></i> </div>
                    <div class="side-menu__title">
                        Users
                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </a>
                <ul class="side-menu__sub-open ul-hidden">
                    <li>
                        <router-link to="/SideUsers1" v-on:click="Click" class="side-menu">
                            <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div class="side-menu__title">
                                    <div class="side-menu__icon">
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/house (4).png"> </div>
                                    <div class="side-menu__title"> Layout 1 </div>
                                <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/SideUsers2" v-on:click="Click" class="side-menu">
                            <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div class="side-menu__title">
                                    <div class="side-menu__icon"> 
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/house (4).png" /> </div>
                                    <div class="side-menu__title"> Layout 2 </div>
                                <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="side-nav__devider my-3"></li>
            <li class="li-show">
                <a href="javascript:;" class="side-menu li-white">
                    <div class="side-menu__icon"> <i data-lucide="trello"></i> </div>
                    <div class="side-menu__title">
                        Profile
                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </a>
                <ul class="side-menu__sub-open ul-hidden">
                    <li>
                        <router-link to="/Profile1" v-on:click="Click" class="side-menu">
                            <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div class="side-menu__title">
                                    <div class="side-menu__icon"> 
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/house (4).png" /> </div>
                                    <div class="side-menu__title"> Overview 1 </div>
                                <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Profile2" v-on:click="Click" class="side-menu">
                            <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div class="side-menu__title">
                                    <div class="side-menu__icon"> 
                                        <img alt="Midone - HTML Admin Template" class="w-6" src="../../assets/images/house (4).png" /> </div>
                                    <div class="side-menu__title"> Overview 2 </div>
                                <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="side-nav__devider my-3"></li>
            <li>
                <router-link to="/RegularTable" v-on:click="Click" class="side-menu li-white">
                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                    <div class="side-menu__title">
                        Table
                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/Tabulator" v-on:click="Click" class="side-menu li-white">
                    <div class="side-menu__icon"> <i data-lucide="activity"></i> </div>
                    <div class="side-menu__title">
                        Tabulator
                        <div class="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
    export default {
        name: 'Sidebar',
        methods: {
        }
    }
    // side-menu cible
    // side-menu--active ajouter
</script>

<style>
    @import '../../assets/base.css'
</style>
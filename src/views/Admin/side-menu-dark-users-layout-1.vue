<template>
    <Mobile/>
    <div class="flex">
        <Sidebar/>
        <!-- BEGIN: Content -->
        <div class="content">
            <!-- BEGIN: Top Bar -->
            <Navbar />
            <!-- END: Top Bar -->
            <h2 class="intro-y text-lg font-medium mt-10">
                Users Layout
            </h2>
            <div class="grid grid-cols-12 gap-6 mt-5">
                <div class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                    <button class="btn btn-primary shadow-md mr-2">Add New User</button>
                    <div class="dropdown">
                        <button class="dropdown-toggle btn px-2 box" aria-expanded="false" data-tw-toggle="dropdown">
                            <span class="w-5 h-5 flex items-center justify-center"> <i class="w-4 h-4" data-lucide="plus"></i> </span>
                        </button>
                        <div class="dropdown-menu w-40">
                            <ul class="dropdown-content">
                                <li>
                                    <a href="" class="dropdown-item"> <i data-lucide="users" class="w-4 h-4 mr-2"></i> Add Group </a>
                                </li>
                                <li>
                                    <a href="" class="dropdown-item"> <i data-lucide="message-circle" class="w-4 h-4 mr-2"></i> Send Message </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="hidden md:block mx-auto text-slate-500">Showing 1 to 10 of 150 entries</div>
                    <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                        <div class="w-56 relative text-slate-500">
                            <input type="text" class="form-control w-56 box pr-10" placeholder="Search...">
                            <i class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" data-lucide="search"></i> 
                        </div>
                    </div>
                </div>
                <!-- BEGIN: Users Layout -->
                <div class="intro-y col-span-12 md:col-span-6">
                    <div class="box">
                        <div class="flex flex-col lg:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                            <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
                                <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-6.jpg">
                            </div>
                            <div class="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                                <a href="" class="font-medium">Robert De Niro</a> 
                                <div class="text-slate-500 text-xs mt-0.5">Frontend Engineer</div>
                            </div>
                            <div class="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Facebook"> <i class="w-3 h-3 fill-current" data-lucide="facebook"></i> </a>
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Twitter"> <i class="w-3 h-3 fill-current" data-lucide="twitter"></i> </a>
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Linked In"> <i class="w-3 h-3 fill-current" data-lucide="linkedin"></i> </a>
                            </div>
                        </div>
                        <div class="flex flex-wrap lg:flex-nowrap items-center justify-center p-5">
                            <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
                                <div class="flex text-slate-500 text-xs">
                                    <div class="mr-auto">Progress</div>
                                    <div>20%</div>
                                </div>
                                <div class="progress h-1 mt-2">
                                    <div class="progress-bar w-1/4 bg-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <button class="btn btn-primary py-1 px-2 mr-2">Message</button>
                            <button class="btn btn-outline-secondary py-1 px-2">Profile</button>
                        </div>
                    </div>
                </div>
                <div class="intro-y col-span-12 md:col-span-6">
                    <div class="box">
                        <div class="flex flex-col lg:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                            <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
                                <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-6.jpg">
                            </div>
                            <div class="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                                <a href="" class="font-medium">Tom Hanks</a> 
                                <div class="text-slate-500 text-xs mt-0.5">Software Engineer</div>
                            </div>
                            <div class="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Facebook"> <i class="w-3 h-3 fill-current" data-lucide="facebook"></i> </a>
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Twitter"> <i class="w-3 h-3 fill-current" data-lucide="twitter"></i> </a>
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Linked In"> <i class="w-3 h-3 fill-current" data-lucide="linkedin"></i> </a>
                            </div>
                        </div>
                        <div class="flex flex-wrap lg:flex-nowrap items-center justify-center p-5">
                            <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
                                <div class="flex text-slate-500 text-xs">
                                    <div class="mr-auto">Progress</div>
                                    <div>20%</div>
                                </div>
                                <div class="progress h-1 mt-2">
                                    <div class="progress-bar w-1/4 bg-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <button class="btn btn-primary py-1 px-2 mr-2">Message</button>
                            <button class="btn btn-outline-secondary py-1 px-2">Profile</button>
                        </div>
                    </div>
                </div>
                <div class="intro-y col-span-12 md:col-span-6">
                    <div class="box">
                        <div class="flex flex-col lg:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                            <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
                                <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-14.jpg">
                            </div>
                            <div class="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                                <a href="" class="font-medium">Robert De Niro</a> 
                                <div class="text-slate-500 text-xs mt-0.5">Frontend Engineer</div>
                            </div>
                            <div class="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Facebook"> <i class="w-3 h-3 fill-current" data-lucide="facebook"></i> </a>
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Twitter"> <i class="w-3 h-3 fill-current" data-lucide="twitter"></i> </a>
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Linked In"> <i class="w-3 h-3 fill-current" data-lucide="linkedin"></i> </a>
                            </div>
                        </div>
                        <div class="flex flex-wrap lg:flex-nowrap items-center justify-center p-5">
                            <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
                                <div class="flex text-slate-500 text-xs">
                                    <div class="mr-auto">Progress</div>
                                    <div>20%</div>
                                </div>
                                <div class="progress h-1 mt-2">
                                    <div class="progress-bar w-1/4 bg-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <button class="btn btn-primary py-1 px-2 mr-2">Message</button>
                            <button class="btn btn-outline-secondary py-1 px-2">Profile</button>
                        </div>
                    </div>
                </div>
                <div class="intro-y col-span-12 md:col-span-6">
                    <div class="box">
                        <div class="flex flex-col lg:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                            <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
                                <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-7.jpg">
                            </div>
                            <div class="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                                <a href="" class="font-medium">Brad Pitt</a> 
                                <div class="text-slate-500 text-xs mt-0.5">DevOps Engineer</div>
                            </div>
                            <div class="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Facebook"> <i class="w-3 h-3 fill-current" data-lucide="facebook"></i> </a>
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Twitter"> <i class="w-3 h-3 fill-current" data-lucide="twitter"></i> </a>
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Linked In"> <i class="w-3 h-3 fill-current" data-lucide="linkedin"></i> </a>
                            </div>
                        </div>
                        <div class="flex flex-wrap lg:flex-nowrap items-center justify-center p-5">
                            <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
                                <div class="flex text-slate-500 text-xs">
                                    <div class="mr-auto">Progress</div>
                                    <div>20%</div>
                                </div>
                                <div class="progress h-1 mt-2">
                                    <div class="progress-bar w-1/4 bg-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <button class="btn btn-primary py-1 px-2 mr-2">Message</button>
                            <button class="btn btn-outline-secondary py-1 px-2">Profile</button>
                        </div>
                    </div>
                </div>
                <div class="intro-y col-span-12 md:col-span-6">
                    <div class="box">
                        <div class="flex flex-col lg:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                            <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
                                <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-2.jpg">
                            </div>
                            <div class="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                                <a href="" class="font-medium">Tom Cruise</a> 
                                <div class="text-slate-500 text-xs mt-0.5">DevOps Engineer</div>
                            </div>
                            <div class="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Facebook"> <i class="w-3 h-3 fill-current" data-lucide="facebook"></i> </a>
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Twitter"> <i class="w-3 h-3 fill-current" data-lucide="twitter"></i> </a>
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Linked In"> <i class="w-3 h-3 fill-current" data-lucide="linkedin"></i> </a>
                            </div>
                        </div>
                        <div class="flex flex-wrap lg:flex-nowrap items-center justify-center p-5">
                            <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
                                <div class="flex text-slate-500 text-xs">
                                    <div class="mr-auto">Progress</div>
                                    <div>20%</div>
                                </div>
                                <div class="progress h-1 mt-2">
                                    <div class="progress-bar w-1/4 bg-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <button class="btn btn-primary py-1 px-2 mr-2">Message</button>
                            <button class="btn btn-outline-secondary py-1 px-2">Profile</button>
                        </div>
                    </div>
                </div>
                <div class="intro-y col-span-12 md:col-span-6">
                    <div class="box">
                        <div class="flex flex-col lg:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                            <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
                                <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-10.jpg">
                            </div>
                            <div class="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                                <a href="" class="font-medium">Angelina Jolie</a> 
                                <div class="text-slate-500 text-xs mt-0.5">Software Engineer</div>
                            </div>
                            <div class="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Facebook"> <i class="w-3 h-3 fill-current" data-lucide="facebook"></i> </a>
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Twitter"> <i class="w-3 h-3 fill-current" data-lucide="twitter"></i> </a>
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Linked In"> <i class="w-3 h-3 fill-current" data-lucide="linkedin"></i> </a>
                            </div>
                        </div>
                        <div class="flex flex-wrap lg:flex-nowrap items-center justify-center p-5">
                            <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
                                <div class="flex text-slate-500 text-xs">
                                    <div class="mr-auto">Progress</div>
                                    <div>20%</div>
                                </div>
                                <div class="progress h-1 mt-2">
                                    <div class="progress-bar w-1/4 bg-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <button class="btn btn-primary py-1 px-2 mr-2">Message</button>
                            <button class="btn btn-outline-secondary py-1 px-2">Profile</button>
                        </div>
                    </div>
                </div>
                <div class="intro-y col-span-12 md:col-span-6">
                    <div class="box">
                        <div class="flex flex-col lg:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                            <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
                                <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-7.jpg">
                            </div>
                            <div class="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                                <a href="" class="font-medium">Robert De Niro</a> 
                                <div class="text-slate-500 text-xs mt-0.5">Backend Engineer</div>
                            </div>
                            <div class="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Facebook"> <i class="w-3 h-3 fill-current" data-lucide="facebook"></i> </a>
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Twitter"> <i class="w-3 h-3 fill-current" data-lucide="twitter"></i> </a>
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Linked In"> <i class="w-3 h-3 fill-current" data-lucide="linkedin"></i> </a>
                            </div>
                        </div>
                        <div class="flex flex-wrap lg:flex-nowrap items-center justify-center p-5">
                            <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
                                <div class="flex text-slate-500 text-xs">
                                    <div class="mr-auto">Progress</div>
                                    <div>20%</div>
                                </div>
                                <div class="progress h-1 mt-2">
                                    <div class="progress-bar w-1/4 bg-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <button class="btn btn-primary py-1 px-2 mr-2">Message</button>
                            <button class="btn btn-outline-secondary py-1 px-2">Profile</button>
                        </div>
                    </div>
                </div>
                <div class="intro-y col-span-12 md:col-span-6">
                    <div class="box">
                        <div class="flex flex-col lg:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                            <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
                                <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-12.jpg">
                            </div>
                            <div class="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                                <a href="" class="font-medium">Leonardo DiCaprio</a> 
                                <div class="text-slate-500 text-xs mt-0.5">Software Engineer</div>
                            </div>
                            <div class="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Facebook"> <i class="w-3 h-3 fill-current" data-lucide="facebook"></i> </a>
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Twitter"> <i class="w-3 h-3 fill-current" data-lucide="twitter"></i> </a>
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Linked In"> <i class="w-3 h-3 fill-current" data-lucide="linkedin"></i> </a>
                            </div>
                        </div>
                        <div class="flex flex-wrap lg:flex-nowrap items-center justify-center p-5">
                            <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
                                <div class="flex text-slate-500 text-xs">
                                    <div class="mr-auto">Progress</div>
                                    <div>20%</div>
                                </div>
                                <div class="progress h-1 mt-2">
                                    <div class="progress-bar w-1/4 bg-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <button class="btn btn-primary py-1 px-2 mr-2">Message</button>
                            <button class="btn btn-outline-secondary py-1 px-2">Profile</button>
                        </div>
                    </div>
                </div>
                <div class="intro-y col-span-12 md:col-span-6">
                    <div class="box">
                        <div class="flex flex-col lg:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                            <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
                                <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-13.jpg">
                            </div>
                            <div class="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                                <a href="" class="font-medium">Bruce Willis</a> 
                                <div class="text-slate-500 text-xs mt-0.5">Software Engineer</div>
                            </div>
                            <div class="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Facebook"> <i class="w-3 h-3 fill-current" data-lucide="facebook"></i> </a>
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Twitter"> <i class="w-3 h-3 fill-current" data-lucide="twitter"></i> </a>
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Linked In"> <i class="w-3 h-3 fill-current" data-lucide="linkedin"></i> </a>
                            </div>
                        </div>
                        <div class="flex flex-wrap lg:flex-nowrap items-center justify-center p-5">
                            <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
                                <div class="flex text-slate-500 text-xs">
                                    <div class="mr-auto">Progress</div>
                                    <div>20%</div>
                                </div>
                                <div class="progress h-1 mt-2">
                                    <div class="progress-bar w-1/4 bg-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <button class="btn btn-primary py-1 px-2 mr-2">Message</button>
                            <button class="btn btn-outline-secondary py-1 px-2">Profile</button>
                        </div>
                    </div>
                </div>
                <div class="intro-y col-span-12 md:col-span-6">
                    <div class="box">
                        <div class="flex flex-col lg:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                            <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
                                <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-6.jpg">
                            </div>
                            <div class="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                                <a href="" class="font-medium">Leonardo DiCaprio</a> 
                                <div class="text-slate-500 text-xs mt-0.5">Software Engineer</div>
                            </div>
                            <div class="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Facebook"> <i class="w-3 h-3 fill-current" data-lucide="facebook"></i> </a>
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Twitter"> <i class="w-3 h-3 fill-current" data-lucide="twitter"></i> </a>
                                <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Linked In"> <i class="w-3 h-3 fill-current" data-lucide="linkedin"></i> </a>
                            </div>
                        </div>
                        <div class="flex flex-wrap lg:flex-nowrap items-center justify-center p-5">
                            <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
                                <div class="flex text-slate-500 text-xs">
                                    <div class="mr-auto">Progress</div>
                                    <div>20%</div>
                                </div>
                                <div class="progress h-1 mt-2">
                                    <div class="progress-bar w-1/4 bg-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <button class="btn btn-primary py-1 px-2 mr-2">Message</button>
                            <button class="btn btn-outline-secondary py-1 px-2">Profile</button>
                        </div>
                    </div>
                </div>
                <!-- END: Users Layout -->
                <!-- BEGIN: Pagination -->
                <div class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
                    <nav class="w-full sm:w-auto sm:mr-auto">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevrons-left"></i> </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevron-left"></i> </a>
                            </li>
                            <li class="page-item"> <a class="page-link" href="#">...</a> </li>
                            <li class="page-item"> <a class="page-link" href="#">1</a> </li>
                            <li class="page-item active"> <a class="page-link" href="#">2</a> </li>
                            <li class="page-item"> <a class="page-link" href="#">3</a> </li>
                            <li class="page-item"> <a class="page-link" href="#">...</a> </li>
                            <li class="page-item">
                                <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevron-right"></i> </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevrons-right"></i> </a>
                            </li>
                        </ul>
                    </nav>
                    <select class="w-20 form-select box mt-3 sm:mt-0">
                        <option>10</option>
                        <option>25</option>
                        <option>35</option>
                        <option>50</option>
                    </select>
                </div>
                <!-- END: Pagination -->
            </div>
        </div>
        <!-- END: Content -->
    </div>
    <Dark_bar />
</template>
<script>
import Mobile from "../../components/Mobile_Menu/Mobile.vue"
import Sidebar from "../../components/Sidebar_Admin/Sidebar.vue"
import Navbar from "../../components/Navbar/Navbar.vue"
import Dark_bar from "../../components/Dark_bar/Dark_bar.vue"
export default {
    name: 'Users_Layoute1',
    components: {
        Mobile,
        Sidebar,
        Navbar,
        Dark_bar,
    },
}
</script>
<style>
</style>
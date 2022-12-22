<template>
    <Mobile/>
    <div class="flex">
        <!-- BEGIN: Side Menu -->
        <Sidebar/>
        <!-- END: Side Menu -->
        <!-- BEGIN: Content -->
        <div class="content">
            <!-- BEGIN: Top Bar -->
            <Navbar/>
            <!-- END: Top Bar -->
            <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
                <h2 class="text-lg font-medium mr-auto">
                    Blog Layout
                </h2>
                <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
                    <button class="btn btn-primary shadow-md mr-2">Add New Post</button>
                    <div class="dropdown ml-auto sm:ml-0">
                        <button class="dropdown-toggle btn px-2 box" aria-expanded="false" data-tw-toggle="dropdown">
                            <span class="w-5 h-5 flex items-center justify-center"> <i class="w-4 h-4" data-lucide="plus"></i> </span>
                        </button>
                        <div class="dropdown-menu w-40">
                            <ul class="dropdown-content">
                                <li>
                                    <a href="" class="dropdown-item"> <i data-lucide="share-2" class="w-4 h-4 mr-2"></i> Share Post </a>
                                </li>
                                <li>
                                    <a href="" class="dropdown-item"> <i data-lucide="download" class="w-4 h-4 mr-2"></i> Download Post </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="intro-y grid grid-cols-12 gap-6 mt-5">
                <!-- BEGIN: Blog Layout -->
                <div class="intro-y col-span-12 md:col-span-6 xl:col-span-4 box">
                    <div class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 px-5 py-4">
                        <div class="w-10 h-10 flex-none image-fit">
                            <img alt="Midone - HTML Admin Template" class="rounded-full" src="../../assets/images/food-beverage-1.jpg"/>
                        </div>
                        <div class="ml-3 mr-auto">
                            <a href="" class="font-medium">Robert De Niro</a> 
                            <div class="flex text-slate-500 truncate text-xs mt-0.5"> <a class="text-primary inline-block truncate" href="">Photography</a> <span class="mx-1">•</span> 54 seconds ago </div>
                        </div>
                        <div class="dropdown ml-3">
                            <a href="javascript:;" class="dropdown-toggle w-5 h-5 text-slate-500" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="more-vertical" class="w-4 h-4"></i> </a>
                            <div class="dropdown-menu w-40">
                                <ul class="dropdown-content">
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="edit-2" class="w-4 h-4 mr-2"></i> Edit Post </a>
                                    </li>
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="trash" class="w-4 h-4 mr-2"></i> Delete Post </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="p-5">
                        <div class="h-40 2xl:h-56 image-fit">
                            <img alt="Midone - HTML Admin Template" class="rounded-md" src="../../assets/images/food-beverage-1.jpg"/>
                        </div>
                        <a href="" class="block font-medium text-base mt-5">Dummy text of the printing and typesetting industry</a> 
                        <div class="text-slate-600 dark:text-slate-500 mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                    </div>
                    <div class="flex items-center px-5 py-3 border-t border-slate-200/60 dark:border-darkmode-400">
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 dark:border-darkmode-400 dark:bg-darkmode-300 dark:text-slate-300 text-slate-500 mr-2 tooltip" title="Bookmark"> <i data-lucide="bookmark" class="w-3 h-3"></i> </a>
                        <div class="intro-x flex mr-2">
                            <div class="intro-x w-8 h-8 image-fit">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Robert De Niro">
                            </div>
                            <div class="intro-x w-8 h-8 image-fit -ml-4">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Morgan Freeman">
                            </div>
                            <div class="intro-x w-8 h-8 image-fit -ml-4">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Charlize Theron">
                            </div>
                        </div>
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full text-primary bg-primary/10 dark:bg-darkmode-300 dark:text-slate-300 ml-auto tooltip" title="Share"> <i data-lucide="share-2" class="w-3 h-3"></i> </a>
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white ml-2 tooltip" title="Download PDF"> <i data-lucide="share" class="w-3 h-3"></i> </a>
                    </div>
                    <div class="px-5 pt-3 pb-5 border-t border-slate-200/60 dark:border-darkmode-400">
                        <div class="w-full flex text-slate-500 text-xs sm:text-sm">
                            <div class="mr-2"> Comments: <span class="font-medium">35</span> </div>
                            <div class="mr-2"> Views: <span class="font-medium">142k</span> </div>
                            <div class="ml-auto"> Likes: <span class="font-medium">63k</span> </div>
                        </div>
                        <div class="w-full flex items-center mt-3">
                            <div class="w-8 h-8 flex-none image-fit mr-3">
                                <img alt="Midone - HTML Admin Template" class="rounded-full" src="../../assets/images/food-beverage-1.jpg"/>
                            </div>
                            <div class="flex-1 relative text-slate-600">
                                <input type="text" class="form-control form-control-rounded border-transparent bg-slate-100 pr-10" placeholder="Post a comment...">
                                <i data-lucide="smile" class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"></i> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="intro-y col-span-12 md:col-span-6 xl:col-span-4 box">
                    <div class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 px-5 py-4">
                        <div class="w-10 h-10 flex-none image-fit">
                            <img alt="Midone - HTML Admin Template" class="rounded-full" src="../../assets/images/food-beverage-1.jpg"/>
                        </div>
                        <div class="ml-3 mr-auto">
                            <a href="" class="font-medium">Arnold Schwarzenegger</a> 
                            <div class="flex text-slate-500 truncate text-xs mt-0.5"> <a class="text-primary inline-block truncate" href="">Smartphone &amp; Tablet</a> <span class="mx-1">•</span> 60 minutes ago </div>
                        </div>
                        <div class="dropdown ml-3">
                            <a href="javascript:;" class="dropdown-toggle w-5 h-5 text-slate-500" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="more-vertical" class="w-4 h-4"></i> </a>
                            <div class="dropdown-menu w-40">
                                <ul class="dropdown-content">
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="edit-2" class="w-4 h-4 mr-2"></i> Edit Post </a>
                                    </li>
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="trash" class="w-4 h-4 mr-2"></i> Delete Post </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="p-5">
                        <div class="h-40 2xl:h-56 image-fit">
                            <img alt="Midone - HTML Admin Template" class="rounded-md" src="../../assets/images/food-beverage-1.jpg"/>
                        </div>
                        <a href="" class="block font-medium text-base mt-5">Dummy text of the printing and typesetting industry</a> 
                        <div class="text-slate-600 dark:text-slate-500 mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                    </div>
                    <div class="flex items-center px-5 py-3 border-t border-slate-200/60 dark:border-darkmode-400">
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 dark:border-darkmode-400 dark:bg-darkmode-300 dark:text-slate-300 text-slate-500 mr-2 tooltip" title="Bookmark"> <i data-lucide="bookmark" class="w-3 h-3"></i> </a>
                        <div class="intro-x flex mr-2">
                            <div class="intro-x w-8 h-8 image-fit">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Arnold Schwarzenegger">
                            </div>
                            <div class="intro-x w-8 h-8 image-fit -ml-4">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Kate Winslet">
                            </div>
                            <div class="intro-x w-8 h-8 image-fit -ml-4">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Catherine Zeta-Jones">
                            </div>
                        </div>
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full text-primary bg-primary/10 dark:bg-darkmode-300 dark:text-slate-300 ml-auto tooltip" title="Share"> <i data-lucide="share-2" class="w-3 h-3"></i> </a>
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white ml-2 tooltip" title="Download PDF"> <i data-lucide="share" class="w-3 h-3"></i> </a>
                    </div>
                    <div class="px-5 pt-3 pb-5 border-t border-slate-200/60 dark:border-darkmode-400">
                        <div class="w-full flex text-slate-500 text-xs sm:text-sm">
                            <div class="mr-2"> Comments: <span class="font-medium">26</span> </div>
                            <div class="mr-2"> Views: <span class="font-medium">28k</span> </div>
                            <div class="ml-auto"> Likes: <span class="font-medium">99k</span> </div>
                        </div>
                        <div class="w-full flex items-center mt-3">
                            <div class="w-8 h-8 flex-none image-fit mr-3">
                                <img alt="Midone - HTML Admin Template" class="rounded-full" src="../../assets/images/food-beverage-1.jpg"/>
                            </div>
                            <div class="flex-1 relative text-slate-600">
                                <input type="text" class="form-control form-control-rounded border-transparent bg-slate-100 pr-10" placeholder="Post a comment...">
                                <i data-lucide="smile" class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"></i> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="intro-y col-span-12 md:col-span-6 xl:col-span-4 box">
                    <div class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 px-5 py-4">
                        <div class="w-10 h-10 flex-none image-fit">
                            <img alt="Midone - HTML Admin Template" class="rounded-full" src="../../assets/images/food-beverage-1.jpg"/>
                        </div>
                        <div class="ml-3 mr-auto">
                            <a href="" class="font-medium">Al Pacino</a> 
                            <div class="flex text-slate-500 truncate text-xs mt-0.5"> <a class="text-primary inline-block truncate" href="">Sport &amp; Outdoor</a> <span class="mx-1">•</span> 21 minutes ago </div>
                        </div>
                        <div class="dropdown ml-3">
                            <a href="javascript:;" class="dropdown-toggle w-5 h-5 text-slate-500" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="more-vertical" class="w-4 h-4"></i> </a>
                            <div class="dropdown-menu w-40">
                                <ul class="dropdown-content">
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="edit-2" class="w-4 h-4 mr-2"></i> Edit Post </a>
                                    </li>
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="trash" class="w-4 h-4 mr-2"></i> Delete Post </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="p-5">
                        <div class="h-40 2xl:h-56 image-fit">
                            <img alt="Midone - HTML Admin Template" class="rounded-md" src="../../assets/images/food-beverage-1.jpg"/>
                        </div>
                        <a href="" class="block font-medium text-base mt-5">Dummy text of the printing and typesetting industry</a> 
                        <div class="text-slate-600 dark:text-slate-500 mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                    </div>
                    <div class="flex items-center px-5 py-3 border-t border-slate-200/60 dark:border-darkmode-400">
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 dark:border-darkmode-400 dark:bg-darkmode-300 dark:text-slate-300 text-slate-500 mr-2 tooltip" title="Bookmark"> <i data-lucide="bookmark" class="w-3 h-3"></i> </a>
                        <div class="intro-x flex mr-2">
                            <div class="intro-x w-8 h-8 image-fit">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Al Pacino">
                            </div>
                            <div class="intro-x w-8 h-8 image-fit -ml-4">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Edward Norton">
                            </div>
                            <div class="intro-x w-8 h-8 image-fit -ml-4">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Keira Knightley">
                            </div>
                        </div>
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full text-primary bg-primary/10 dark:bg-darkmode-300 dark:text-slate-300 ml-auto tooltip" title="Share"> <i data-lucide="share-2" class="w-3 h-3"></i> </a>
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white ml-2 tooltip" title="Download PDF"> <i data-lucide="share" class="w-3 h-3"></i> </a>
                    </div>
                    <div class="px-5 pt-3 pb-5 border-t border-slate-200/60 dark:border-darkmode-400">
                        <div class="w-full flex text-slate-500 text-xs sm:text-sm">
                            <div class="mr-2"> Comments: <span class="font-medium">37</span> </div>
                            <div class="mr-2"> Views: <span class="font-medium">166k</span> </div>
                            <div class="ml-auto"> Likes: <span class="font-medium">75k</span> </div>
                        </div>
                        <div class="w-full flex items-center mt-3">
                            <div class="w-8 h-8 flex-none image-fit mr-3">
                                <img alt="Midone - HTML Admin Template" class="rounded-full" src="../../assets/images/food-beverage-1.jpg"/>
                            </div>
                            <div class="flex-1 relative text-slate-600">
                                <input type="text" class="form-control form-control-rounded border-transparent bg-slate-100 pr-10" placeholder="Post a comment...">
                                <i data-lucide="smile" class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"></i> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="intro-y col-span-12 md:col-span-6 xl:col-span-4 box">
                    <div class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 px-5 py-4">
                        <div class="w-10 h-10 flex-none image-fit">
                            <img alt="Midone - HTML Admin Template" class="rounded-full" src="../../assets/images/food-beverage-1.jpg"/>
                        </div>
                        <div class="ml-3 mr-auto">
                            <a href="" class="font-medium">Al Pacino</a> 
                            <div class="flex text-slate-500 truncate text-xs mt-0.5"> <a class="text-primary inline-block truncate" href="">Photography</a> <span class="mx-1">•</span> 33 seconds ago </div>
                        </div>
                        <div class="dropdown ml-3">
                            <a href="javascript:;" class="dropdown-toggle w-5 h-5 text-slate-500" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="more-vertical" class="w-4 h-4"></i> </a>
                            <div class="dropdown-menu w-40">
                                <ul class="dropdown-content">
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="edit-2" class="w-4 h-4 mr-2"></i> Edit Post </a>
                                    </li>
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="trash" class="w-4 h-4 mr-2"></i> Delete Post </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="p-5">
                        <div class="h-40 2xl:h-56 image-fit">
                            <img alt="Midone - HTML Admin Template" class="rounded-md" src="../../assets/images/food-beverage-1.jpg"/>
                        </div>
                        <a href="" class="block font-medium text-base mt-5">200 Latin words, combined with a handful of model sentences</a> 
                        <div class="text-slate-600 dark:text-slate-500 mt-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                    </div>
                    <div class="flex items-center px-5 py-3 border-t border-slate-200/60 dark:border-darkmode-400">
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 dark:border-darkmode-400 dark:bg-darkmode-300 dark:text-slate-300 text-slate-500 mr-2 tooltip" title="Bookmark"> <i data-lucide="bookmark" class="w-3 h-3"></i> </a>
                        <div class="intro-x flex mr-2">
                            <div class="intro-x w-8 h-8 image-fit">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Al Pacino">
                            </div>
                            <div class="intro-x w-8 h-8 image-fit -ml-4">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Kate Winslet">
                            </div>
                            <div class="intro-x w-8 h-8 image-fit -ml-4">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Charlize Theron">
                            </div>
                        </div>
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full text-primary bg-primary/10 dark:bg-darkmode-300 dark:text-slate-300 ml-auto tooltip" title="Share"> <i data-lucide="share-2" class="w-3 h-3"></i> </a>
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white ml-2 tooltip" title="Download PDF"> <i data-lucide="share" class="w-3 h-3"></i> </a>
                    </div>
                    <div class="px-5 pt-3 pb-5 border-t border-slate-200/60 dark:border-darkmode-400">
                        <div class="w-full flex text-slate-500 text-xs sm:text-sm">
                            <div class="mr-2"> Comments: <span class="font-medium">50</span> </div>
                            <div class="mr-2"> Views: <span class="font-medium">107k</span> </div>
                            <div class="ml-auto"> Likes: <span class="font-medium">30k</span> </div>
                        </div>
                        <div class="w-full flex items-center mt-3">
                            <div class="w-8 h-8 flex-none image-fit mr-3">
                                <img alt="Midone - HTML Admin Template" class="rounded-full" src="../../assets/images/food-beverage-1.jpg"/>
                            </div>
                            <div class="flex-1 relative text-slate-600">
                                <input type="text" class="form-control form-control-rounded border-transparent bg-slate-100 pr-10" placeholder="Post a comment...">
                                <i data-lucide="smile" class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"></i> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="intro-y col-span-12 md:col-span-6 xl:col-span-4 box">
                    <div class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 px-5 py-4">
                        <div class="w-10 h-10 flex-none image-fit">
                            <img alt="Midone - HTML Admin Template" class="rounded-full" src="../../assets/images/food-beverage-1.jpg"/>
                        </div>
                        <div class="ml-3 mr-auto">
                            <a href="" class="font-medium">Al Pacino</a> 
                            <div class="flex text-slate-500 truncate text-xs mt-0.5"> <a class="text-primary inline-block truncate" href="">Smartphone &amp; Tablet</a> <span class="mx-1">•</span> 20 seconds ago </div>
                        </div>
                        <div class="dropdown ml-3">
                            <a href="javascript:;" class="dropdown-toggle w-5 h-5 text-slate-500" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="more-vertical" class="w-4 h-4"></i> </a>
                            <div class="dropdown-menu w-40">
                                <ul class="dropdown-content">
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="edit-2" class="w-4 h-4 mr-2"></i> Edit Post </a>
                                    </li>
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="trash" class="w-4 h-4 mr-2"></i> Delete Post </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="p-5">
                        <div class="h-40 2xl:h-56 image-fit">
                            <img alt="Midone - HTML Admin Template" class="rounded-md" src="../../assets/images/food-beverage-1.jpg"/>
                        </div>
                        <a href="" class="block font-medium text-base mt-5">Desktop publishing software like Aldus PageMaker</a> 
                        <div class="text-slate-600 dark:text-slate-500 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
                    </div>
                    <div class="flex items-center px-5 py-3 border-t border-slate-200/60 dark:border-darkmode-400">
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 dark:border-darkmode-400 dark:bg-darkmode-300 dark:text-slate-300 text-slate-500 mr-2 tooltip" title="Bookmark"> <i data-lucide="bookmark" class="w-3 h-3"></i> </a>
                        <div class="intro-x flex mr-2">
                            <div class="intro-x w-8 h-8 image-fit">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Al Pacino">
                            </div>
                            <div class="intro-x w-8 h-8 image-fit -ml-4">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Charlize Theron">
                            </div>
                            <div class="intro-x w-8 h-8 image-fit -ml-4">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Sean Connery">
                            </div>
                        </div>
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full text-primary bg-primary/10 dark:bg-darkmode-300 dark:text-slate-300 ml-auto tooltip" title="Share"> <i data-lucide="share-2" class="w-3 h-3"></i> </a>
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white ml-2 tooltip" title="Download PDF"> <i data-lucide="share" class="w-3 h-3"></i> </a>
                    </div>
                    <div class="px-5 pt-3 pb-5 border-t border-slate-200/60 dark:border-darkmode-400">
                        <div class="w-full flex text-slate-500 text-xs sm:text-sm">
                            <div class="mr-2"> Comments: <span class="font-medium">21</span> </div>
                            <div class="mr-2"> Views: <span class="font-medium">67k</span> </div>
                            <div class="ml-auto"> Likes: <span class="font-medium">40k</span> </div>
                        </div>
                        <div class="w-full flex items-center mt-3">
                            <div class="w-8 h-8 flex-none image-fit mr-3">
                                <img alt="Midone - HTML Admin Template" class="rounded-full" src="../../assets/images/food-beverage-1.jpg"/>
                            </div>
                            <div class="flex-1 relative text-slate-600">
                                <input type="text" class="form-control form-control-rounded border-transparent bg-slate-100 pr-10" placeholder="Post a comment...">
                                <i data-lucide="smile" class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"></i> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="intro-y col-span-12 md:col-span-6 xl:col-span-4 box">
                    <div class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 px-5 py-4">
                        <div class="w-10 h-10 flex-none image-fit">
                            <img alt="Midone - HTML Admin Template" class="rounded-full" src="../../assets/images/food-beverage-1.jpg"/>
                        </div>
                        <div class="ml-3 mr-auto">
                            <a href="" class="font-medium">Robert De Niro</a> 
                            <div class="flex text-slate-500 truncate text-xs mt-0.5"> <a class="text-primary inline-block truncate" href="">PC &amp; Laptop</a> <span class="mx-1">•</span> 33 seconds ago </div>
                        </div>
                        <div class="dropdown ml-3">
                            <a href="javascript:;" class="dropdown-toggle w-5 h-5 text-slate-500" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="more-vertical" class="w-4 h-4"></i> </a>
                            <div class="dropdown-menu w-40">
                                <ul class="dropdown-content">
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="edit-2" class="w-4 h-4 mr-2"></i> Edit Post </a>
                                    </li>
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="trash" class="w-4 h-4 mr-2"></i> Delete Post </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="p-5">
                        <div class="h-40 2xl:h-56 image-fit">
                            <img alt="Midone - HTML Admin Template" class="rounded-md" src="../../assets/images/food-beverage-1.jpg"/>
                        </div>
                        <a href="" class="block font-medium text-base mt-5">200 Latin words, combined with a handful of model sentences</a> 
                        <div class="text-slate-600 dark:text-slate-500 mt-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                    </div>
                    <div class="flex items-center px-5 py-3 border-t border-slate-200/60 dark:border-darkmode-400">
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 dark:border-darkmode-400 dark:bg-darkmode-300 dark:text-slate-300 text-slate-500 mr-2 tooltip" title="Bookmark"> <i data-lucide="bookmark" class="w-3 h-3"></i> </a>
                        <div class="intro-x flex mr-2">
                            <div class="intro-x w-8 h-8 image-fit">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Robert De Niro">
                            </div>
                            <div class="intro-x w-8 h-8 image-fit -ml-4">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Leonardo DiCaprio">
                            </div>
                            <div class="intro-x w-8 h-8 image-fit -ml-4">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Sean Connery">
                            </div>
                        </div>
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full text-primary bg-primary/10 dark:bg-darkmode-300 dark:text-slate-300 ml-auto tooltip" title="Share"> <i data-lucide="share-2" class="w-3 h-3"></i> </a>
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white ml-2 tooltip" title="Download PDF"> <i data-lucide="share" class="w-3 h-3"></i> </a>
                    </div>
                    <div class="px-5 pt-3 pb-5 border-t border-slate-200/60 dark:border-darkmode-400">
                        <div class="w-full flex text-slate-500 text-xs sm:text-sm">
                            <div class="mr-2"> Comments: <span class="font-medium">97</span> </div>
                            <div class="mr-2"> Views: <span class="font-medium">105k</span> </div>
                            <div class="ml-auto"> Likes: <span class="font-medium">40k</span> </div>
                        </div>
                        <div class="w-full flex items-center mt-3">
                            <div class="w-8 h-8 flex-none image-fit mr-3">
                                <img alt="Midone - HTML Admin Template" class="rounded-full" src="../../assets/images/food-beverage-1.jpg"/>
                            </div>
                            <div class="flex-1 relative text-slate-600">
                                <input type="text" class="form-control form-control-rounded border-transparent bg-slate-100 pr-10" placeholder="Post a comment...">
                                <i data-lucide="smile" class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"></i> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="intro-y col-span-12 md:col-span-6 xl:col-span-4 box">
                    <div class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 px-5 py-4">
                        <div class="w-10 h-10 flex-none image-fit">
                            <img alt="Midone - HTML Admin Template" class="rounded-full" src="../../assets/images/food-beverage-1.jpg"/>
                        </div>
                        <div class="ml-3 mr-auto">
                            <a href="" class="font-medium">Tom Cruise</a> 
                            <div class="flex text-slate-500 truncate text-xs mt-0.5"> <a class="text-primary inline-block truncate" href="">Sport &amp; Outdoor</a> <span class="mx-1">•</span> 12 seconds ago </div>
                        </div>
                        <div class="dropdown ml-3">
                            <a href="javascript:;" class="dropdown-toggle w-5 h-5 text-slate-500" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="more-vertical" class="w-4 h-4"></i> </a>
                            <div class="dropdown-menu w-40">
                                <ul class="dropdown-content">
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="edit-2" class="w-4 h-4 mr-2"></i> Edit Post </a>
                                    </li>
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="trash" class="w-4 h-4 mr-2"></i> Delete Post </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="p-5">
                        <div class="h-40 2xl:h-56 image-fit">
                            <img alt="Midone - HTML Admin Template" class="rounded-md" src="../../assets/images/food-beverage-1.jpg"/>
                        </div>
                        <a href="" class="block font-medium text-base mt-5">200 Latin words, combined with a handful of model sentences</a> 
                        <div class="text-slate-600 dark:text-slate-500 mt-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                    </div>
                    <div class="flex items-center px-5 py-3 border-t border-slate-200/60 dark:border-darkmode-400">
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 dark:border-darkmode-400 dark:bg-darkmode-300 dark:text-slate-300 text-slate-500 mr-2 tooltip" title="Bookmark"> <i data-lucide="bookmark" class="w-3 h-3"></i> </a>
                        <div class="intro-x flex mr-2">
                            <div class="intro-x w-8 h-8 image-fit">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Tom Cruise">
                            </div>
                            <div class="intro-x w-8 h-8 image-fit -ml-4">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="John Travolta">
                            </div>
                            <div class="intro-x w-8 h-8 image-fit -ml-4">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Sean Connery">
                            </div>
                        </div>
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full text-primary bg-primary/10 dark:bg-darkmode-300 dark:text-slate-300 ml-auto tooltip" title="Share"> <i data-lucide="share-2" class="w-3 h-3"></i> </a>
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white ml-2 tooltip" title="Download PDF"> <i data-lucide="share" class="w-3 h-3"></i> </a>
                    </div>
                    <div class="px-5 pt-3 pb-5 border-t border-slate-200/60 dark:border-darkmode-400">
                        <div class="w-full flex text-slate-500 text-xs sm:text-sm">
                            <div class="mr-2"> Comments: <span class="font-medium">186</span> </div>
                            <div class="mr-2"> Views: <span class="font-medium">101k</span> </div>
                            <div class="ml-auto"> Likes: <span class="font-medium">43k</span> </div>
                        </div>
                        <div class="w-full flex items-center mt-3">
                            <div class="w-8 h-8 flex-none image-fit mr-3">
                                <img alt="Midone - HTML Admin Template" class="rounded-full" src="../../assets/images/food-beverage-1.jpg"/>
                            </div>
                            <div class="flex-1 relative text-slate-600">
                                <input type="text" class="form-control form-control-rounded border-transparent bg-slate-100 pr-10" placeholder="Post a comment...">
                                <i data-lucide="smile" class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"></i> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="intro-y col-span-12 md:col-span-6 xl:col-span-4 box">
                    <div class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 px-5 py-4">
                        <div class="w-10 h-10 flex-none image-fit">
                            <img alt="Midone - HTML Admin Template" class="rounded-full" src="../../assets/images/food-beverage-1.jpg"/>
                        </div>
                        <div class="ml-3 mr-auto">
                            <a href="" class="font-medium">Angelina Jolie</a> 
                            <div class="flex text-slate-500 truncate text-xs mt-0.5"> <a class="text-primary inline-block truncate" href="">Smartphone &amp; Tablet</a> <span class="mx-1">•</span> 42 seconds ago </div>
                        </div>
                        <div class="dropdown ml-3">
                            <a href="javascript:;" class="dropdown-toggle w-5 h-5 text-slate-500" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="more-vertical" class="w-4 h-4"></i> </a>
                            <div class="dropdown-menu w-40">
                                <ul class="dropdown-content">
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="edit-2" class="w-4 h-4 mr-2"></i> Edit Post </a>
                                    </li>
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="trash" class="w-4 h-4 mr-2"></i> Delete Post </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="p-5">
                        <div class="h-40 2xl:h-56 image-fit">
                            <img alt="Midone - HTML Admin Template" class="rounded-md" src="../../assets/images/food-beverage-1.jpg"/>
                        </div>
                        <a href="" class="block font-medium text-base mt-5">Popularised in the 1960s with the release of Letraset</a> 
                        <div class="text-slate-600 dark:text-slate-500 mt-2">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</div>
                    </div>
                    <div class="flex items-center px-5 py-3 border-t border-slate-200/60 dark:border-darkmode-400">
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 dark:border-darkmode-400 dark:bg-darkmode-300 dark:text-slate-300 text-slate-500 mr-2 tooltip" title="Bookmark"> <i data-lucide="bookmark" class="w-3 h-3"></i> </a>
                        <div class="intro-x flex mr-2">
                            <div class="intro-x w-8 h-8 image-fit">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Angelina Jolie">
                            </div>
                            <div class="intro-x w-8 h-8 image-fit -ml-4">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Edward Norton">
                            </div>
                            <div class="intro-x w-8 h-8 image-fit -ml-4">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Catherine Zeta-Jones">
                            </div>
                        </div>
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full text-primary bg-primary/10 dark:bg-darkmode-300 dark:text-slate-300 ml-auto tooltip" title="Share"> <i data-lucide="share-2" class="w-3 h-3"></i> </a>
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white ml-2 tooltip" title="Download PDF"> <i data-lucide="share" class="w-3 h-3"></i> </a>
                    </div>
                    <div class="px-5 pt-3 pb-5 border-t border-slate-200/60 dark:border-darkmode-400">
                        <div class="w-full flex text-slate-500 text-xs sm:text-sm">
                            <div class="mr-2"> Comments: <span class="font-medium">197</span> </div>
                            <div class="mr-2"> Views: <span class="font-medium">29k</span> </div>
                            <div class="ml-auto"> Likes: <span class="font-medium">95k</span> </div>
                        </div>
                        <div class="w-full flex items-center mt-3">
                            <div class="w-8 h-8 flex-none image-fit mr-3">
                                <img alt="Midone - HTML Admin Template" class="rounded-full" src="../../assets/images/food-beverage-1.jpg"/>
                            </div>
                            <div class="flex-1 relative text-slate-600">
                                <input type="text" class="form-control form-control-rounded border-transparent bg-slate-100 pr-10" placeholder="Post a comment...">
                                <i data-lucide="smile" class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"></i> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="intro-y col-span-12 md:col-span-6 xl:col-span-4 box">
                    <div class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 px-5 py-4">
                        <div class="w-10 h-10 flex-none image-fit">
                            <img alt="Midone - HTML Admin Template" class="rounded-full" src="../../assets/images/food-beverage-1.jpg"/>
                        </div>
                        <div class="ml-3 mr-auto">
                            <a href="" class="font-medium">Al Pacino</a> 
                            <div class="flex text-slate-500 truncate text-xs mt-0.5"> <a class="text-primary inline-block truncate" href="">PC &amp; Laptop</a> <span class="mx-1">•</span> 31 minutes ago </div>
                        </div>
                        <div class="dropdown ml-3">
                            <a href="javascript:;" class="dropdown-toggle w-5 h-5 text-slate-500" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="more-vertical" class="w-4 h-4"></i> </a>
                            <div class="dropdown-menu w-40">
                                <ul class="dropdown-content">
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="edit-2" class="w-4 h-4 mr-2"></i> Edit Post </a>
                                    </li>
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="trash" class="w-4 h-4 mr-2"></i> Delete Post </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="p-5">
                        <div class="h-40 2xl:h-56 image-fit">
                            <img alt="Midone - HTML Admin Template" class="rounded-md" src="../../assets/images/food-beverage-1.jpg"/>
                        </div>
                        <a href="" class="block font-medium text-base mt-5">Dummy text of the printing and typesetting industry</a> 
                        <div class="text-slate-600 dark:text-slate-500 mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                    </div>
                    <div class="flex items-center px-5 py-3 border-t border-slate-200/60 dark:border-darkmode-400">
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 dark:border-darkmode-400 dark:bg-darkmode-300 dark:text-slate-300 text-slate-500 mr-2 tooltip" title="Bookmark"> <i data-lucide="bookmark" class="w-3 h-3"></i> </a>
                        <div class="intro-x flex mr-2">
                            <div class="intro-x w-8 h-8 image-fit">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Al Pacino">
                            </div>
                            <div class="intro-x w-8 h-8 image-fit -ml-4">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Angelina Jolie">
                            </div>
                            <div class="intro-x w-8 h-8 image-fit -ml-4">
                                <img alt="Midone - HTML Admin Template" class="rounded-full border border-white zoom-in tooltip" src="../../assets/images/food-beverage-1.jpg" title="Matt Damon">
                            </div>
                        </div>
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full text-primary bg-primary/10 dark:bg-darkmode-300 dark:text-slate-300 ml-auto tooltip" title="Share"> <i data-lucide="share-2" class="w-3 h-3"></i> </a>
                        <a href="" class="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white ml-2 tooltip" title="Download PDF"> <i data-lucide="share" class="w-3 h-3"></i> </a>
                    </div>
                    <div class="px-5 pt-3 pb-5 border-t border-slate-200/60 dark:border-darkmode-400">
                        <div class="w-full flex text-slate-500 text-xs sm:text-sm">
                            <div class="mr-2"> Comments: <span class="font-medium">36</span> </div>
                            <div class="mr-2"> Views: <span class="font-medium">44k</span> </div>
                            <div class="ml-auto"> Likes: <span class="font-medium">61k</span> </div>
                        </div>
                        <div class="w-full flex items-center mt-3">
                            <div class="w-8 h-8 flex-none image-fit mr-3">
                                <img alt="Midone - HTML Admin Template" class="rounded-full" src="../../assets/images/food-beverage-1.jpg"/>
                            </div>
                            <div class="flex-1 relative text-slate-600">
                                <input type="text" class="form-control form-control-rounded border-transparent bg-slate-100 pr-10" placeholder="Post a comment...">
                                <i data-lucide="smile" class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"></i> 
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END: Blog Layout -->
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
    <Dark_bar/>
</template>

<script>
import Mobile from "../../components/Mobile_Menu/Mobile.vue"
import Sidebar from "../../components/Sidebar_Admin/Sidebar.vue"
import Navbar from "../../components/Navbar/Navbar.vue"
import Dark_bar from "../../components/Dark_bar/Dark_bar.vue"
export default {
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
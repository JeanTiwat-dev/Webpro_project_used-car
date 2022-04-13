<template>
    <div class="container w-full" id="app">
        <nav class="flex items-center justify-between border border-2 bg-white p-2">
            <div class="flex items-center text-blue-900 m-6 mr-6">
                <!-- <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> -->
                <i class="fas fa-car mr-6"></i>
                <span class="font-bold text-2xl text-blue-900 tracking-tight">Used Car Project</span>
             </div>
            <div class="w-full block flex-grow flex items-center w-auto">
                <div class="text-l flex-grow">
                    <a href="#" class="block mt-4 inline-block mt-0 font-semibold text-blue-900 hover:text-blue-700 p-6 ml-8">Shop</a>
                    <a href="#" class="block mt-4 inline-block mt-0 font-semibold text-blue-900 hover:text-blue-700 p-6 ml-8">Sell</a>
                </div>
                <div>
                     <div class="relative mr-20 items-center"> 
                         <input type="text" class="h-14 w-96 pr-8 pl-5 rounded border-blue-900" placeholder="Search anything...">
                        <div class="absolute top-4 right-3"> <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div>
                     </div>
                </div>
                <div>
                    <button type="button" class="text-blue-900 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2 mr-8">
                        <a href="#">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </a></button>
                </div>
             </div>
        </nav>     
    </div>
</template>
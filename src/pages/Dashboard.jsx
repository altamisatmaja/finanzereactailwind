import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import finanzelogo from "../assets/img/logofigma.png";
import InputKeuangan from './InputKeuangan';


function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
            navigate('/login');
        }
    }, []);

    
    return (
    <div class="flex min-h-screen flex-row bg-gray-100 text-gray-800 p-5">
        <aside class="sidebar w-60 shadow-2xl fixed rounded-xl h-[38rem] -translate-x-full transform bg-blue-700 p-3 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md">
            <div class="my-4 w-3/4 flex text-center mx-auto">
                <img src={finanzelogo} alt="logo" />
            </div>
            <div class="pt-4 pb-8">
                <ul class="space-y-2">
                    <li>
                        <a class="hover:bg-indigo-950 text-white flex items-center justify-between py-1.5 px-4 rounded cursor-pointer">
                            <span class="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                                </svg>
                                <span>Dashboard</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a class="hover:bg-indigo-950 flex items-center text-white py-1.5 px-4 rounded space-x-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                            </svg>
                            <span>Laporan</span>
                        </a>
                    </li>
                    <li>
                        <a class="hover:bg-indigo-950 flex items-center text-white py-1.5 px-4 rounded space-x-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>Rekap Investasi</span>
                        </a>
                    </li>
                    <li>
                        <a class="hover:bg-indigo-950 flex items-center text-white py-1.5 px-4 rounded space-x-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                            </svg>
                            <span>Statistik</span>
                        </a>
                    </li>
                    <li>
                        <a class="bg-indigo-950 flex items-center text-white py-1.5 px-4 rounded space-x-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                            </svg>
                            <span>Input Keuangan</span>
                        </a>
                    </li>
                    <li>
                        <a class="hover:bg-indigo-950 flex items-center justify-between text-white py-1.5 px-4 rounded space-x-2 cursor-pointer">
                            <span class="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                <span>Input Investasi</span>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='px-2 pt-28'>
                <ul className='space-y-2'>
                    <li>
                        <a class="hover:bg-indigo-950 hover:text-white flex items-center text-white py-1.5 px-4 rounded space-x-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                            </svg>
                            <span>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a class="hover:bg-indigo-950 hover:text-white flex items-center justify-between text-white py-1.5 px-4 rounded space-x-2 cursor-pointer">
                            <span class="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                <span>Logout</span>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <main class="main w-full flex-col pl-4 transition-all duration-150 ease-in md:ml-0">
            <div class="h-full items-center justify-center text-start text-3xl font-bold">
            <InputKeuangan />
            </div>
        </main>
    </div>
    );
}

export default Dashboard;
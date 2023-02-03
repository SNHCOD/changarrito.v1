import React, { useState } from 'react';
import Link from 'next/link';

interface Menu {
    url: string;
    name: string;
    active?: boolean;
}

interface Props {
    logo?: string;
    menu?: Menu[];
    mode?: string;
}

const AppHeader = (props: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={`relative z-50 ${props.mode === 'dark' ? 'bg-gray-700' : 'bg-transparent'}`}>
            <div className="px-4 mx-auto max-w-7xl sm:px-6">
                <div className={`flex justify-between items-center  border-gray-100 py-6  md:space-x-10`}>
                    <div className="flex items-center justify-start gap-12">
                    </div>
                        <nav className="hidden space-x-10 md:flex">
                            {props.menu && props.menu.map((item: Menu, i: number) => {
                                return (
                                    <Link 
                                        href={item.url} key={item.name} 
                                        className={`flex items-center p-2 rounded-sm 
                                                    ${item.active ? 
                                                        'text-yellow-500 hover:cursor-default' : 
                                                        'text-white hover:text-yellow-500 hover:cursor-pointer'}`}
                                                    >
                                        <span className="ml-1 text-base font-normal">
                                            {item.name}
                                        </span>
                                    </Link>
                                );
                            })}
                        </nav>
                    <div className="-my-2 -mr-2 md:hidden">
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(true)}
                            className={`inline-flex items-center justify-center p-2 text-white ${isMenuOpen ? 'hidden' : ''} border-2 rounded-md`}
                        >
                            <span className="sr-only">Open menu</span>

                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="absolute inset-x-0 top-0 z-20 transition origin-top-right transform md:hidden">
                    <div className="bg-transparent divide-y-2 rounded-lg shadow-lg">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <div className="-mr-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="inline-flex items-center justify-center p-2 text-white  border-2 rounded-md"
                                    >
                                        <span className="sr-only">Close menu</span>

                                        <svg
                                            className="w-6 h-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-2">
                                <nav>
                                    <p className="font-bold text-yellow-500">Menú</p>
                            {props.menu && props.menu.map((item: Menu, i: number) => {
                                        return (
                                            <Link href={item.url} key={item.name}
                                                className='flex items-center p-2 rounded-sm'
                                                >
                                                <span className={`ml-1 text-base font-normal text-white
                                                ${item.active ? 
                                                    'text-yellow-500 hover:cursor-default' : 
                                                    'text-white hover:text-yellow-500 hover:cursor-pointer'}`}>
                                                    {item.name}
                                                </span>
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default AppHeader;

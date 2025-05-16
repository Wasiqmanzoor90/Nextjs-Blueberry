import React from 'react';
import Link from 'next/link';

function Navbar() {
    return (
        <div className="flex flex-col items-center gap-6 text-blue-600 font-bold cursor-pointer">
            <Link href="/">
                <span className="material-symbols-outlined hover:scale-125 transition-transform duration-300" style={{ fontSize: '40px' }}>
                    home
                </span>
            </Link>


            <Link href="/user/about">
                <span
                    className="material-symbols-outlined hover:scale-125 transition-transform duration-300"
                    style={{ fontSize: '40px' }}
                >
                    contacts
                </span>
            </Link>

            <Link href="/user/project">
                <span
                    className="material-symbols-outlined hover:scale-125 transition-transform duration-300"
                    style={{ fontSize: '40px' }}
                >
                    shopping_bag
                </span>
            </Link>
        </div>
    );
}

export default Navbar;

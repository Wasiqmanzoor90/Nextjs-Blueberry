import React from 'react';
import Link from 'next/link';

function Navbar() {
    return (
        <div className="flex flex-col items-center gap-6 text-blue-600 font-bold cursor-pointer">
            <Link href="/">
                <span className="material-symbols-outlined hover:scale-125 transition-transform duration-300" style={{ fontSize: '60px' }}>
                    home
                </span>
            </Link>


            <Link href="/user/about">
                <span
                    className="material-symbols-outlined hover:scale-125 transition-transform duration-300"
                    style={{ fontSize: '60px' }}
                >
                    contacts
                </span>
            </Link>

            <span
                className="material-symbols-outlined hover:scale-125 transition-transform duration-300"
                style={{ fontSize: '60px' }}
            >
                shopping_bag
            </span>
        </div>
    );
}

export default Navbar;

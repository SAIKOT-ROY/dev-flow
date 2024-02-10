import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DevFlow from "../../../public/assets/images/site-logo.svg"
import { SignedIn, UserButton } from '@clerk/nextjs';
import Theme from './Theme';

const Navbar = () => {

    return (
        <nav className='flex-between background-light900_dark200 fixed z-50
        w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12'>
            <Link href="/" className='flex items-center gap-1'>
                <Image src={DevFlow} width={23} height={23} alt='DevFlow'></Image>
                <p className='h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden'>Dev <span className='text-primary-50'>Overflow</span></p>
            </Link>
            GlobalSearch
            <div className='flex-between gap-5'>
                <Theme />
                <SignedIn>
                    <UserButton afterSignOutUrl="/"
                    appearance={
                        {elements: {
                            avatarBox: 'h-10 w-10'
                        },
                    variables: {
                        colorPrimary: "#ff7000"
                    }}
                    } />
                </SignedIn>
                MobileNavigation
            </div>
        </nav>
    );
};

export default Navbar;
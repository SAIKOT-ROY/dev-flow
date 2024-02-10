"use client"

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Image from 'next/image';
import sun from "@/public/assets/icons/sun.svg"
import moon from "@/public/assets/icons/moon.svg"
import { useTheme } from '@/context/ThemeProvider';

const Theme = () => {

    const {mode, setMode} = useTheme()
    
    return (
        <Menubar className="relative border-none bg-transparent shadow-none">
            <MenubarMenu>
                <MenubarTrigger className='focus:bg-light-900 data[state=open]:bg-light-900
                dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200'>
                    {
                        mode === 'light' ? (
                            <Image src={sun} 
                            alt='sun' width={20} height={20}
                            className='active-theme'/>
                        ) : (
                            <Image src={moon} 
                            alt='moon' width={20} height={20}
                            className='active-theme'/>
                        )
                    }
                </MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>

    );
};

export default Theme;
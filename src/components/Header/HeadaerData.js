import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { CgDisplayGrid, CgUser } from 'react-icons/cg'

export const HeaderData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    }, {
        title: 'About',
        path: '/home#about',
        icon: <CgUser />,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <CgDisplayGrid />,
        cName: 'nav-text'
    },
    {
        title: 'Blogs',
        path: '/blogs',
        icon: <FaIcons.FaBlog />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/home#contact',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    }
];
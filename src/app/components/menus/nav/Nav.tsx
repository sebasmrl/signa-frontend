'use client';

import { Button } from '@/components/ui/button'
import React from 'react'
import { navItems } from './nav-items'
import { useRouter } from 'next/navigation';

export const Nav = () => {
    const router = useRouter()

    return (
        <ul className='w-full pt-8'>
            {
                navItems.map(item => (
                    <li key={item.title}>
                        <Button
                            variant={'default'}
                            className='w-full cursor-pointer'
                            onClick={() => router.push(item.url)}
                        >
                            {item.title}
                        </Button>
                    </li>
                ))
            }
        </ul>
    )
}

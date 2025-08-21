'use client';

import React from 'react'
import { Button } from '@/components/ui/button'
import { usePathname, useRouter } from 'next/navigation'
import { serviceItems } from './service-items'

export const Services = () => {
  const router = useRouter();
  const path = usePathname();
  
      return (
          <ul className='w-full'>
              {
                  serviceItems.map(item => (
                      <li key={item.title}>
                          <Button
                              variant={'outline'}
                              className={`w-full cursor-pointer ${(path ==item.url) ? 'bg-blue-100':''}`}
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

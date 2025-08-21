'use client';

import React from 'react'
import { usePathname } from 'next/navigation';

export const Header = () => {
    const path = usePathname();

    //TODO: Optimizar lectura de path y muestreo
    return (
        <div className="bg-white w-full h-full rounded-lg flex justify-center items-center">
            <p className='font-semibold'>
            {(path == '/dashboard') ? 'Panel':''}
            {(path.split('/').at(-1) =='brands') ? 'Servicios > Registro de Marca':''}
            {(path == '/dashboard/brands/create') ? 'Servicios > Crear nuevo registro':''}
            {(path == '/dashboard/brands/update') ? 'Servicios > Actualizar registro':''}
            </p>

        </div>
    )
}

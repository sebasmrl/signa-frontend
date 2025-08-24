import { Brand } from '@/interfaces/brand.interface'
import React from 'react'
import { BrandItem } from './BrandItem';

interface Props {
    brands: Brand[];
}
export const BrandList = ({ brands }: Props) => {
    return (
        <ul className='flex flex-col gap-2'>
            {
                brands.map((brand => (
                    <BrandItem
                        key={brand.brand + brand.id}
                        brand={brand}
                    />
                )))
            }
        </ul>
    )
}

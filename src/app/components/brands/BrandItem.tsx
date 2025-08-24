'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brand } from "@/interfaces/brand.interface";
import { useRouter } from "next/navigation";
import { AcceptDialog } from "../accept-dialog/AcceptDialog";

interface Props {
    brand: Brand
}

export const BrandItem = ({ brand }: Props) => {

    const router = useRouter();
    return (
        <li className="">
            <Card className="rounded-md">
                <CardContent className="flex gap-2 justify-between">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <p><strong>Marca: </strong><span>{brand.brand}</span></p>
                        <p><strong>Titular: </strong><span>{brand.owner}</span></p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <Button onClick={() => router.push(`/dashboard/brands/update/${brand.id}`)}>
                            Modificar
                        </Button>
                        <AcceptDialog
                            btnClassName="bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 cursor-pointer"
                            btntext="Eliminar" 
                            dialog={{
                                title: `Eliminar ${brand.brand}`,
                                description: `¿Estas seguro que deseas eliminar ${brand.brand} de tus marcas registradas?
                                esta accion es irreversible`
                            }}
                        />
                    </div>
                </CardContent>
            </Card>
        </li>
    )
}

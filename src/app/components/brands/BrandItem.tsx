'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brand } from "@/interfaces/brand.interface";
import { useRouter } from "next/navigation";
import { AcceptDialog } from "../accept-dialog/AcceptDialog";
import { Badge } from "@/components/ui/badge";
import { deleteBrandClientAction } from "@/app/actions/client/delete-brand.action";
import { toast } from "sonner";

interface Props {
    brand: Brand
}

export const BrandItem = ({ brand }: Props) => {

    const router = useRouter();
    return (
        <li className="">
            <Card className="rounded-md">
                <CardContent className="flex gap-2 justify-between">
                    <div className="flex flex-col md:flex-row gap-4 md:items-center">
                        <p className="leading-0"><strong>Marca: </strong><span>{brand.brand}</span></p>
                        <p className="leading-0"><strong>Titular: </strong><span>{brand.owner}</span></p>
                        <Badge variant={(brand.state) ? 'success' : 'destructive'}>
                            {(brand.state) ? 'activa' : 'pendiente'}
                        </Badge>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2">
                        <Button
                            variant={'default'}
                            onClick={() => router.push(`/dashboard/brands/update/${brand.id}`)}>
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
                            onAccept={async () => {
                                const rs = await deleteBrandClientAction(brand.id)
                                if (rs.status == 200) {
                                    toast("Registro eliminado exitosamente", {
                                        description: `La marca ${brand.brand} ha sido eliminada`,
                                    })
                                    router.refresh()
                                }else{
                                    toast("Ocurrio un error al eliminar el registro", {
                                        description: `La marca ${brand.brand} no se ha podido eliminar, intentalo de nuevo mas tarde`,
                                    })
                                }
                            }}
                        />
                    </div>
                </CardContent>
            </Card>
        </li>
    )
}

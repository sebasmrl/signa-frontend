'use client';
import { cn } from "@/lib/utils";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Stepper } from "../../stepper/Stepper";
import { Brand, CreateOrUpdateBrandDto } from "@/interfaces/brand.interface";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { updateBrandDefaultValues, updateBrandScheme } from "./updateBrandScheme";
import { updateBrandClientAction } from "@/app/actions/client/update-brand.action";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";




interface Props extends React.AllHTMLAttributes<HTMLDivElement> {
    brand: Brand
}



export const UpdateBrandForm = ({ brand, className, ...props }: Props) => {

    const [step, setStep] = useState(0);
    const router = useRouter();

    console.log(brand)
    const { id, ...brandDefaultData } = brand;

    const form = useForm<z.infer<typeof updateBrandScheme>>({
        resolver: zodResolver(updateBrandScheme),
        defaultValues: { ...updateBrandDefaultValues, ...brandDefaultData }
    });


    async function onSubmit(values: z.infer<typeof updateBrandScheme>) {
        const data: CreateOrUpdateBrandDto = {
            brand: values.brand,
            owner: values.owner,
            state: values.state
        }

        const rs = await updateBrandClientAction(id, data)
        if (rs.status == 200) {
            toast("Registro actualizado exitosamente", {
                description: `La marca ${values.brand} ha sido actualizada`,
            })
            router.push('/dashboard/brands')
        } else {
            toast("Error al intentar actualizar la marca", {
                description: `La marca ${values.brand} no se pudo actualizar, intentalo nuevamente más tarde`,
            })
            console.log(rs.data)
        }
    }


    return (
        <div
            {...props} className={cn("p-4", className)}
        >
            <Form {...form}>
                <form
                    className=" flex flex-col gap-y-2 items-stretch"
                    onSubmit={form.handleSubmit(onSubmit)}
                    onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                >

                    <Stepper currentStep={step} steps={['Información de la marca', 'Información del titular', 'Resumen']} />
                    <br />
                    {step === 0 &&
                        <>
                            <div className="flex flex-col gap-4">
                                <FormField
                                    control={form.control}
                                    name="brand"
                                    render={({ field }) => (
                                        <FormItem className="space-y-0 items-center gap-1">
                                            <FormLabel className="text-nowrap">Nombre de la marca</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="text" placeholder="Ingresa el nombre de la marca" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="state"
                                    render={({ field }) => (
                                        <FormItem className="space-y-0 items-center gap-1 self-start ">
                                            <FormControl>
                                                <div className="flex items-center space-x-2 justify-between">
                                                    <Label htmlFor="state" className="">Activar registro: </Label>
                                                    <Switch id="state" ref={field.ref} checked={field.value} onCheckedChange={field.onChange} value={field.value ? 1 : 0} />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button type="button"
                                className="self-end mt-6 cursor-pointer"
                                onClick={async () => {
                                    const isCorrect = await form.trigger('brand');
                                    if (isCorrect) setStep(step + 1)
                                }} >
                                Siguiente
                            </Button>
                        </>
                    }

                    {
                        step == 1 &&
                        <>
                            <FormField
                                control={form.control}
                                name="owner"
                                render={({ field }) => (
                                    <FormItem className="space-y-0 items-center gap-1">
                                        <FormLabel className="text-nowrap">Información del titular</FormLabel>
                                        <FormControl>
                                            <Input type="text"{...field} placeholder="Ingresa el nombre del titular" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex gap-2 self-end mt-6">

                                <Button type="button"
                                    className="cursor-pointer"
                                    onClick={async () => {
                                        setStep(step - 1)
                                    }}
                                >
                                    Atras
                                </Button>
                                <Button type="button"
                                    className="cursor-pointer"
                                    onClick={async () => {
                                        const isCorrect = await form.trigger('owner');
                                        if (isCorrect) setStep(step + 1)
                                    }}
                                >
                                    Siguiente
                                </Button>
                            </div>
                        </>

                    }

                    {step == 2 &&
                        <>
                            <div className="flex flex-col items-center my-5">
                                <h1 className="font-bold text-4xl">Revisión de Registro</h1>
                                <ul className="p-5">
                                    <li className="text-md"><span className="font-bold">Marca:</span> {form.getValues().brand}</li>
                                    <li className="text-md"><span className="font-bold">Titular:</span> {form.getValues().owner}</li>
                                    <li className="text-md"><span className="font-bold">Activo:</span> {form.getValues().state ? 'Si':'No'}</li>
                                </ul>
                            </div>
                            <div className="flex gap-2 self-end mt-6">
                                <Button type="button"
                                    className="cursor-pointer"

                                    onClick={async () => {
                                        setStep(step - 1)
                                    }}
                                >
                                    Atras
                                </Button>
                                <Button type="submit" className="cursor-pointer bg-blue-600">Guardar</Button>
                            </div>
                        </>
                    }



                </form>
            </Form>
        </div>
    )
}










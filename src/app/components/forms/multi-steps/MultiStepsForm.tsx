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
import { multiStepsScheme, multiStepsSchemeDefaultValues } from "./multiStepsScheme";
import { useState } from "react";
import { Stepper } from "../../stepper/Stepper";




interface Props extends React.AllHTMLAttributes<HTMLDivElement> {
    name?: string;
}



export const MultiStepsForm = ({ className, ...props }: Props) => {

    const [step, setStep] = useState(0);

    const form = useForm<z.infer<typeof multiStepsScheme>>({
        resolver: zodResolver(multiStepsScheme),
        defaultValues: { ...multiStepsSchemeDefaultValues }
    });


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function onSubmit(values: z.infer<typeof multiStepsScheme>) {

    }


    return (
        <div
            {...props} className={cn("p-4", className)}
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col gap-y-2 items-stretch">

                    <Stepper currentStep={step} steps={['Información de la marca', 'Información del titular', 'Resumen']} />
                    <br />
                    {step === 0 &&
                        <>
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










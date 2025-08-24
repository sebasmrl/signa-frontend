import { z } from "zod";

 const updateBrandScheme = z.object({
    brand: z.string().min(3, {
        message: "El nombre de la marca es requerido",
    }),
    owner: z.string().min(3,{ message:'El nombre del propietario es requerido'}),
    state: z.boolean()
})


const updateBrandDefaultValues = {
    brand:      '',
    owner:      '',
    state:  false
}

export {
    updateBrandScheme,
    updateBrandDefaultValues
}
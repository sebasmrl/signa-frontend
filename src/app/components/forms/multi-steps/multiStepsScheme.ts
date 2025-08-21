import { z } from "zod";

 const multiStepsScheme = z.object({
    brand: z.string().min(3, {
        message: "El nombre de la marca es requerido",
    }),
    owner: z.string().min(3,{ message:'El nombre del propietario es requerido'})
})


const multiStepsSchemeDefaultValues = {
    brand: '',
    owner: ''
}

export {
    multiStepsScheme,
    multiStepsSchemeDefaultValues
}
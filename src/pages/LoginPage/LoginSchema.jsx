import { z } from "zod"

export const loginSchema = z.object({
    email: z
        .string()
        .nonempty("O e-mail é obrigatório.")
        .email("Forneça um e-mail válido."),
    password: z
        .string()
        .nonempty("A senha é obrigatória."),
})


export const isEmpty = (object) => {
    return Object.keys(object).length !== 0
}
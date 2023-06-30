import { z } from "zod"

export const DashboardSchemaCreate = z.object({
    tech: z
        .string()
        .nonempty("Preencha este campo."),
    status: z
        .string()
        .nonempty("Preencha este campo."),
})

export const DashboardSchemaEdit = z.object({
    status: z
        .string()
        .nonempty("Preencha este campo."),
})
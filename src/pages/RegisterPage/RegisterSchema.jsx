import { z } from "zod"

export const registerSchema = z.object({
    name: z
        .string()
        .min(3, "O nome precisa ter pelo menos três caracteres."),
    email: z
        .string()
        .nonempty("O e-mail é obrigatório.")
        .email("Forneça um e-mail válido."),
    password: z
        .string()
        .nonempty("A senha é obrigatória.")
        .min(8, "A senha precisa ter pelo menos oito caracteres.")
        .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
        .regex(/(?=.*?[a-z])/, "É necessário pelo menos um caracter minúsculo.")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
        .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial."),
    confirm: z
        .string()
        .nonempty("Confirmar a senha é obrigatório."),
    bio: z
        .string()
        .nonempty("Escreva algo sobre você.")
        .max(150, "A bio deve ter no máximo 150 caracteres."),
    contact: z
        .string()
        .nonempty("É necessário uma opção de contato."),
    course_module: z
        .string()
        .nonempty("Escolha um módulo"),
}).refine(({ password, confirm }) => password === confirm, {
    message: "As senhas não correspondem.",
    path: ["confirm"],
})


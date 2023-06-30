import { ScrollableContent, StyledDivHeader, StyledForm, StyledMain } from "./style"
import { StyledButtonSubmit, StyledLinkShort } from "../../components/fragments/Button/Button"
import { Input } from "../../components/fragments/Input/Input"
import { Select } from "../../components/fragments/Select/Input"
import { useForm } from "react-hook-form"
import { registerSchema } from "./RegisterSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserContext } from "../../providers/UserContext"
import { useContext } from "react"
import Logo from "../../assets/Logo.svg"

export const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerSchema),
    })

    const { submit, isEmpty } = useContext(UserContext)

    const isErrors = isEmpty(errors)

    return (
        <ScrollableContent>
            <StyledMain>
                <StyledDivHeader>
                    <img src={Logo} alt="Logo do Kenzie Hub" />
                    <StyledLinkShort to="/" boxshadow="yes">Voltar</StyledLinkShort>
                </StyledDivHeader>
                <StyledForm onSubmit={handleSubmit(submit)}>
                    <h1>Crie sua conta</h1>
                    <p>Rápido e grátis, vamos nessa</p>
                    <Input
                        label="Nome"
                        type="text"
                        placeholder="Digite aqui seu nome"
                        {...register("name")}
                        error={errors.name}
                    />

                    <Input
                        label="Email"
                        type="email"
                        placeholder="Digite aqui seu email"
                        {...register("email")}
                        error={errors.email}
                    />

                    <Input
                        label="Senha"
                        type="password"
                        placeholder="Digite aqui sua senha"
                        {...register("password")}
                        error={errors.password}
                    />

                    <Input
                        label="Confirmar senha"
                        type="password"
                        placeholder="Digite novamente sua senha"
                        {...register("confirm")}
                        error={errors.confirm}
                    />

                    <Input
                        label="Bio"
                        type="text"
                        placeholder="Fale sobre você"
                        {...register("bio")}
                        error={errors.bio}
                    />

                    <Input
                        label="Contato"
                        type="text"
                        placeholder="Opção de contato"
                        {...register("contact")}
                        error={errors.contact}
                    />

                    <Select
                        label="Selecionar Módulo"
                        {...register("course_module")}
                        error={errors.course_module}
                    >
                        <option key="Primeiro módulo" value="Primeiro módulo (Introdução ao Frontend)">
                            Primeiro módulo (Introdução ao Frontend)
                        </option>
                        <option key="Segundo módulo" value="Segundo módulo (Frontend Avançado)">
                            Segundo módulo (Frontend Avançado)
                        </option>
                        <option key="Terceiro módulo" value="Terceiro módulo (Introdução ao Backend)">
                            Terceiro módulo (Introdução ao Backend)
                        </option>
                        <option key="Quarto módulo" value="Quarto módulo (Backend Avançado)">
                            Quarto módulo (Backend Avançado)
                        </option>
                    </Select>

                    <StyledButtonSubmit
                        type="submit"
                        backgroundcolor={isErrors ? "var(--color-color-primary-disable)" : "var(--color-color-primary)"}
                        disabled={isErrors}
                        hovercolor={isErrors ? "none" : "var(--color-color-primary-hover)"}
                        cursor={isErrors ? "not-allowed" : "pointer"}
                        boxshadow={isErrors ? null : "yes"}
                    >
                        {isErrors ? "Corrija os campos para cadastrar" : "Cadastrar"}
                    </StyledButtonSubmit>
                </StyledForm>
            </StyledMain>
        </ScrollableContent>
    )
} 

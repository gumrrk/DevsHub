import { StyledButtonSubmit, StyledLink } from "../../components/fragments/Button/Button"
import { Input } from "../../components/fragments/Input/Input"
import { StyledDiv, StyledForm, StyledMain } from "./style"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "./LoginSchema"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import Logo from "../../assets/Logo.svg"

export const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    })

    const { userLogin, isEmpty } = useContext(UserContext)

    const isErrors = isEmpty(errors)

    const submit = (formData) => {
        userLogin(formData)
    }

    return (
        <>
            <StyledMain>
                <StyledDiv>
                    <img src={Logo} alt="Logo do Kenzie Hub" />
                    <StyledForm onSubmit={handleSubmit(submit)}>
                        <h1>Login</h1>
                        <Input
                            label="Email"
                            type="email"
                            placeholder="Insira seu e-mail"
                            {...register("email")}
                            error={errors.email}
                        />
                        <Input
                            label="Senha"
                            type="password"
                            placeholder="Insira sua senha"
                            {...register("password")}
                            error={errors.password}
                        />
                        <StyledButtonSubmit
                            type="submit"
                            hovercolor={isErrors ? "none" : "var(--color-color-primary-hover)"}
                            backgroundcolor={isErrors ? "var(--color-color-primary-disable)" : "var(--color-color-primary)"}
                            disabled={isErrors}
                            cursor={isErrors ? "not-allowed" : "pointer"}
                            boxshadow={isErrors ? null : "yes"}
                            >
                            {isErrors ? "Corrija os campos para fazer login" : "Login"}
                        </StyledButtonSubmit>
                        <span>Ainda não possui uma conta?</span>
                        <StyledLink
                            to={"/register"}
                            backgroundColor="var(--color-grey-1)"
                            hovercolor="var(--color-grey-2-hover)"
                            boxshadow="yes"
                            >
                            Cadastre-se
                        </StyledLink>
                    </StyledForm>
                </StyledDiv>
            </StyledMain>
        </>
    )
}   
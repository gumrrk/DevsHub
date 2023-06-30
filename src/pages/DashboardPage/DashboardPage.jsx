import { useState, useContext, useEffect } from "react"
import { StyledButtonSubmit, StyledLinkShort } from "../../components/fragments/Button/Button"
import { LiStyled, StyledContainer, StyledDashboardPage, StyledWelcomePage, UlHeader, UlStyled, AddTechModal, StyledDivButtons } from "./style"
import { StyledHeader } from "../../components/Header/style"
import ReactModal from "react-modal"
import Plus from "../../assets/+.svg"
import Logo from "../../assets/Logo.svg"
import { UserContext } from "../../providers/UserContext"
import { TechContext } from "../../providers/TechContext"
import { Select } from "../../components/fragments/Select/Input"
import { Input } from "../../components/fragments/Input/Input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { DashboardSchemaCreate, DashboardSchemaEdit } from "./DashboardSchema"

ReactModal.setAppElement("#root")

export const DashboardPage = () => {
    const { user, userLogout, isEmpty } = useContext(UserContext)
    const { techsRegister, techList, fetchTechList, updateTech, deleteTech } = useContext(TechContext)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [selectedTech, setSelectedTech] = useState(null)
    const [editModalIsOpen, setEditModalIsOpen] = useState(false)

    const {
        register: registerCreate,
        handleSubmit: handleSubmitCreate,
        formState: { errors: createErrors },
        reset: resetCreateForm
    } = useForm({
        resolver: zodResolver(DashboardSchemaCreate)
    })

    const {
        register: registerEdit,
        handleSubmit: handleSubmitEdit,
        formState: { errors: editErrors },
        reset: resetEditForm
    } = useForm({
        resolver: zodResolver(DashboardSchemaEdit)
    })

    const isCreateErrors = isEmpty(createErrors)
    const isEditErrors = isEmpty(editErrors)

    const openCreateModal = () => {
        resetCreateForm()
        setModalIsOpen(true)
    }

    const closeCreateModal = () => {
        setModalIsOpen(false)
    }

    const openEditModal = (tech) => {
        setSelectedTech(tech)
        resetEditForm({ status: tech.status })
        setEditModalIsOpen(true)
    }

    const closeEditModal = () => {
        setEditModalIsOpen(false)
    }

    const handleCreateTech = (formData) => {
        techsRegister(formData)
        closeCreateModal()
    }

    const handleEditTech = (formData) => {
        updateTech(selectedTech.id, formData)
        setSelectedTech((prevState) => ({ ...prevState, ...formData }))
        closeEditModal()
    }

    const handleDeleteTech = async () => {
        await deleteTech(selectedTech.id)
        closeEditModal()
    }

    useEffect(() => {
        fetchTechList()
    }, [])

    return (
        <StyledContainer>
            <StyledHeader>
                <img src={Logo} alt="Logo da Kenzie Hub" />
                <StyledLinkShort to="/" onClick={userLogout} backgroundColor="var(--color-grey-3)">
                    Sair
                </StyledLinkShort>
            </StyledHeader>
            <StyledWelcomePage>
                <section className="userContainer">
                    <h1>Olá, {user ? user.name : "Carregando..."}!</h1>
                    <p>{user ? user.course_module : ""}</p>
                </section>
            </StyledWelcomePage>
            <StyledDashboardPage>
                <section className="development">
                    <UlHeader>
                        <h3>Tecnologias</h3>
                        <button onClick={openCreateModal}><img src={Plus} alt="Adicionar" /></button>
                    </UlHeader>
                    <UlStyled>
                        {techList.length ?
                            techList.map((tech) => (
                                <LiStyled key={tech.id} onClick={() => openEditModal(tech)}>
                                    <h2>{tech.title}</h2>
                                    <p>{tech.status}</p>
                                </LiStyled>
                            )) :
                            <p className="noTechs">Você não cadastrou nenhuma tecnologia.</p>
                        }
                    </UlStyled>
                </section>
            </StyledDashboardPage>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeCreateModal}
                style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.6)" } }}
                className="Modal"
            >
                <AddTechModal>
                    <div className="divModalHeader">
                        <h1>Cadastrar Tecnologia</h1>
                        <button onClick={closeCreateModal}>X</button>
                    </div>
                    <form className="divModalMain" onSubmit={handleSubmitCreate(handleCreateTech)}>
                        <Input
                            type="text"
                            label="Nome"
                            placeholder="Ex: Material UI"
                            {...registerCreate("tech")}
                            error={createErrors.tech}
                        />
                        <Select
                            label="Selecionar Status"
                            {...registerCreate("status")}
                        >
                            <option key="Iniciante" value="Iniciante">
                                Iniciante
                            </option>
                            <option key="Intermediário" value="Intermediário">
                                Intermediário
                            </option>
                            <option key="Avançado" value="Avançado">
                                Avançado
                            </option>
                        </Select>
                        <StyledButtonSubmit
                            type="submit"
                            hovercolor={isCreateErrors ? "none" : "var(--color-color-primary-hover)"}
                            backgroundcolor={isCreateErrors ? "var(--color-color-primary-disable)" : "var(--color-color-primary)"}
                            disabled={isCreateErrors}
                            cursor={isCreateErrors ? "not-allowed" : "pointer"}
                            boxshadow={isCreateErrors ? null : "yes"}
                        >
                            {isCreateErrors ? "Insira uma tecnologia" : "Cadastrar Tecnologia"}
                        </StyledButtonSubmit>
                    </form>
                </AddTechModal>
            </ReactModal>
            <ReactModal
                isOpen={editModalIsOpen}
                onRequestClose={closeEditModal}
                style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.6)" } }}
                className="Modal"
            >
                <AddTechModal>
                    <div className="divModalHeader">
                        <h1>Detalhes da Tecnologia</h1>
                        <button onClick={closeEditModal}>X</button>
                    </div>
                    <form className="divModalMain" onSubmit={handleSubmitEdit(handleEditTech)}>
                        <Input
                            type="text"
                            label="Nome da tecnologia"
                            placeholder={selectedTech ? selectedTech.title : ""}
                            defaultValue={selectedTech ? selectedTech.title : ""}
                            readOnly
                            className="readOnly"
                        />
                        <Select
                            label="Selecionar Status"
                            {...registerEdit("status")}
                            defaultValue={selectedTech ? selectedTech.status : ""}
                            error={editErrors.status}
                        >
                            <option key="Iniciante" value="Iniciante">
                                Iniciante
                            </option>
                            <option key="Intermediário" value="Intermediário">
                                Intermediário
                            </option>
                            <option key="Avançado" value="Avançado">
                                Avançado
                            </option>
                        </Select>
                        <StyledDivButtons>
                            <StyledButtonSubmit
                                type="submit"
                                hovercolor={isEditErrors ? "none" : "var(--color-color-primary-hover)"}
                                backgroundcolor={isEditErrors ? "var(--color-color-primary-disable)" : "var(--color-color-primary)"}
                                disabled={isEditErrors}
                                cursor={isEditErrors ? "not-allowed" : "pointer"}
                                boxshadow={isEditErrors ? null : "yes"}
                                width="70%"
                            >
                                {isEditErrors ? "Insira uma tecnologia" : "Salvar Alterações"}
                            </StyledButtonSubmit>
                            <StyledButtonSubmit
                                type="button"
                                hovercolor="var(--color-grey-2-hover)"
                                backgroundcolor="var(--color-grey-2)"
                                onClick={handleDeleteTech}
                                cursor="pointer"
                                width="25%"
                            >
                                Excluir
                            </StyledButtonSubmit>
                        </StyledDivButtons>
                    </form>
                </AddTechModal>
            </ReactModal>
        </StyledContainer>
    )
} 
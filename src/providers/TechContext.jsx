import { createContext, useState } from "react" 
import { toast } from "react-toastify" 
import { api } from "../services/api" 

export const TechContext = createContext({}) 

export const TechProvider = ({ children }) => {
    const [techList, setTechList] = useState([]) 

    const fetchTechList = async () => {
        const token = localStorage.getItem("@TOKEN") 
        try {
            const response = await api.get("/profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }) 
            const fetchedTechList = response.data.techs
            setTechList(fetchedTechList) 
        } catch (error) {
            toast.error(`Não foi possível buscar dados`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            }) 
        }
    } 

    const techsRegister = async (formData) => {
        const token = localStorage.getItem("@TOKEN") 
        try {
            const newData = { ...formData, title: formData.tech, status: formData.status } 
            const { data } = await api.post("/users/techs", newData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }) 
            setTechList((techList) => [...techList, data]) 
            toast.success(`${formData.tech} adicionado à lista`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            }) 
        } catch (error) {
            toast.error(`Não foi possível adicionar a tecnologia`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            }) 
        }
    } 

    const updateTech = async (techId, statusData) => {
        const token = localStorage.getItem("@TOKEN") 
        try {
            const updatedData = { status: statusData.status }
            await api.put(`/users/techs/${techId}`, updatedData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }) 
            setTechList((techList) =>
                techList.map((tech) =>
                    tech.id === techId ? { ...tech, status: statusData.status } : tech
                )
            ) 
            toast.success(`Tecnologia atualizada com sucesso`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            }) 
        } catch (error) {
            toast.error(`Não foi possível atualizar a tecnologia`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            }) 
        }
    } 

    const deleteTech = async (techId) => {
        const token = localStorage.getItem("@TOKEN") 
        try {
            await api.delete(`/users/techs/${techId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }) 
            setTechList((techList) =>
                techList.filter((tech) => tech.id !== techId)
            ) 
            toast.success(`Tecnologia excluída com sucesso`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            }) 
        } catch (error) {
            toast.error(`Não foi possível excluir a tecnologia`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            }) 
        }
    } 

    return (
        <TechContext.Provider
            value={{ techList, fetchTechList, techsRegister, updateTech, deleteTech }}
        >
            {children}
        </TechContext.Provider>
    ) 
} 

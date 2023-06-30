import { useContext } from "react"
import { UserContext, UserProvider } from "./providers/UserContext"
import { TechProvider } from "./providers/TechContext"
import { RoutesMain } from "./routes/RoutesMain"
import { GlobalStyle } from "./styles/global"
import { ResetStyle } from "./styles/reset"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
   const { loading } = useContext(UserContext)

   return (
      <div className="App">
         <ResetStyle />
         <GlobalStyle />
         <ToastContainer />

         <UserProvider>
            <TechProvider>
               {loading ? null : <RoutesMain />}
            </TechProvider>
         </UserProvider>
      </div>
   )
}

export default App 

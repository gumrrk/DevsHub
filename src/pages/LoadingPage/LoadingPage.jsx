import Loading from "../../assets/Loading.svg"
import { LoadingStyle } from "./style"

export const LoadingPage = () => {
    return (
        <LoadingStyle>
            <img src={Loading} />
        </LoadingStyle>
    )
}
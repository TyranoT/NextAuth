import { getServerSession } from "next-auth"

export default function View() {
    const session = getServerSession()
    
    return (
        <div>
            <h1>Acesso de Apenas Visualizar!</h1>
        </div>
    )
}
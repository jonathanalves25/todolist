import './EmptyTask.css'
import clipboard from '../assets/Clipboard.png'

export function EmptyTask() {
    return(
        <div className="EmptyArea">
            <div className="EmptyImg">
                <img src={clipboard} alt="imagem de um caderno" />
            </div>
            <div className="EmptyText">
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}
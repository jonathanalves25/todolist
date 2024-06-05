import './TaskItem.css'
import trash from '../assets/trash.png'
import checked from '../assets/checked.png'

interface paramProps {
    checkTask: () => void;
    isDone?: boolean;
    textTask: string;
    deleteTask: () => void;
}

export function TaskItem({checkTask, isDone=false, textTask, deleteTask}: paramProps) {

    const isChecked = isDone ? 'taskItemChecked' : 'taskItemCheck'
    const isCheckedText = isDone ? 'taskItemTextChecked' : ''

    return(
        <div className="taskItemArea">
            <button className={isChecked} onClick={checkTask}>
                {isDone ? 
                    <img src={checked} alt="icone de marcado"/> 
                    : 
                    ''
                }
            </button>

            <div className="taskItemText">
                <p className={isCheckedText}>{textTask}</p>
            </div>
            <div className="taskItemDelete" onClick={deleteTask}>
                <img src={trash} alt="lixeira" />
            </div>
        </div>
    )
}
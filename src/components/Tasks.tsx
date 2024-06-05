import './Tasks.css'
import plusIcon from '../assets/plus.png'
import { useState, ChangeEvent, useEffect } from 'react'
import { TaskItem } from './TaskItem'
import { EmptyTask } from './EmptyTask'

interface TasksItens {
    checkTask: () => void;
    isDone?:boolean;
    texto: string;
    DeletaTask: () => void;
}

export function Tasks() {

    const [tasks, setTasks] = useState<TasksItens[]>([])
    const [textInput, setTextInput] = useState('')
    const [countDone, setCountDone] = useState(0)

    const handleAddTask = () => {
        const newTask: TasksItens =
            {
                checkTask: () => {},
                texto: textInput,
                DeletaTask: () => {}
            }; 
        
            setTasks([...tasks, newTask]);
            setTextInput('')
    }

    const handleCheckTask = (index:number) => {
        const newItemChecked = tasks.map((task, i) => 
        i === index ? { ...task, isDone: !task.isDone } : task,
      );
      setTasks(newItemChecked);
    }

    const handleDeleteTask = (index:number) => {
        const tasksWithoutDeletedOne = tasks.filter((_, i) => i !== index);
        
        setTasks(tasksWithoutDeletedOne);
    }

    const handleChangeText = (e:ChangeEvent<HTMLInputElement>) => {
        setTextInput(e.target.value)
    }

    useEffect(() => {
        const count = tasks.filter(task => task.isDone).length;
        setCountDone(count);
      }, [tasks]);

    return(

        <div className="tasksArea">
            <div className="inputArea">
                <input 
                    type="text" 
                    placeholder='Adicione uma nova tarefa'
                    value={textInput} 
                    onChange={handleChangeText}
                />

                <div className="inputBtnArea">
                    <button onClick={handleAddTask}>Criar <img src={plusIcon} alt="icone de soma"/></button>
                </div>
            </div>

            <div className="tasksInfos">
                <div className="tasksCreated">
                    <p>Tarefas criadas</p>
                    <div className="tasksCount">{tasks.length}</div>
                </div>

                <div className="tasksDone">
                    <p>Tarefas concluídas</p>
                    <div className="tasksCountDone">
                        {
                            countDone > 0 ? (
                                countDone +` de `+ tasks.length
                            ) : 
                            (
                                countDone
                            )                            
                        }
                        
                    </div>
                </div>
            </div>
        
            { tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <TaskItem 
                        key={index}
                        checkTask={() => handleCheckTask(index)}
                        isDone={task.isDone}
                        textTask={task.texto} 
                        deleteTask={() => handleDeleteTask(index)}
                    />
                ))
            ): (
                <EmptyTask/>   
            )}
            
        </div>
    )
}
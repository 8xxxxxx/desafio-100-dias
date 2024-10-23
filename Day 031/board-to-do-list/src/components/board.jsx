import { useEffect, React } from 'react';

const Board = ({ task, index, taskList, setTaskList }) => {
    const handleDelete = () => {
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex, 1);
        setTaskList((currentTasks => currentTasks.filter(todo => index === removeIndex)))
    }

    return (
        <>
            <div className="mas-w-md rounded-x1 flex flex-col items-center justify-start
                            border text-center text-lg pt-3 pb-4 px-4 md:px-6">
                <p>{task}</p>
                <button className="bg-red-500 text-white rounded-1g py-1 px-1 mt-4">
                    Deletar
                </button>
            </div>
        
        </>
    )
}

export default Board;
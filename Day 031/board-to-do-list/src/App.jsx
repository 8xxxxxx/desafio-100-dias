import { React, useState } from 'react';
import Input from './components/input';
import Board from './components/board';

function App() {
  const [taskList, setTaskList] = useState([]);

  console.log(taskList);
  return (
    <>
      <div className='flex flex-col items-center justify-center py-8 gap-4'>
        <h1>Quadro de Tarefas</h1>
          <Input taskList={taskList} setTaskList={setTaskList}/>
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          {taskList.map((task, index) => (
            <Board 
              key={index} 
              task={task}
              index={index}
              taskList={taskList}
              setTaskList={setTaskList}
              />
          ))}
        </div>

    </>
  )
}

export default App;
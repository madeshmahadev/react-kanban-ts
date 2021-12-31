import React, { useState, DragEvent } from 'react';
import { initData } from "./data";
import { Data } from "./interface";
import { Column } from "./components";

import styled from 'styled-components'

import { DragDropContext, DragStart, DropResult } from "react-beautiful-dnd";

const Container = styled.div`
  display: flex;
`;

const App: React.FC = () => {

  const [data, setData] = useState<Data>(initData) ;

  const handleDragStart = (start: DragStart) => {
    const homeIndex: number = data.columnOrder.indexOf(start.source.droppableId);
    setData({
      ...data,
      homeIndex,
    })
  }
 
  const handleDragEnd = (result: DropResult) => {
      const { destination, source, draggableId } = result;

      if(!destination) {
        return;
      }

      if(
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }
      
      const start: any = data.columns[source.droppableId]
      const finish: any = data.columns[destination.droppableId]
      
      if(start===finish) {
        const newTaskIds: any = Array.from(start.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn: any = {
          ...start,
          taskIds: newTaskIds,
        };

        const newData: Data = {
          ...data,
          columns: {
            ...data.columns,
            [newColumn.id]: newColumn,
          },
        };

        setData(newData);
        return;    
      }

      //Moving from one list/swimlane to the another
      const startTaskIds: any = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1)
      const newStart: any = {
        ...start,
        taskIds: startTaskIds,
      }

      const finishTaskIds: any = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish: any = {
        ...finish,
        taskIds: finishTaskIds,
      }


      const newData: Data = {
        ...data,
        columns: {
          ...data.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };

      setData(newData);

  }

  return (
    <DragDropContext
      onDragStart = { start => handleDragStart(start) }
      //onDragUpdate = {}
      onDragEnd = { result => handleDragEnd(result) }
    >
      <Container>
        {
          data.columnOrder.map((columnId: string, index: number) => {
        
            const currColumn: any = data.columns[columnId];
            const tasks: any = currColumn.taskIds.map( (taskId: string) => data.tasks[taskId]);
    
            const isDropDisabled: boolean = index < (data.homeIndex ? data.homeIndex : 0); 

            return (
                  <Column key={currColumn.id} column={currColumn} tasks={tasks} isDropDisabled={isDropDisabled}/>
            )  
            

          })
        }
      </Container>
    </DragDropContext> 
  )

}

export default App;

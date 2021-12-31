import React, {useState} from "react";
import { ColumnData } from "../interface";
import styled from "styled-components";

import { Task } from "../components";

import { Droppable } from 'react-beautiful-dnd';


const Container = styled.div`
    margin: 10px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    background: #f4f5f7;
    width: 220px;
    height: 500px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    padding: 10px;
`;

const TaskList = styled.div`
    padding: 10px;
    flex-grow: 1;
    min-height: 100px;
`;


export const Column: React.FC<ColumnData> = ({column, tasks, isDropDisabled}) => {
    return (
        <Container>
            <Title>{column.title}</Title>
            <Droppable
                droppableId={column.id}
                //type={column.id === 'column-4' ? 'done' : 'active'}
                isDropDisabled={isDropDisabled}
            >
                { (provided) => (
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks.map( (task: any, index: number) => ( <Task key={task.id} task={task} index={index} /> ))}
                        {provided.placeholder}
                    </TaskList>
                ) }
            </Droppable>

        </Container>
    )
}

import React from "react";
import { TaskData } from "../interface";
import styled from "styled-components";

import { Draggable } from 'react-beautiful-dnd';


interface CardProps {
    isDragging: boolean;
}

const Container = styled.div`
    user-select: "none";
    margin: 0 0 8px 0;
`;

const Card = styled.div<CardProps>`
    background: #fff;
    padding: 10px;
    border: 1px solid rgb(208 200 200);
    box-sizing: border-box;
    border-radius: 5px;
    transition: transform 0.35s ease-in-out;
    transform: ${ (props) => ( props.isDragging ? "rotate(2deg)" : "unset" )}
`;

const Text = styled.p`
    font-size: 16px;
`;

export const Task: React.FC<TaskData> = ({task, index}) => {
    return (
        <Draggable
            draggableId={task.id}
            index={index}
        >
            { (provided, snapshot) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                        ...provided.draggableProps.style
                    }}
                >
                    <Card
                        isDragging={snapshot.isDragging}
                    >
                        <Text>
                            {task.content}
                        </Text>
                    </Card>
                </Container>
            )}
        </Draggable>
    )
}
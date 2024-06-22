import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Paper, Typography } from '@mui/material';

const initialColumns = {
  todo: {
    id: 'todo',
    title: 'To Do',
    tasks: [{ id: 'task-1', content: 'Task 1' }, { id: 'task-2', content: 'Task 2' }],
  },
  inProgress: {
    id: 'inProgress',
    title: 'In Progress',
    tasks: [{ id: 'task-3', content: 'Task 3' }],
  },
  done: {
    id: 'done',
    title: 'Done',
    tasks: [{ id: 'task-4', content: 'Task 4' }],
  },
};

const Kanban = () => {
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    if (start === finish) {
      const newTasks = Array.from(start.tasks);
      const [reorderedItem] = newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, reorderedItem);

      const newColumn = {
        ...start,
        tasks: newTasks,
      };

      setColumns({
        ...columns,
        [newColumn.id]: newColumn,
      });
      return;
    }

    const startTasks = Array.from(start.tasks);
    const [movedItem] = startTasks.splice(source.index, 1);
    const newStart = {
      ...start,
      tasks: startTasks,
    };

    const finishTasks = Array.from(finish.tasks);
    finishTasks.splice(destination.index, 0, movedItem);
    const newFinish = {
      ...finish,
      tasks: finishTasks,
    };

    setColumns({
      ...columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {Object.values(columns).map((column) => (
          <div key={column.id} style={{ width: '30%' }}>
            <Typography variant="h6">{column.title}</Typography>
            <Droppable droppableId={column.id}>
              {(provided) => (
                <Paper
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{ padding: 8, minHeight: 500 }}
                >
                  {column.tasks.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <Paper
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            userSelect: 'none',
                            padding: 16,
                            margin: '0 0 8px 0',
                            ...provided.draggableProps.style,
                          }}
                        >
                          {task.content}
                        </Paper>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Paper>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Kanban;
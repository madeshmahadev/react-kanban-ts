export const initData = {
    tasks: {
        'task-1': {
            id: 'task-1',
            content: 'Work on the HTML'
        },
        'task-2': {
            id: 'task-2',
            content: 'Testing the website'
        },
        'task-3': {
            id: 'task-3',
            content: 'Program the Kanban component'
        },
        'task-4': {
            id: 'task-4',
            content: 'Deploy the site in Heroku'
        },
    },

    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To Do',
            taskIds: ['task-1','task-2','task-3','task-4'],
        },
        'column-2': {
            id: 'column-2',
            title: 'In Progress',
            taskIds: [],
        },
        'column-3': {
            id: 'column-3',
            title: 'Review',
            taskIds: [],
        },
        'column-4': {
            id: 'column-4',
            title: 'Completed',
            taskIds: [],
        },
    },

    columnOrder: ['column-1','column-2','column-3','column-4'],
}

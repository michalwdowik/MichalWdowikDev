import PortfolioProject from './PortfolioProject'

const urlToDemo = 'https://to-do-app-michalwdowik.vercel.app/'
const urltoRepo = 'https://github.com/michalwdowik/ToDoApp'

const toDoAppDescription = `The ToDoApp is a web application built using React,
Typescript, Vite, Tailwind CSS, Eslint, and Prettier. To Do
App utilizes Cypress for end-to-end testing. The app allows
users to create and manage their to-do lists by adding,
editing, and deleting tasks. Users can also create custom
categories by inputting a name and selecting an icon and the
color of the category. Every task has a &quot;details&quot;
button that shows a modal with details of a task ie. days to
deadline of a task.`

const toDoAppFunctionalities = [
    'Add, remove tasks',
    'Create category',
    'Date & Icon Picker',
    'Task Details Modal',
    'Deadlines',
    'Mark all/Unmark all tasks',
    'Search task',
    'End-to-end testing',
    'PWA',
]

const toDoAppDesignFeatures = [
    'Responsive colors',
    'Transitions',
    'Responsive alerts',
    'Task Details Modal',
    'Responsive design',
]

const ToDoApp = () => {
    return (
        <PortfolioProject
            title="TO DO APP"
            subtitle="Task Planner."
            demoLink={urlToDemo}
            repoLink={urltoRepo}
            images={['to-do-app-2.png', 'to-do-app-1.png', 'to-do-app-3.png']}
            description={toDoAppDescription}
            functionality={toDoAppFunctionalities}
            design={toDoAppDesignFeatures}
            mainColor="#818cf8"
            secondaryColor="#3730a3"
            thirdColor="#c4b5fd"
            translateYFrom={320}
            imagesSpeed={[30, 20, 40]}
        />
    )
}

export default ToDoApp

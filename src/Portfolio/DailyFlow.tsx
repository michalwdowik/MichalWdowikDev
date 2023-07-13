import PortfolioProject from './PortfolioProject'

const urlToDemo = 'https://dailyflow.vercel.app/'
const urltoRepo = 'https://github.com/michalwdowik/ToDoApp'

const toDoAppDescription = `DailyFlow allows users to manage their daily tasks by adding, editing,
 and deleting them. Users can also create custom categories by inputting a name and selecting an icon
  and the color of the category. Every task has a "details" button that shows a modal with details of a task ie.
   "days to deadline of a task". The application is responsive to user errors and successes and displays relevant alerts.
    The React framework is used for building the user interface, while Tailwind CSS is used for styling the components. 
    The project is designed to provide a simple and intuitive user experience, with a clean and modern interface that is easy to use and navigate.
     DailyFlow has been optimized for performance and accessibility. It has achieved a full score and PWA status on Lighthouse.

`

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

const DailyFlow = () => {
    return (
        <PortfolioProject
            title="DAILYFLOW"
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

export default DailyFlow

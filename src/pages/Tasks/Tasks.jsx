import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import AddTask from "./AddTask";
import AllTasks from "./AllTasks";
import CancelledTask from "./CancelledTask";
import CompletedTasks from "./CompletedTasks";


const Tasks = () => {
    return (
        <section className="max-w-screen-xl mx-auto p-3 my-5">
            <Tabs>
                <TabList>
                    <Tab>All Tasks</Tab>
                    <Tab>Add Task</Tab>
                    <Tab>Completed Tasks</Tab>
                    <Tab>Cancelled Tasks</Tab>
                </TabList>

                {/* All Tasks */}
                <TabPanel>
                    <h1 className="text-center mt-8 mb-3 text-3xl font-semibold">All Tasks</h1>
                    <AllTasks />
                </TabPanel>

                {/* Add a Task */}
                <TabPanel>
                    <h1 className="text-center mt-8 mb-3 text-3xl font-semibold">Add A New Task</h1>
                    <AddTask />
                </TabPanel>

                {/* Completed Tasks */}
                <TabPanel>
                    <h1 className="text-center mt-8 mb-3 text-3xl font-semibold">Completed Tasks</h1>
                    <CompletedTasks />
                </TabPanel>

                {/* Cancelled Tasks */}
                <TabPanel>
                    <h1 className="text-center mt-8 mb-3 text-3xl font-semibold">Cancelled Tasks</h1>
                    <CancelledTask />
                </TabPanel>
            </Tabs>
        </section>
    );
};

export default Tasks;

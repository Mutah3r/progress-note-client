import { useContext, useEffect, useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const AllTasks = () => {
    const { user } = useContext(AuthContext);

    const [allTasks, setAllTasks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/allTasks?email=${user?.email ? user.email : ''}`)
            .then(res => res.json())
            .then(data => {
                setAllTasks(data)
            })
    }, [user]);

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                #
                            </label>
                        </th>
                        <th>Title</th>
                        <th>Date</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allTasks.map((task, idx) => <tr key={task._id}>
                            <th>
                                <label>
                                    {idx + 1}
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="">
                                        <div className="pl-1 font-bold">{task.title}</div>
                                        <div className="text-sm opacity-50"><button className="btn btn-xs">Description</button></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {task.taskAddedDate}
                                <br />
                                <span className="opacity-80">{task.taskAddedTime}</span>
                            </td>
                            <td className="text-center">
                                {task.status === 'Not Started' && <div className="text-center inline-block px-[5px] py-[3px] rounded-xl bg-red-400">Not Started</div>}
                                {task.status === 'In Progress' && <div className="text-center inline-block px-[5px] py-[3px] rounded-xl bg-blue-500">In Progress</div>}
                                {task.status === 'In Review' && <div className="text-center inline-block px-[5px] py-[3px] rounded-xl bg-warning">In Review</div>}
                                {task.status === 'Done' && <div className="text-center inline-block px-[5px] py-[3px] rounded-xl bg-green-500">Done</div>}
                            </td>
                            <th className="flex justify-center items-center gap-1">
                                <button className="btn btn-square bg-info hover:bg-blue-500 hover:text-white">
                                    <FaRegEdit />
                                </button>
                                <button className="btn btn-square bg-error hover:bg-red-600 hover:text-white">
                                    <FaRegTrashAlt />
                                </button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllTasks;
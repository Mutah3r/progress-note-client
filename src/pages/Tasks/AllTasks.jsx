import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const AllTasks = () => {
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
                    {/* row 1 */}
                    <tr>
                        <th>
                            <label>
                                01
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="">
                                    <div className="pl-1 font-bold">Complete the job task</div>
                                    <div className="text-sm opacity-50"><button className="btn btn-xs">Description</button></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            6 June, 2023
                            <br />
                            <span className="opacity-80">4:27 PM</span>
                        </td>
                        <td className="text-center"><div className="text-center inline-block px-[5px] py-[3px] rounded-xl bg-red-400">Not Started</div></td>
                        <th className="flex justify-center items-center gap-1">
                            <button className="btn btn-square bg-info hover:bg-blue-500 hover:text-white">
                                <FaRegEdit />
                            </button>
                            <button className="btn btn-square bg-error hover:bg-red-600 hover:text-white">
                                <FaRegTrashAlt />
                            </button>
                        </th>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>
                            <label>
                                01
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="">
                                    <div className="pl-1 font-bold">Complete the job task</div>
                                    <div className="text-sm opacity-50"><button className="btn btn-xs">Description</button></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            6 June, 2023
                            <br />
                            <span className="opacity-80">4:27 PM</span>
                        </td>
                        <td className="text-center"><div className="text-center inline-block px-[5px] py-[3px] rounded-xl bg-blue-500">In Progress</div></td>
                        <th className="flex justify-center items-center gap-1">
                            <button className="btn btn-square bg-info hover:bg-blue-500 hover:text-white">
                                <FaRegEdit />
                            </button>
                            <button className="btn btn-square bg-error hover:bg-red-600 hover:text-white">
                                <FaRegTrashAlt />
                            </button>
                        </th>
                    </tr>

                    {/* row 3 */}
                    <tr>
                        <th>
                            <label>
                                01
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="">
                                    <div className="pl-1 font-bold">Complete the job task</div>
                                    <div className="text-sm opacity-50"><button className="btn btn-xs">Description</button></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            6 June, 2023
                            <br />
                            <span className="opacity-80">4:27 PM</span>
                        </td>
                        <td className="text-center"><div className="text-center inline-block px-[5px] py-[3px] rounded-xl bg-warning">In Review</div></td>
                        <th className="flex justify-center items-center gap-1">
                            <button className="btn btn-square bg-info hover:bg-blue-500 hover:text-white">
                                <FaRegEdit />
                            </button>
                            <button className="btn btn-square bg-error hover:bg-red-600 hover:text-white">
                                <FaRegTrashAlt />
                            </button>
                        </th>
                    </tr>
                    
                    {/* row 4 */}
                    <tr>
                        <th>
                            <label>
                                01
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="">
                                    <div className="pl-1 font-bold">Complete the job task</div>
                                    <div className="text-sm opacity-50"><button className="btn btn-xs">Description</button></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            6 June, 2023
                            <br />
                            <span className="opacity-80">4:27 PM</span>
                        </td>
                        <td className="text-center"><div className="text-center inline-block px-[5px] py-[3px] rounded-xl bg-green-500">Done</div></td>
                        <th className="flex justify-center items-center gap-1">
                            <button className="btn btn-square bg-info hover:bg-blue-500 hover:text-white">
                                <FaRegEdit />
                            </button>
                            <button className="btn btn-square bg-error hover:bg-red-600 hover:text-white">
                                <FaRegTrashAlt />
                            </button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllTasks;
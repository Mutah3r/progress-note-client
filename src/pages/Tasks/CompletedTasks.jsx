const CompletedTasks = () => {
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
                        <th>Start Time</th>
                        <th>Completed Time</th>
                        <th className="text-center">Comments</th>
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
                        <td>
                            6 June, 2023
                            <br />
                            <span className="opacity-80">4:27 PM</span>
                        </td>
                        <th className="flex justify-center items-center gap-1">
                            <button className="btn btn-xs bg-green-400 hover:bg-green-500 hover:text-white">View Comments</button>
                        </th>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default CompletedTasks;
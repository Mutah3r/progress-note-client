import Lottie from "lottie-react";
import addTaskAnimation from '../../assets/add-task-animation.json'

const AddTask = () => {
    return (
        <section className="p-3 display grid lg:grid-cols-2 items-center justify-center content-center">
            <div>
                <Lottie animationData={addTaskAnimation} loop={true} />
            </div>
            <div>
                <div className="form-control w-full my-3 ">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" placeholder="Task title" className="input input-bordered w-full" />
                </div>
                <div className="form-control my-3">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Task Description"></textarea>
                </div>
                <label className="label">
                    <span className="label-text">Status</span>
                </label>
                <select className="select select-bordered w-full">
                    <option>Not Started</option>
                    <option>In Progress</option>
                    <option>In Review</option>
                    <option>Done</option>
                </select>
                <div className="mt-5 mb-3 pt-2">
                    <button className="w-full button button-primary">Add</button>
                </div>
            </div>
        </section>
    );
};

export default AddTask;
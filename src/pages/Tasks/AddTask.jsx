import Lottie from "lottie-react";
import addTaskAnimation from '../../assets/add-task-animation.json'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddTask = () => {
    const { user } = useContext(AuthContext);

    const handleAddTask = (event) => {
        event.preventDefault();


        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const status = form.status.value;
        const email = user.email

        const task = {
            title,
            description,
            status,
            email
        }

        fetch('http://localhost:5000/addTask',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(task)
            }
        )
            .then(res => res.json())
            .then(data => {
                if(data?.insertedId){
                    alert('added');
                }
                else{
                    alert('error');
                }
            })
    }

    return (
        <section className="p-3 display grid lg:grid-cols-2 items-center justify-center content-center">
            <div>
                <Lottie animationData={addTaskAnimation} loop={true} />
            </div>
            <form onSubmit={handleAddTask}>
                <div className="form-control w-full my-3 ">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input required name="title" type="text" placeholder="Task title" className="input input-bordered w-full" />
                </div>
                <div className="form-control my-3">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea required name="description" className="textarea textarea-bordered h-24" placeholder="Task Description"></textarea>
                </div>
                <label className="label">
                    <span className="label-text">Status</span>
                </label>
                <select required name="status" className="select select-bordered w-full">
                    <option>Not Started</option>
                    <option>In Progress</option>
                    <option>In Review</option>
                    <option>Done</option>
                </select>
                <div className="mt-5 mb-3 pt-2">
                    <input className="w-full button button-primary" type="submit" value="Add" />
                </div>
            </form>
        </section>
    );
};

export default AddTask;
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const SingUP = () => {
    const {createUser} = useContext(AuthContext);
    const handleSingup = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            const creationTime = result.user?.metadata?.creationTime
            const user = {email, creationTime: creationTime};
            fetch(`http://localhost:4000/users`,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    alert('create user succssesfully',data)
                }
                form.reset()
            })
        })
        .catch(error =>{
            console.error(error.message);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">SingUp now!</h1>
                    </div>
                    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                        <form onSubmit={handleSingup} className="card-body w-[500px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sing UP</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUP;
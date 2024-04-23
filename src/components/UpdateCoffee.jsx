import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, photoUrl, supplier, taste, quantity, details , category} = coffee;
    const handleUpdateCoffee = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;
        const updateCoffee = { name, quantity, supplier, taste, category, details, photoUrl };
        console.log(updateCoffee);

        fetch(`http://localhost:4000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.updateId> 0) {
                    Swal.fire({
                        title: "Success!",
                        text: 'Coffee Updated',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })


    }
    return (
        <div className="  my-10 p-24 mx-auto bg-[#F4F3F0]">

            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-raleway font-bold">Update Coffee</h2>
                <p className="text-lg font-raleway">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleUpdateCoffee}>
                {/* name and quantity row */}
                <div className="md:flex ">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span>Name</span>
                        </div>
                        <input type="text" name="name" defaultValue={name} placeholder="Enter coffee name" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:w-1/2 md:ml-4">
                        <div className="label">
                            <span className="">Available Quantity</span>
                        </div>
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Supplier and Taste row */}
                <div className="md:flex ">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span>Supplier</span>
                        </div>
                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:w-1/2 md:ml-4">
                        <div className="label">
                            <span className="">Taste</span>
                        </div>
                        <input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* cetegory and details row */}
                <div className="md:flex ">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span>Category</span>
                        </div>
                        <input type="text" name="category" defaultValue={category} placeholder="Enter coffee Category" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:w-1/2 md:ml-4">
                        <div className="label">
                            <span className="">Details</span>
                        </div>
                        <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* photo Url row */}
                <div className="">
                    <label className="form-control w-full">
                        <div className="label">
                            <span>Photo</span>
                        </div>
                        <input type="text" name="photoUrl" defaultValue={photoUrl} placeholder="Enter Photo Url" className="input input-bordered w-full " />
                    </label>
                </div>
                <input type="submit" className="btn btn-block my-4 bg-[#D2B48C] border-2 text-[#331A15] border-[#331A15] hover:bg-[#331A15] hover:text-[#D2B48C] hover:border-2 hover:border-[#D2B48C]" value="Update" />
            </form>
        </div>
    );
};

export default UpdateCoffee;
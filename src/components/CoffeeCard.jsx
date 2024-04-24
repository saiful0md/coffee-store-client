import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, photoUrl, supplier, taste, quantity, details } = coffee;
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-7xfqdr926-saiful-islams-projects-e6e7facb.vercel.app/coffee/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                        }
                        const remaining = coffees.filter(cof => cof._id !== _id);
                        setCoffees(remaining)
                    })
            }
        });
    }
    return (
        <div>
            <div className="card card-side bg-[#F5F4F1] shadow-xl p-3">
                <figure><img className='' src={photoUrl} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                    <p>{quantity}</p>
                    <p>{details}</p>
                </div>
                <div className=" flex flex-col justify-around">
                    <button className="btn btn-primary">View</button>
                   <Link to={`/updateCoffee/${_id}`}> <button className="btn btn-primary">Edit</button></Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};
CoffeeCard.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.func,
}

export default CoffeeCard;
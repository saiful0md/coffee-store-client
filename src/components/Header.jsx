
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='max-w-6xl mx-auto flex items-center justify-center gap-20 my-10'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/addCoffee'}>Add Coffee</NavLink>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/singup'}>SingUp</NavLink>
            <NavLink to={'/singin'}>SingIn</NavLink>
            
        </div>
    );
};

export default Header;
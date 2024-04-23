
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './App.css';
import CoffeeCard from './components/CoffeeCard';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)
  return (
    <>
      <h1 className='text-5xl flex justify-center items-center my-10'>Coffe Store</h1>
      <div className='container max-w-6xl mx-auto grid grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard
            coffee={coffee}
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App

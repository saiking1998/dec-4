import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import items from './Data';
import Catagories from './Catagories';
import Menu from './Menu';
const allCategories = ["all", ...new Set(items.map((item)=>item.category))]
function App() {
  const [menueItems,setmenueItems] = useState(items)
  const [catagories,setCatagories] = useState(allCategories)
  const filterItems = (categoryName) => {
    if(categoryName === "all"){
        setmenueItems(items)
    }else{
        const newItems = items.filter((item)=>item.category===categoryName)
        setmenueItems(newItems)
    }
}
  return (
    <main>

      <section className="menu section">
        <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>

        </div>
        <Catagories catagories ={catagories} filterItems={filterItems}/>
        <Menu items={menueItems} />


      </section>
    </main>
  );
}

export default App;

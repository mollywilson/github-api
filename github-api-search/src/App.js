import { useState, useEffect } from "react";
import './App.css';
import Repo from './Repo';

function App() {
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(`https://api.github.com/search/repositories?q=molly`)
      const data = await res.json()
      setItems(data.items)
    }

    fetchRepos()
  }, [])
  

  return (
    <div className="App">
      { items ? 
        <section>
          <h1> Viewing repository results for Molly</h1>
          <div>
            {console.log(items)}
            {items.map((item) => (
              <Repo key={item.id} {...item} />
            ))}
          </div>
        </section> : "Loading..."
      }
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import './App.css';
import Repo from './Repo';
import { colors, createTheme, Grid, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.blue[500],
    }
  }
});

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

  const theme = createTheme({
    
  });
  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        { items ? 
          <section>
            <h1> Viewing repository results for Molly</h1>
            <div>
              <Grid container spacing={3}>
                  {items.map((item) => (
                    <Grid item xs={4}>
                      <Repo key={item.id} {...item} />
                    </Grid>
                    ))}
              </Grid>
            </div>
          </section> : "Loading..."
        }
      </div>
    </ThemeProvider>
    
  );
}

export default App;

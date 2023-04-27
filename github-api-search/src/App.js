import { useState, useEffect } from "react";
import './App.css';
import Repo from './Repo';
import { Box, Button, colors, createTheme, FormControl, Grid, ThemeProvider, TextField, FormLabel } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.blue[500],
    }
  }
});

function App() {
  
  const [query, setQuery] = useState([]);
  const [items, setItems] = useState([]);

  const fetchRepos = async () => {
    const res = await fetch(`https://api.github.com/search/repositories?q=${query}`)
    const data = await res.json()
    setItems(data.items)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    fetchRepos();
  }

  const theme = createTheme({});
  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">

<Box my={4}>
<form onSubmit={handleSubmit}>
        <div>
          <TextField type="text" color='primary' variant='outlined' onChange={e => setQuery(e.target.value)}/>
          <Button variant="outlined" color="primary" type="submit">Search</Button>
        </div>
      </form>
</Box>
      

        { items.length ? 
          <section>
            <h1> Repository results for "{query}"</h1>
            <div>
              <Grid container spacing={3}>
                  {items.map((item) => (
                    <Grid item xs={4}>
                      <Repo key={item.id} {...item} />
                    </Grid>
                    ))}
              </Grid>
            </div>
          </section> : "Search for a repository"
        }
      </div>
    </ThemeProvider>
    
  );
}

export default App;

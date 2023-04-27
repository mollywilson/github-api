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
  const [language, setLanguage] = useState("JavaScript");

  const fetchRepos = async () => {
    const res = await fetch(`https://api.github.com/search/repositories?q=${query}+language=${language}`)
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
        <Box sx={{margin: 4}}>
          <h1>Search for a Repository</h1>
        </Box>

        <Box my={4}>
        <FormControl onSubmit={handleSubmit}>
          <Box>
            <TextField 
              type="text" 
              color='primary' 
              variant='outlined' 
              placeholder="e.g. React Hooks" 
              sx={{width: 600 }} 
              size='small' 
              onChange={e => setQuery(e.target.value)}/>
            <Button variant="outlined" color="primary" type="submit" sx={{height: 40, ml: 2}}>Search</Button>
          </Box>
        </FormControl>
        </Box>
        { items.length ? 
          <section>
            <Box sx={{mb: 2}}>
              <h1> Repository results for "{query}"</h1>
            </Box>
            <Box sx={{mx: 10}}>
              <Grid container spacing={3}>
                  {items.map((item) => (
                    <Grid item xs={4}>
                      <Repo key={item.id} {...item} />
                    </Grid>
                    ))}
              </Grid>
            </Box>
          </section> : ""
        }
      </div>
    </ThemeProvider>
    
  );
}

export default App;

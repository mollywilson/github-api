import { useState } from "react";
import './App.css';
import Repo from './Repo';
import { Box, Button, Grid, Radio, RadioGroup, TextField, FormControlLabel } from '@mui/material';

function App() {
  
  const [query, setQuery] = useState([]);
  const [items, setItems] = useState([]);
  const [language, setLanguage] = useState([]);

  const fetchRepos = async () => {
    const res = await fetch(`https://api.github.com/search/repositories?q=${query}+language=${language}`)
    const data = await res.json()
    setItems(data.items)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetchRepos();
  }
  
  return (
    <div className="App">
      <Box sx={{margin: 4}}>
        <h1>Search for a Repository</h1>
      </Box>
      <Box my={4}>
        <form onSubmit={handleSubmit}>
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
          <RadioGroup row sx={{ml: 75}}>
            <FormControlLabel value="javascript" control={<Radio />} label="JavaScript" onChange={e => setLanguage(e.target.value)} />
            <FormControlLabel value="java" control={<Radio />} label="Java" onChange={e => setLanguage(e.target.value)} />
            <FormControlLabel value="python" control={<Radio />} label="Python" onChange={e => setLanguage(e.target.value)} />
            <FormControlLabel value="typescript" control={<Radio />} label="TypeScript" onChange={e => setLanguage(e.target.value)} />
            <FormControlLabel value="php" control={<Radio />} label="PHP" onChange={e => setLanguage(e.target.value)} />
          </RadioGroup>
        </form>
      </Box>
      { items.length ? 
        <section>
          <Box sx={{mb: 2}}>
            <h1> Repository results for "{query}"</h1>
          </Box>
          <Box sx={{mx: 10}}>
            <Grid container spacing={3}>
                {items.map((item) => (
                  <Grid item xs={4} key={item.id} >
                    <Repo key={item.id} {...item} />
                  </Grid>
                  ))}
            </Grid>
          </Box>
        </section> : ""
      }
    </div>
  );
}

export default App;

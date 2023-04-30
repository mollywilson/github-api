import { useState } from "react";
import './App.css';
import Repo from './Repo';
import { 
  Box, 
  Button,
  FormControlLabel,
  Grid, 
  Radio, 
  RadioGroup, 
  TextField, 
  Typography 
} from '@mui/material';

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
    <Box className="App">
      <Box className="container">
        <Typography variant="h1">Search for a Repository</Typography>
      </Box>
      <Box className="form-box">
        <form onSubmit={handleSubmit}>
          <Box className="flex">
            <Box>
              <TextField 
                type="text" 
                color='primary' 
                variant='outlined' 
                placeholder="e.g. React Hooks" 
                className="input-field"
                size='small' 
                onChange={e => setQuery(e.target.value)}
                />
                <Box>
                  <RadioGroup row>
                    <FormControlLabel value="javascript" control={<Radio />} label="JavaScript" onChange={e => setLanguage(e.target.value)} />
                    <FormControlLabel value="java" control={<Radio />} label="Java" onChange={e => setLanguage(e.target.value)} />
                    <FormControlLabel value="python" control={<Radio />} label="Python" onChange={e => setLanguage(e.target.value)} />
                    <FormControlLabel value="typescript" control={<Radio />} label="TypeScript" onChange={e => setLanguage(e.target.value)} />
                    <FormControlLabel value="php" control={<Radio />} label="PHP" onChange={e => setLanguage(e.target.value)} />
                  </RadioGroup>
              </Box>
            </Box>
            <Button variant="outlined" type="submit" className="button">Search</Button>
          </Box>
        </form>
      </Box>
      { items.length ?
      <Box>
          <Box className="container">
            <Typography variant="h2" component="h4"> Repository results for "{query}"</Typography>
          </Box>
          <Box className="cards-grid">
            <Grid container spacing={3}>
                {items.map((item) => (
                  <Grid item xs={4} key={item.id} >
                    <Repo key={item.id} {...item} />
                  </Grid>
                  ))}
            </Grid>
          </Box> 
        </Box>: ""
      }
    </Box>
  );
}

export default App;

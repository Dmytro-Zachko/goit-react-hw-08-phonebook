import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "redux/FilterSlice";

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


export const Filter = () => {
     const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const { value } = event.currentTarget;
    dispatch(changeFilter(value));
  };

  const clearFilter = () => {
    dispatch(changeFilter(''));
  };

  return (<Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form"  noValidate sx={{ mt: 1 }}>
             <TextField
              margin="normal"
              required
              fullWidth
              id="filter"
              label="Filter"
              name="filter"
            autoComplete="Filter"
            value={filter}
            autoFocus
            onChange={handleFilterChange}
            />
            <Button
              type="button"
              fullWidth
          variant="contained"
          onClick={clearFilter}
              sx={{ mt: 3, mb: 2, }}
            >
              Clear
            </Button>
          </Box>
        </Box>
      </Container>   )
    
}
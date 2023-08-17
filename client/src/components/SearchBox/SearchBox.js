
import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CartContext from '../../store/cartContext';
import { Data } from '../Data/Data';

const SearchBox = ({ showSearch, handleClose }) => {
    const { searchProduct, setSearchProduct, searchHandler, setHomeData } = useContext(CartContext)
    const location = useLocation()
    let currLocation

    useEffect(() => {

        let data = Data.filter((data) => {
            return data.category == 'T-Shirt'
        })
        setHomeData(data)
}, [])
    return (
        <Dialog fullWidth='md' open={showSearch} onClose={handleClose}>
            <DialogTitle >Search</DialogTitle>
            <DialogContent>

                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Enter product name"
                    type="search"
                    fullWidth={true}
                    variant="standard"
                    value={searchProduct}
                    onChange={(e) => setSearchProduct(e.target.value)}

                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}>Cancel</Button>
                <Button onClick={() => {
                    currLocation = location.pathname
                    searchHandler(currLocation)
                    setSearchProduct('')
                }
                }>Search</Button>
            </DialogActions>
        </Dialog>
    )
}

export default SearchBox
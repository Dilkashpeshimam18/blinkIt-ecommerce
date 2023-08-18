import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CartContext from '../../store/cartContext';

const Logout = ({ handleClose }) => {
    const { showLogout, logout } = useContext(CartContext)
    return (
        <Dialog fullWidth='md' open={showLogout} onClose={handleClose}>
            <DialogTitle style={{ fontWeight: 'bold' }} >You are already login do you want to logout?</DialogTitle>
            <DialogContent>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={logout} >Logout</Button>
            </DialogContent>

        </Dialog>
    )
}

export default Logout
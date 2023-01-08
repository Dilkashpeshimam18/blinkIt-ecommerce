import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Verify from '.././assets/verified.gif'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const Orders = ({ open, handleClose }) => {
    return (
        <div >
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <div>
                        <img src={Verify} style={{ height: '250px', width: '250px' }} />

                    </div>
                    <DialogContentText>
                        <div style={{
                            display: 'flex', textAlign: 'center', justifyContent: 'center'
                        }}>

                            <h3>Order Successful!</h3>
                        </div>
                    </DialogContentText>


                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Orders
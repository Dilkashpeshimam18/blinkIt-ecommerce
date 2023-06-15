import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import Verify from '.././assets/verified.gif'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const Orders = ({ open, handleClose, razorpayPayment,stripePayment }) => {

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
                        {/* <img src={Verify} style={{ height: '250px', width: '250px' }} /> */}
                        Select Payment option:

                    </div>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'column', justifyContent:'center' }}>

                        <h3 onClick={razorpayPayment} style={{ cursor: 'pointer' }}>PAY WITH RAZORPAY</h3>

                        <h3 onClick={stripePayment} style={{ cursor: 'pointer' }}>PAY WITH STRIPE</h3>

                    </DialogContentText>


                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Orders
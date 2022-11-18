import React, { useContext } from 'react'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import CartMain from './CartMain/CartMain';

const SlidingCart = ({ isPane, setIsPane }) => {
    return (
        <SlidingPane
            className="some-custom-class"
            isOpen={isPane}
            title="PIZZA INN."
            hideHeader={true}
            width="600px"

            onRequestClose={() => {
                setIsPane(false)
            }}
        >
            <CartMain setIsPane={setIsPane} />
        </SlidingPane>
    )
}

export default SlidingCart
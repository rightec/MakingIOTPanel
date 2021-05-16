import React from "react";
import { Button, ButtonGroup} from 'react-bootstrap';
import './../components/ButtonPanel.css'

const ButtonPanel = (props) => {
    return (
        <div className="buttonPanelDiv">
            <ButtonGroup vertical   className="">
            {props.names.map(name=> <Button size="lg" block variant="primary">{name}</Button>)}
            </ButtonGroup>
        </div>

    )
}


export default ButtonPanel
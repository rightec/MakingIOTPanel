import React from "react";
import { Button, ButtonGroup} from 'react-bootstrap';

const ButtonPanel = (props) => {
    return (
        <div>
            <ButtonGroup vertical   className="justify-content-between">
            {props.names.map(name=> <Button size="lg" block variant="outline-secondary">{name}</Button>)}
            </ButtonGroup>
        </div>

    )
}


export default ButtonPanel
import {useDispatch} from "react-redux";
import {snsToSqsMessage} from "../features/transformer/transformerSlice";
import {Button} from "react-bootstrap";

const Process = () => {
    const dispatch = useDispatch()
    return (
        <div className="d-flex align-items-center">
            <Button
                className="m-3"
                onClick={() => {
                    dispatch(snsToSqsMessage())
                }}
                variant="outline-primary">Convert -></Button>
        </div>
    )
}

export default Process

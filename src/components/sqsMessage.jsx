import {useSelector} from "react-redux";
import {FloatingLabel, Form} from "react-bootstrap";


const SqsMessage = () => {
    const styles  = {
        height: "100%"
    }
    const {sqsMessage} = useSelector((state) => state)
    return (
        <FloatingLabel
            controlId="floatingTextarea"
            label="SQS Message"
            className="m-3 w-25"
        >
            <Form.Control
                as="textarea"
                placeholder="here is your SQS Message"
                value={JSON.stringify(sqsMessage, null, 4)}
                rows="100"
                readOnly
                style={styles}
            />
        </FloatingLabel>

    )
}
export default SqsMessage

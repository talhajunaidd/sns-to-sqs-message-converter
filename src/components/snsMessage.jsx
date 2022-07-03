import {useDispatch, useSelector} from "react-redux";
import {snsMessageChanged} from "../features/transformer/transformerSlice";
import {Alert, FloatingLabel, Form} from "react-bootstrap";
import {useState} from "react";


const SnsMessage = () => {
    const {snsMessage} = useSelector((state) => state)
    const dispatch = useDispatch()
    const styles = {
        height: "100%"
    }
    const [error, setError] = useState({message: ""})
    let alert_component = ""
    if (error.message) {
        alert_component = <Alert variant="danger">{error.message}</Alert>
    }


    return (
        <div className="m-3 w-25">
            <FloatingLabel
                controlId="floatingTextarea"
                label="SNS Message"
                className="mb-3"
                style={styles}
            >
                <Form.Control
                    onChange={(event) => {
                        setError({message: ""})
                        const string_value = event.currentTarget.value
                        try {
                            const parsed_message = JSON.parse(string_value)
                            dispatch(snsMessageChanged(parsed_message))
                        } catch (e) {
                            setError({...error, message: e.toString()})
                        }
                    }}
                    as="textarea"
                    placeholder="Enter SNS message here"
                    style={styles}
                    defaultValue={JSON.stringify(snsMessage, null, 4)}
                />

            </FloatingLabel>
            {alert_component}
        </div>
    )
}

export default SnsMessage

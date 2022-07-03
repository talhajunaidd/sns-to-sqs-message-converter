import SnsMessage from "./snsMessage";
import Process from "./process";
import SqsMessage from "./sqsMessage";


const JsonView = () => {
    const styles = {
        height: "40rem"
    }
    return (

        <div className="d-flex justify-content-center" style={styles}>
            <SnsMessage/>
            <Process/>
            <SqsMessage/>
        </div>
    )
}
export default JsonView

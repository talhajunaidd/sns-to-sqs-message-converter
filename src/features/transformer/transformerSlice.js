import {createSlice} from "@reduxjs/toolkit";

const convert_to_sqs = (sns_message) => {
    return {
        Records: [
            {
                body: JSON.stringify(sns_message)
            }
        ]
    }
}

const message = {
    "hello": "world"
}

const transformerSlice = createSlice({
    name: "transformer",
    initialState: {
        snsMessage: message,
        sqsMessage: convert_to_sqs(message)
    },
    reducers: {
        snsToSqsMessage(state) {
            return {
                ...state,
                sqsMessage: convert_to_sqs(state.snsMessage)
            }
        },
        snsMessageChanged(state, new_value) {
            return {
                ...state,
                snsMessage: new_value.payload
            }
        }
    }
})

export const {snsToSqsMessage, snsMessageChanged} = transformerSlice.actions
export default transformerSlice.reducer

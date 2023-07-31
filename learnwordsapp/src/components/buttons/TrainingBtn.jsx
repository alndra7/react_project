import "./TrainingBtn.scss"

function TrainingBtn(props) {

    return (
        <button className="trainingBtn" onClick={() => props.clb()}>{props.text}</button>
    )
}

export default TrainingBtn;
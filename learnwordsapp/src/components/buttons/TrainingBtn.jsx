import "./TrainingBtn.scss"

function TrainingBtn(props) {

    return (
        <button className={props.className} onClick={() => props.clb()}>{props.text}</button>
    )
}

export default TrainingBtn;
export const FeedbackOptions = (props) => {

    const {options, onLeaveFeedback} = props
    
    return <>
      <div style={{display:'flex'}}>
        <button onClick={() => onLeaveFeedback('good')}>Good</button>
        <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
        <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
      </div>
    </>
}
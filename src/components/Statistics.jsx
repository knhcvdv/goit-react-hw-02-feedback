export const Statistics = (props) => {
    const {good, neutral, bad, total, positivePercentage} = props


    return <>
        <div>
            <div>Good: {good}</div>
            <div>Neutral: {neutral}</div>
            <div>Bad: {bad}</div>
            <div>Total: {total}</div>
            <div>Positive feedback: {positivePercentage}%</div>
        </div>
      </>
}
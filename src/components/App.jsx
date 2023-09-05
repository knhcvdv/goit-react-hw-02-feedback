import React, { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics";
import { Notification } from "./Notification";
import { Section } from "./Section";

export const App = () => {

  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })
  const countTotalFeedback = () => {
    const keys = Object.keys(state);
    let total = 0;
    keys.forEach((key) => {
      total+=state[key] 
    })
    return total
  }
  const totalFeedback = countTotalFeedback()

  const countPositiveFeedbackPercentage = () => {

    const positive = state.good

    return Math.floor((positive / totalFeedback) * 100);
  }

  const handleChangeOptions = (key) => {
    setState(prev => ({ ...prev, [key]: prev[key] + 1 }));
  }
  return (
    <div>
      <Section title="Please give your feedback">
        <FeedbackOptions options={state} onLeaveFeedback={handleChangeOptions} />
      </Section>
      {totalFeedback > 0 ? (
        <Section title="Statistics">
          <Statistics 
            good={state.good} 
            neutral={state.neutral}  
            bad={state.bad} 
            total={totalFeedback} 
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

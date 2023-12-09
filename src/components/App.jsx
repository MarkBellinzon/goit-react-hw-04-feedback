import { useState } from 'react';
import css from './App.module.css';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const handleLeaveFeedback = event => () => {
    switch (event) {
      case 'good': {
        setGood(good + 1);
        break;
      }
      case 'neutral': {
        setNeutral(neutral + 1);
        break;
      }
      case 'bad': {
        setBad(bad + 1);
        break;
      }
      default:
        break;
    }
  };

  return (
    <div className={css.form}>
      <Section>
        <FeedbackOptions
          options={Object.keys({ good: good, neutral: neutral, bad: bad })}
          onLeaveFeedback={handleLeaveFeedback}
        />

        {countTotalFeedback() === 0 ? (
          <Notification />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};

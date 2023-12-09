import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.form}>
    {options.map(option => (
      <button
        className={css.button}
        key={option}
        type="button"
        onClick={onLeaveFeedback(option)}
      >
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

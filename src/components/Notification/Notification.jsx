import PropTypes from 'prop-types';
import css from './Notification.module.css'

export const Notification = ({ message }) => (
  <p className={css.title}>{(message = 'There is no feedback')}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

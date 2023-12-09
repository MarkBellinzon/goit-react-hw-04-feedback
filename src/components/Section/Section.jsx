import PropTypes from 'prop-types';
import css from './Section.module.css'

export const Section = ({ title, children }) => (
  <section>
    <h2 className={css.title}>{(title = 'Please leave feedback')}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

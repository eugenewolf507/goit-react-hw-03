import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ incomeTotal, expenseTotal, balance }) => (
  <section className={styles.balance}>
    <span>
      <span className={styles.arrowGreen}>⬆</span>
      {incomeTotal}$
    </span>
    <span>
      <span className={styles.arrowRed}>⬇</span>
      {expenseTotal}$
    </span>
    <span>Balance: {balance}$</span>
  </section>
);

Balance.defaultProps = {
  incomeTotal: 0,
  expenseTotal: 0,
  balance: 0,
};

Balance.propTypes = {
  incomeTotal: PropTypes.number,
  expenseTotal: PropTypes.number,
  balance: PropTypes.number,
};

export default Balance;

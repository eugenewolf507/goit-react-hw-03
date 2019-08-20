import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ changeInputValue, deposit, withdraw, inputValue }) => (
  <section className={styles.controls}>
    <input
      type="number"
      name="transactionInput"
      onChange={changeInputValue}
      value={inputValue}
      className={styles.input}
      placeholder="0"
    />
    <button
      type="button"
      name="deposit"
      onClick={deposit}
      className={styles.button}
    >
      Deposit
    </button>
    <button
      type="button"
      name="withdraw"
      onClick={withdraw}
      className={styles.button}
    >
      Withdraw
    </button>
  </section>
);

Controls.defaultProps = {
  inputValue: 0,
};

Controls.propTypes = {
  changeInputValue: PropTypes.func.isRequired,
  deposit: PropTypes.func.isRequired,
  withdraw: PropTypes.func.isRequired,
  inputValue: PropTypes.number,
};

export default Controls;

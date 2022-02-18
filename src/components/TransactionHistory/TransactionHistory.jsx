// TransactionHistory

import css from"./transactionhistory.module.css";
import PropTypes from 'prop-types';


////////factoring//////
const TransactionHistory = ({items}) => {
   const element =  items.map(item => {
    const { id, type, amount, currency } = item;
  return (<tr key={id} className="somenames">
    <td className={css.td}>{type}</td>
    <td className={css.td}>{amount}</td>
    <td className={css.td}>{currency}</td>
  </tr>)
});
    return (
            <table className={css.table}>
  <thead>
    <tr>
      <th className={css.th}>Type</th>
      <th className={css.th}>Amount</th>
      <th className={css.th}>Currency</th>
    </tr>
  </thead>

  <tbody>
   {element}
  </tbody>
</table>
        
    )
}
// TransactionHistory.defaultProps = {
//     items: [],
// }
TransactionHistory.defaultProps = {
    items: [],
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}

export default TransactionHistory;
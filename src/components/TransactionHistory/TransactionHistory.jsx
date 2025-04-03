import Transaction from "./Transaction";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr>
          <th className={s.th}>№</th>
          <th className={s.th}>PRICE</th>
          <th className={s.th}>AMOUNT</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <Transaction key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

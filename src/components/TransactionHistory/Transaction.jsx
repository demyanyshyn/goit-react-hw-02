import s from "./TransactionHistory.module.css";
const Transaction = ({ id, type, amount, currency }) => {
  return (
    <tr className={s.tr} key={id}>
      <td className={s.td}>{type}</td>
      <td className={s.td}>{amount}</td>
      <td className={s.td}>{currency}</td>
    </tr>
  );
};

export default Transaction;

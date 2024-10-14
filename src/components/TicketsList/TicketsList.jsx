import styles from './TicketsList.module.scss';
import Ticket from '../Ticket/Ticket.jsx';

export default function TicketsList() {
  return (
    <>
      <ul className={styles['tickets-list']}>
        <li>
          <Ticket />
        </li>
        <li>
          <Ticket />
        </li>
      </ul>
      <button className={styles['show-more-button']}>Показать еще 5 билетов!</button>
    </>
  );
}

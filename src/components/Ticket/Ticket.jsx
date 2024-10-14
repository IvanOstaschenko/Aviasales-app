import styles from './Ticket.module.scss';

export default function Ticket() {
  return (
    <div className={styles.ticket}>
      <div className={styles['ticket-header']}>
        <span className={styles['ticket-price']}>13 400 Р</span>
        <img src="/S7%20Logo.png" alt="company logo" width="110" height="36" loading="lazy" />
      </div>
      <div className={styles['ticket-body']}>
        <div className={styles['ticket-info-row']}>
          <div className={styles['ticket-info-block']}>
            <div className={styles['info-head']}>MOW – HKT</div>
            <div className={styles['info-body']}>10:45 – 08:00</div>
          </div>
          <div className={styles['ticket-info-block']}>
            <div className={styles['info-head']}>В пути</div>
            <div className={styles['info-body']}>21ч 15м</div>
          </div>
          <div className={styles['ticket-info-block']}>
            <div className={styles['info-head']}>2 пересадки</div>
            <div className={styles['info-body']}>HKG, JNB</div>
          </div>
        </div>
        <div className={styles['ticket-info-row']}>
          <div className={styles['ticket-info-block']}>
            <div className={styles['info-head']}>MOW – HKT</div>
            <div className={styles['info-body']}>11:20 – 00:50</div>
          </div>
          <div className={styles['ticket-info-block']}>
            <div className={styles['info-head']}>В пути</div>
            <div className={styles['info-body']}>13ч 30м</div>
          </div>
          <div className={styles['ticket-info-block']}>
            <div className={styles['info-head']}>1 пересадка</div>
            <div className={styles['info-body']}>HKG</div>
          </div>
        </div>
      </div>
    </div>
  );
}

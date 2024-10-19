import { PropTypes } from 'prop-types';
import styles from './Ticket.module.scss';
import { flightTime, translateMinToMill, translateTransferNote } from '../../utils/utils.js';
import { format } from 'date-fns';

export default function Ticket({ info }) {
  const { price, carrier } = info;
  console.log(info);
  return (
    <div className={styles.ticket}>
      <div className={styles['ticket-header']}>
        <span className={styles['ticket-price']}>{price} Р</span>
        <img
          src={`http://pics.avs.io/99/36/${carrier}.png`}
          alt="company logo"
          width="110"
          height="36"
          loading="lazy"
        />
      </div>
      <div className={styles['ticket-body']}>
        <div className={styles['ticket-info-row']}>
          <div className={styles['ticket-info-block']}>
            <div
              className={styles['info-head']}
            >{`${info.segments[0].origin} – ${info.segments[0].destination}`}</div>
            <div
              className={styles['info-body']}
            >{`${format(new Date(info.segments[0].date), 'HH:mm')} – ${format(flightTime(info.segments[0].date, info.segments[0].duration), 'HH:mm')}`}</div>
          </div>
          <div className={styles['ticket-info-block']}>
            <div className={styles['info-head']}>В пути</div>
            <div className={styles['info-body']}>
              {format(new Date(translateMinToMill(info.segments[0].duration)), 'HHч:mmм')}
            </div>
          </div>
          <div className={styles['ticket-info-block']}>
            <div className={styles['info-head']}>
              {translateTransferNote(info.segments[0].stops.length)}
            </div>
            <div className={styles['info-body']}>HKG, JNB</div>
          </div>
        </div>
        <div className={styles['ticket-info-row']}>
          <div className={styles['ticket-info-block']}>
            <div
              className={styles['info-head']}
            >{`${info.segments[1].origin} – ${info.segments[1].destination}`}</div>
            <div
              className={styles['info-body']}
            >{`${format(new Date(info.segments[1].date), 'HH:mm')} – ${format(flightTime(info.segments[1].date, info.segments[0].duration), 'HH:mm')}`}</div>
          </div>
          <div className={styles['ticket-info-block']}>
            <div className={styles['info-head']}>В пути</div>
            <div className={styles['info-body']}>13ч 30м</div>
          </div>
          <div className={styles['ticket-info-block']}>
            <div className={styles['info-head']}>
              {translateTransferNote(info.segments[1].stops.length)}
            </div>
            <div className={styles['info-body']}>HKG</div>
          </div>
        </div>
      </div>
    </div>
  );
}
Ticket.propTypes = {
  info: PropTypes.object.isRequired,
};

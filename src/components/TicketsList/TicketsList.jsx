import styles from './TicketsList.module.scss';
import Ticket from '../Ticket/Ticket.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchSearchID, fetchTickets } from '../../slices/fetchSlice.js';
import _ from 'lodash';
import { Commet } from 'react-loading-indicators';

export default function TicketsList() {
  const dispatch = useDispatch();
  const { tickets, searchID, status } = useSelector((state) => state.tickets);
  const { transfer, priceQuality } = useSelector((state) => state.filters);
  const [list, setList] = useState([]);
  const [showTicket, setShowTicket] = useState(5);

  const ticketsFilter = () => {
    const { all, content } = transfer;
    if (all) {
      return [...tickets];
    }
    const sortedFilters = _.pickBy(content, (value) => value);
    const keys = Object.keys(sortedFilters);
    if (keys.length === 0) {
      return [];
    }
    return _.filter([...tickets], (item) => {
      return (
        keys.includes(String(item.segments[0].stops.length)) ||
        keys.includes(String(item.segments[1].stops.length))
      );
    });
  };

  const ticketsSort = (arr) => {
    switch (priceQuality) {
      case 'fast':
        return [...arr].sort((a, b) => {
          return (
            a.segments[0].duration +
            a.segments[1].duration -
            b.segments[0].duration -
            b.segments[1].duration
          );
        });
      case 'price':
        return [...arr].sort((a, b) => a.price - b.price);
    }
    return [...arr];
  };

  useEffect(() => {
    if (!searchID) {
      dispatch(fetchSearchID());
    } else {
      if (status !== 'resolved') {
        dispatch(fetchTickets());
      }
    }
  }, [dispatch, searchID, tickets, status]);

  useEffect(() => {
    if (tickets.length > 0) {
      setList(ticketsSort(ticketsFilter()));
    }
  }, [tickets, transfer]);

  useEffect(() => {
    if (list.length > 0) {
      setList(ticketsSort(list));
    }
  }, [priceQuality]);
  return (
    <>
      <div className={styles['indicator-area']}>
        {status === 'loading' && <Commet color="#2196F3" size="small" text="" textColor="" />}
      </div>
      <ul className={styles['tickets-list']}>
        {list.slice(0, showTicket).map((ticket) => (
          <li key={ticket.id}>
            <Ticket info={ticket} />
          </li>
        ))}
      </ul>
      <button
        className={styles['show-more-button']}
        onClick={() => setShowTicket((val) => val + 5)}
      >
        Показать еще 5 билетов!
      </button>
    </>
  );
}

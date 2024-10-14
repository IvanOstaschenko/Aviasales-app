// import '../../styles/normalize.css';
import styles from './App.module.scss';
import FilterOfTransfers from '../FilterOfTransfers/FilterOfTransfers.jsx';
import Header from '../Header/Header.jsx';
import PriceAndQualityFilter from '../priceAndQualityFilter/PriceAndQualityFilter.jsx';
import TicketsList from '../TicketsList/TicketsList.jsx';

export default function App() {
  return (
    <div className={styles['page-container']}>
      <Header />
      <main className={styles.main}>
        <div>
          <FilterOfTransfers />
        </div>
        <div className={styles['w-100']}>
          <PriceAndQualityFilter />
          <TicketsList />
        </div>
      </main>
    </div>
  );
}

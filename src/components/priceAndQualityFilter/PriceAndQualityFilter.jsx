import styles from './PriceAndQualityFilter.module.scss';
import { useDispatch } from 'react-redux';
import { filterPriceQuality } from '../../slices/filterPriceQualSlice.js';
export default function PriceAndQualityFilter() {
  const dispatch = useDispatch();
  const handler = (val) => {
    dispatch(filterPriceQuality(val));
  };
  return (
    <form
      className={styles.form}
      onChange={(e) => {
        handler(e.target.value);
      }}
    >
      <label className={styles['custom-label']}>
        <input
          type="radio"
          className={styles['visually-hidden']}
          name="priceQuality"
          defaultChecked={true}
          value="price"
        />
        Самый дешевый
      </label>
      <label className={styles['custom-label']}>
        <input
          type="radio"
          className={styles['visually-hidden']}
          name="priceQuality"
          value="quality"
        />
        Самый быстрый
      </label>
      <label className={styles['custom-label']}>
        <input
          type="radio"
          className={styles['visually-hidden']}
          name="priceQuality"
          value="optimal"
        />
        Оптимальный
      </label>
    </form>
  );
}

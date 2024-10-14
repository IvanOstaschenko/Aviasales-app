import styles from './FilterOfTransfers.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTransferFilter } from '../../slices/filterOfTransferSlice.js';

export default function FilterOfTransfers() {
  const dispatch = useDispatch();
  const selectedFilters = useSelector((state) => state.toggleTransferFilter);
  const handlerInputChange = (text) => {
    dispatch(toggleTransferFilter(text));
  };
  return (
    <form
      className={'custom-form ' + styles['filter-transfer']}
      onChange={(e) => {
        handlerInputChange(e.target.name);
      }}
    >
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Количество пересадок</legend>
        <label className={styles['custom-label']}>
          <input
            type="checkbox"
            className={styles['visually-hidden']}
            name="all"
            checked={selectedFilters.all}
          />
          <span className={styles['custom-checkbox']}></span>
          Все
        </label>
        <label className={styles['custom-label']}>
          <input
            type="checkbox"
            className={styles['visually-hidden']}
            name="none"
            checked={selectedFilters.none}
          />
          <span className={styles['custom-checkbox']}></span>
          Без пересадок
        </label>
        <label className={styles['custom-label']}>
          <input
            type="checkbox"
            className={styles['visually-hidden']}
            name="one"
            checked={selectedFilters.one}
          />
          <span className={styles['custom-checkbox']}></span>1 пересадка
        </label>
        <label className={styles['custom-label']}>
          <input
            type="checkbox"
            className={styles['visually-hidden']}
            name="two"
            checked={selectedFilters.two}
          />
          <span className={styles['custom-checkbox']}></span>2 пересадки
        </label>
        <label className={styles['custom-label']}>
          <input
            type="checkbox"
            className={styles['visually-hidden']}
            name="three"
            checked={selectedFilters.three}
          />
          <span className={styles['custom-checkbox']}></span>3 пересадки
        </label>
      </fieldset>
    </form>
  );
}

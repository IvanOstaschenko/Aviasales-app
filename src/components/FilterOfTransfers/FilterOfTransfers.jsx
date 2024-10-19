import styles from './FilterOfTransfers.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTransferFilter } from '../../slices/filtersSlice.js';

export default function FilterOfTransfers() {
  const dispatch = useDispatch();
  const { all, content } = useSelector((state) => state.filters.transfer);
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
          <input type="checkbox" className={styles['visually-hidden']} name="all" checked={all} />
          <span className={styles['custom-checkbox']}></span>
          Все
        </label>
        <label className={styles['custom-label']}>
          <input
            type="checkbox"
            className={styles['visually-hidden']}
            name="0"
            checked={content[0]}
          />
          <span className={styles['custom-checkbox']}></span>
          Без пересадок
        </label>
        <label className={styles['custom-label']}>
          <input
            type="checkbox"
            className={styles['visually-hidden']}
            name="1"
            checked={content[1]}
          />
          <span className={styles['custom-checkbox']}></span>1 пересадка
        </label>
        <label className={styles['custom-label']}>
          <input
            type="checkbox"
            className={styles['visually-hidden']}
            name="2"
            checked={content[2]}
          />
          <span className={styles['custom-checkbox']}></span>2 пересадки
        </label>
        <label className={styles['custom-label']}>
          <input
            type="checkbox"
            className={styles['visually-hidden']}
            name="3"
            checked={content[3]}
          />
          <span className={styles['custom-checkbox']}></span>3 пересадки
        </label>
      </fieldset>
    </form>
  );
}

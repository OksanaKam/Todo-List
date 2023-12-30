import React from 'react';
import styles from './styles.module.scss';
import { SORTING_STATUS, SORTING_OPTIONS, SORTING_NAME } from '../../utils/status';
import { useDispatch } from 'react-redux';
import { selectStatus } from '../../store/filterSlice';
import { sortName, sortFinishedDate} from '../../store/todoSlice'

const Sorting = () => {

  const dispatch = useDispatch();

  const handleChangeStatus = (e) => {
    dispatch(selectStatus(e.target.value));
  }

  const handleSortingName = (e) => {
    dispatch(sortName(e.target.value));
  }

  const handleSortingDate = (e) => {
    dispatch(sortFinishedDate(e.target.value));
  }

  return (
    <div className={styles.sorting}>
      <form className={styles.sorting__group}>
        <label className={styles.sorting__title} htmlFor="sorting-name">По имени</label>
        <select
          className={styles.sorting__select}
          name="sorting-name"
          id="sorting-name"
          onChange={handleSortingName}
        >
        {SORTING_NAME.map((item) => (
          <option
            key={item.id}
            value={item.labelName}
            onClick={handleChangeStatus}
          >
            {item.labelName}
          </option>
        ))}
        </select>
      </form>
      <form className={styles.sorting__group}>
        <label className={styles.sorting__title} htmlFor="sorting-status">Статус</label>
        <select
          className={styles.sorting__select}
          name="sorting-status"
          id="sorting-status"
          onChange={handleChangeStatus}
        >
        {SORTING_STATUS.map((item) => (
          <option
            key={item.id}
            value={item.category}
          >
            {item.category}
          </option>
        ))}
        </select>
      </form>
      <form className={styles.sorting__group}>
        <label className={styles.sorting__title} htmlFor="sorting-date">По дате</label>
        <select
          className={styles.sorting__select}
          name="sorting-date"
          id="sorting-date"
          onChange={handleSortingDate}
        >
        {SORTING_OPTIONS.map((item) => (
          <option
            key={item.id}
            value={item.id}
          >
            {item.labelName}
          </option>
        ))}
        </select>
      </form>
    </div>
  )
}

export default Sorting;

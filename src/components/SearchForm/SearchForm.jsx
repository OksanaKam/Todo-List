import React from "react";
import styles from './styles.module.scss';

function SearchForm({ query, validMessage, handleSubmit, onChange }) {
  return (
    <section className={styles.search}>
      <form className={styles.search__form} onSubmit={handleSubmit} noValidate>
        <div className={styles.search__group}>
          <input className={styles.search__input}
                 name="search"
                 placeholder="Поиск"
                 type="text"
                 value={query}
                 onChange={onChange}/>
          <button className={styles.search__button} type="submit"></button>
        </div>
        <span className={styles.search__error}>{validMessage}</span>
      </form>
    </section>
  )
}

export default SearchForm;

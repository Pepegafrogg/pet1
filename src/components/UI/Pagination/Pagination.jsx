import React from 'react';
import { getPagesArray } from '../../utils/pajes';
import s from './Pagination.module.css';

const Pagination = ({ totalPages, page, changePage }) => {
   let pagesArray = getPagesArray(totalPages)
   return (
      <div className={s.page__wrapper}>
         {pagesArray.map(p =>
            <span onClick={() => changePage(p)} key={p} className={page === p ? `${s.page} ${s.page__current}` : s.page}>{p}</span>
         )
         }
      </div >
   );
}

export default Pagination;

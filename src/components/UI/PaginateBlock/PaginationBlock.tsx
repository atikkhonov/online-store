import React from 'react'
import ReactPaginate from 'react-paginate'

import styles from './Pagination.module.scss'

interface PaginateBlockProps {
  onChangePage: (number: number) => void
  currentPage: number
}

const PaginationBlock: React.FC<PaginateBlockProps> = React.memo(({ onChangePage, currentPage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(i) => onChangePage(i.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={6}
      forcePage={currentPage - 1}
    />
  )
})

export default PaginationBlock
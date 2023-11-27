import { SortBy } from '../../types/SortBy';
import { DropDown } from '../DropDown';

import './ProductListFilter.scss';

const sortOptions = [
  { label: 'Newest', value: SortBy.AGE },
  { label: 'Alphabetically', value: SortBy.NAME },
  { label: 'Cheapest', value: SortBy.PRICE },
];

const perPageOptions = [
  { label: '16', value: '16' },
  { label: '8', value: '8' },
  { label: '4', value: '4' },
  { label: 'All', value: 'all' },
];

export const ProductListFilter = () => {
  return (
    <section className="Page-ProductListFilter ProductListFilter">
      <DropDown
        options={sortOptions}
        label="Sort by"
        searchParamName="sort"
      />
      <DropDown
        options={perPageOptions}
        label="Items on page"
        searchParamName="perPage"
      />
    </section>
  );
};
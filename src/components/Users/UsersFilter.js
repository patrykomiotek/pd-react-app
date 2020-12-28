function UsersFilter({ filterValue, onFilterChange, onRemoveFilter }) {
  return (
    <div className="users-filter">
      <input type="text" value={filterValue} onChange={onFilterChange} />
      {filterValue && <button onClick={onRemoveFilter}>Remove filter</button>}
    </div>
  );
}

export default UsersFilter;

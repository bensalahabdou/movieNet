import React from 'react'

  const FilterName = ({value = '', onChange = () => {}}) => (
    <div className="name-filter">
        <input
            className="name-filter-text"
            type="search"
            value={value}
            onChange={(event) => {
                onChange(event.target.value)
            }} />
      </div>
)

export default FilterName;
import React from 'react'

  const FilterName = ({value = '', onChange = () => {}}) => (
    <div className="name-filter">
        <input
            className="name-filter-text"
            type="search"
            placeholder="Entrez le nom du film"
            value={value}
            onChange={(event) => {
                onChange(event.target.value)
            }} />
      </div>
)

export default FilterName;
import React, { useState } from 'react'
import HealthCondition from './HealthCondition';
import Categories from './Categories';
import ShopConditionSlider from './ShopConditionSlider'; 
import { Button } from 'react-bootstrap';
import Filter from './Filter';
import { FaFilter } from 'react-icons/fa';
import { BsFilter } from 'react-icons/bs';


function ProductsSlider({ filter, name }) {
    const [filterData, setFilterData] = useState(false);

    // const filterItem = () => {
    //     setFilterData(!filterData);
    // }
    return (
        <div className="u-content-wrapper u-m-t--50 u-zIndex-reset">
            <Button style={{ outline: "none", marginBottom: '20px' }} className='btn' onClick={() => setFilterData(!filterData)}>
                {filterData ? <><BsFilter /><span style={{marginLeft: "10px"}}>Close Filter</span></> : <><FaFilter /><span style={{marginLeft: "10px"}}>Filter Products</span></>}
            </Button>
            {filterData && <Filter filter={filter} name={name} />}
            <div>
                <div className="text-charcoal-grey text-alpha u-text--bold">
                    Browse medicines &amp; health products
                </div>
                <HealthCondition />
                <Categories />
                <ShopConditionSlider />
            </div>
        </div>
    )
}

export default ProductsSlider;
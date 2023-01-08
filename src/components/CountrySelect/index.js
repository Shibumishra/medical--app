import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';

const CountrySelect = () => {
    const [selected, setSelected] = useState("");
    const onSelect = (code) => setSelected(code);

    const showSelectedLabel = (true);
    const showSecondarySelectedLabel = (

        true
    );
    const selectedSize = (16);
    const showOptionLabel = (true);
    const showSecondaryOptionLabel = (true);
    const optionsSize = (16);
    const placeholder = ("");
    const searchable = (false);
    const searchPlaceholder = ("");
    const alignOptionsToRight = (false);
    const fullWidth = (true);
    const disabled = (false);

    return (
        <div className="demo-wrapper">
            <ReactFlagsSelect
                selected={selected}
                onSelect={onSelect}
                showSelectedLabel={showSelectedLabel}
                showSecondarySelectedLabel={showSecondarySelectedLabel}
                selectedSize={selectedSize}
                showOptionLabel={showOptionLabel}
                showSecondaryOptionLabel={showSecondaryOptionLabel}
                optionsSize={optionsSize}
                placeholder={placeholder}
                searchable={searchable}
                searchPlaceholder={searchPlaceholder}
                alignOptionsToRight={alignOptionsToRight}
                fullWidth={fullWidth}
                disabled={disabled}
            />
        </div>
    );
}

export default CountrySelect;
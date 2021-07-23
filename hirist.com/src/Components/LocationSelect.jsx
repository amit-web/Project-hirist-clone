import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

import { Select, CaretIcon, ModalCloseButton } from 'react-responsive-select';

// for default styles...
import 'react-responsive-select/dist/react-responsive-select.css';

export const LocationSelect = (props) => {
    const options = [
        { label: "Mumbai", value: "Mumbai" },
        { label: "Pune", value: "Pune" },
        { label: "Nashik", value: "Nashik" },
        { label: "Ahemedabad", value: "Ahemedabad" },
        { label: "Delhi", value: "Delhi" },
        { label: "Kolkata", value: "Kolkata" },
        { label: "Gurgaon", value: "Gurgaon" },
        { label: "Noyda", value: "Noyda" },
        { label: "Hyderabad", value: "Hyderabad" },
        { label: "Chennai", value: "Chennai" },
        { label: "Bangalore", value: "Bangalore" },
        { label: "Nagpur", value: "Nagpur" },
        { label: "Bhopal", value: "Bhopal" },
        { label: "Gandhinagar", value: "Gandhinagar" },
        { label: "Chandigadh", value: "Chandigadh" },
        { label: "Lakhnow", value: "Lakhnow" },
    ];

    const [selected, setSelected] = useState([]);
    const locationData = JSON.stringify(selected);
    const overrideStrings = {
        "allItemsAreSelected": "All items are selected.",
        "clearSearch": "Clear Search",
        "noOptions": "No options",
        "search": "Search job location here",
        "selectAll": "Anywhere in India",
        "selectSomeItems": "Location"
    }

    props.getlocation(locationData)
    return (
        <div>
            <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
                overrideStrings={overrideStrings}
            />
        </div>
    );
};




export const Form = (props) => (
    <form>
        <Select
            name="experience"
            modalCloseButton={<ModalCloseButton />}
            options={[
                { value: '', text: 'Experience' },
                { value: 'anyexp', text: 'Any Exp. Level' },
                { value: '0-1', text: '0-1 yrs' },
                { value: '1-3', text: '1-3 yrs' },
                { value: '4-6', text: '4-6 yrs' },
                { value: '7-10', text: '7-10 yrs' },
                { value: '11-15', text: '11-15 yrs' },
                { value: '15+', text: '15+ yrs' },

            ]}
            caretIcon={<CaretIcon />}
            onChange={newValue => props.getExperience(newValue.value)}
            onSubmit={() => console.log('onSubmit')}
        />
    </form>
);
;

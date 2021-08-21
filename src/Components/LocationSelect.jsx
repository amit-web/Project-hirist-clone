import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

import { Select, CaretIcon, ModalCloseButton } from 'react-responsive-select';

// for default styles...
import 'react-responsive-select/dist/react-responsive-select.css';

export const LocationSelect = (props) => {
    const options = [
        { label: "Mumbai", value: "mumbai" },
        { label: "Pune", value: "pune" },
        { label: "Nashik", value: "nashik" },
        { label: "Ahemedabad", value: "ahemedabad" },
        { label: "Delhi", value: "delhi" },
        { label: "Kolkata", value: "kolkata" },
        { label: "Gurgaon", value: "gurgaon" },
        { label: "Noyda", value: "noyda" },
        { label: "Hyderabad", value: "hyderabad" },
        { label: "Chennai", value: "chennai" },
        { label: "Bangalore", value: "bangalore" },
        { label: "Nagpur", value: "nagpur" },
        { label: "Bhopal", value: "bhopal" },
        { label: "Gandhinagar", value: "gandhinagar" },
        { label: "Chandigadh", value: "chandigadh" },
        { label: "Lakhnow", value: "lakhnow" },
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
                { value: '0-1 Years', text: '0-1 yrs' },
                { value: '1-3 Years', text: '1-3 yrs' },
                { value: '4-6 Years', text: '4-6 yrs' },
                { value: '7-10 Years', text: '7-10 yrs' },
                { value: '11-15 Years', text: '11-15 yrs' },
                { value: '15+ Years', text: '15+ yrs' },


            ]}
            caretIcon={<CaretIcon />}
            onChange={newValue => props.getExperience(newValue.value)}
            onSubmit={() => console.log('onSubmit')}
        />
    </form>
);
;

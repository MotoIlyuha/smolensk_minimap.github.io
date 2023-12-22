import React, {useState, useEffect} from 'react';
import './Category.css';

// Assuming the JSON file is named "categories.json" and located in the public folder or appropriate path
import categoriesData from '../data.json';  // Update the path accordingly

const Accordion = () => {
    const [categories, setCategories] = useState({});
    const [openCategories, setOpenCategories] = useState({});

    // Fetch and set categories data from the file
    useEffect(() => {
        // Simulating a fetch request if the file is local or assuming direct import works
        setCategories(categoriesData);
    }, []);  // Empty dependency array to run only once after the component mounts

    const toggleCategory = (category) => {
        setOpenCategories(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    return (
        <div className="accordion-container"> {/* This div is the scrollable container */}
            {Object.entries(categories).map(([category, details]) => (
                <div key={category}>
                    <button
                        style={{backgroundColor: details.color}}
                        className="category-btn"
                        onClick={() => toggleCategory(category)}
                    >
                        {category} {openCategories[category] ? '-' : '+'}
                    </button>
                    {openCategories[category] && (
                        <ul className="category-list">
                            {details.items.map((item, index) => (
                                <li key={index} style={{color: details.color}}>
                                    {details.icon && <img src={details.icon} alt="icon" className="icon"/>}
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;

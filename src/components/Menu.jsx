import React, { useState, useEffect } from 'react';
import './SideMenu.css';

const SideMenu = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        const section = document.querySelector('#section4');

        // Проверяем, что элемент существует, прежде чем вызывать getBoundingClientRect
        if (section) {
            const position = section.getBoundingClientRect();

            // Показываем меню, если пользователь долистал до #section4
            if(position.top >= 0 && position.bottom <= window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`side-menu ${isVisible ? 'visible' : ''} ${isOpen ? 'open' : 'closed'}`}>
            <button className="toggle-button" onClick={toggleMenu}>
                {isOpen ? 'Скрыть' : 'Показать'}
            </button>

            {/* Здесь ваше меню */}
            <p>Пункт меню 1</p>
            <p>Пункт меню 2</p>
            <p>Пункт меню 3</p>
            {/* ... */}
        </div>
    );
};

export default SideMenu;

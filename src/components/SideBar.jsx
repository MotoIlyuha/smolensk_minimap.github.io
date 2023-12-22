import React from "react";
import './SideBar.css';
import CategoriesAccordion from "./CategoriesAccordion";

export default function SideBar() {
    return (
        <div className="navigation-container" id="js_navigation-container">
            <div className="navigation-collapse-trigger">
                <span className="navigation-collapse-trigger__orb" id="js_navigation-collapse-trigger">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                       className="feather feather-chevron-left">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </span>
            </div>
            <div className="navigation">
              <span className="navigation-logo__name js_navigation-item-name">
                Категории
              </span>

                <div className="navigation-search">
                    <input type="search" placeholder="Найти место или категорию" className="navigation-search__input"/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="navigation-search__icon">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>
            <CategoriesAccordion />
            </div>

        </div>
    )
}
import React, { Component } from 'react';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    // Загружаем данные из JSON-файла
    fetch('data.json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ categories: Object.entries(data) });
      })
      .catch((error) => console.error('Ошибка при загрузке данных', error));
  }

  toggleCategory = (categoryName) => {
    this.setState((prevState) => {
      const updatedCategories = prevState.categories.map(([name, category]) => {
        if (name === categoryName) {
          return [name, { ...category, isOpen: !category.isOpen }];
        }
        return [name, category];
      });
      return { categories: updatedCategories };
    });
  };

  render() {
    return (
      <div>
        <h1>Список категорий</h1>
        <ul>
          {this.state.categories.map(([categoryName, category]) => (
            <li key={categoryName}>
              <div
                style={{ color: category.color, cursor: 'pointer' }}
                onClick={() => this.toggleCategory(categoryName)}
              >
                {categoryName} - {category.isOpen ? 'Скрыть' : 'Раскрыть'}
              </div>
              {category.isOpen && (
                <ul>
                  {category.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CategoryList;

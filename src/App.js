import React from 'react';
import './App.css';
import img from './category.png'

function App() {
    return (
        <div className="App">
            <section className={"demo header"}>
                <h1>Интересные места Смоленска</h1>
                <h3>Открой новые места вместе с нами!</h3>
                <h2>Интерактивная карта в помощь иногородним студентам с удобной группировкой по категориям</h2>
                <span>Авторы проекта: Алексеева Елена, Серепенкова Екатерина, Бурчик Полина, Хорулева Дарья, Филенко Карина</span>

                <a href="#section04"><span></span>Открыть карту</a>
            </section>
            <div id="section04">
                <iframe
                    title={"title"}
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A8b922b85ce9348b905947720f86315e36dddffeee6097c3163145f6196bca898&amp;source=constructor"
                    width="100%"
                    height="100%"
                ></iframe>
                <img src={img} alt="category"/>
            </div>
        </div>
    );
}

export default App;
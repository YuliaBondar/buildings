import React, { useState, useEffect } from 'react';
import './News.css';
import '../../pages/About/About.css'; // Импорт стиля из About.css
// import building from './photo/buildingFirst.png'
import Button from '../../shared/Button/Button.jsx'

const News = () => {
  const [data, setData] = useState([]);
  const [showAllItems, setShowAllItems] = useState(false);

  //вывод перввых три элемента
  const firstThreeItems = data.slice(0, 3);

  const handleShowAllItems = () => {
    setShowAllItems(!showAllItems);
  };

  useEffect(() => {
    //Создается асинхронная функция fetchData, которая отвечает за получение данных из внешнего API.
    const fetchData = async () => {
      try {
        //Запрос отправляется на указанный URL для получения данных, используя функцию fetch, которая возвращает объект Response.
        const response = await fetch('https://667024390900b5f8724990a7.mockapi.io/api/topBook/j');
        if (response.ok) {//проверка запроса. если успешен, то данные извлекаются
          const jsonData = await response.json();//преобразованеи полученного ответа в формат
          setData(jsonData);//Установка полученных данных в локальное состояние компонента data
        } else {
          console.error('Ошибка HTTP: ' + response.status);
        }
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, []);//callback функция

  return (
    <div className="news">
      <div className="property_new">
       
        <h2>Today’s property news</h2>
        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'</p>
      </div>

    <div className="home"> </div>

    <div className="building_build">
        {showAllItems ? 
          data.map(item => (
            <div key={item.id}>
              <div className="tips_work">
                <img src={item.picture} alt='build'/>
                <div className="active-content">
                  <p className='item-name'><b>{item.name}</b></p>
                  <p>{item.text}</p>
                  <Button text='Read more'/>
                  {/* <div className="button">
                    <button className='contact-button'>Read more</button>
                  </div> */}
                </div>
              </div>
            </div>
          )) : 
          firstThreeItems.map(item => (
            <div key={item.id}>
              <div className="tips_work">
                <img src={item.picture} alt='build'/>
                <div className="active-content">
                  <p className='item-name'><b>{item.name}</b></p>
                  <p>{item.text}</p>
                  <Button  text='Read more'/>
                  {/* <div className="button">
                    <button className='contact-button'>Read more</button>
                  </div> */}
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className="container-button">
        <button className="button_read" onClick={handleShowAllItems}>
          <b>{showAllItems ? 'Show less' : 'Show all'}</b>
        </button>
      </div>
    </div>
  );
};


export default News;

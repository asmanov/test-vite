import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='calc'>
      <h1>Калькулятор остановочного пути автомобиля</h1>
      <div>
        <h3>Калькулятор остановочного пути</h3>
        <h4>Входные данные</h4>
        <form>
          <label>Начальная скорость<br /><b>V</b><i className="koef">0</i> <input type='text'></input>
            <select>
              <option value="#">м/с</option>
              <option value="#">км/ч</option>
              <option value="#">фут/с</option>
              <option value="#">миль/ч</option>
            </select> </label><br />
        </form>
        <label>Время восприятия опасности водителем<br />t<i className="koef">hp</i> <input type='text'></input></label><br />
        <label>Время реакции водителя<br />t<i className="koef">hr</i> <input type='text'></input></label><br />
        <form>
          <label>Уклон<br />
            &sigma; <input type='text'></input></label>
          <select>
            <option value="#">градус</option>
            <option value="#">%</option>
          </select><br />
          <input type="radio" id="up" name="angle" value="#"></input>
          <label for="up">Движение вверх</label>
          <input type="radio" id="down" name="angle" value="#"></input>
          <label for="up">Движение вниз</label><br />
        </form>
        <form>
          <label>Состояние дороги<br />
            <select>
              <option value="#">---</option>
              <option value="#">Сухой асфальт</option>
              <option value="#">Мокрый асфальт</option>
              <option value="#">Покрытый снегом асфальт</option>
              <option value="#">Покрытый льдом асфальт</option>
            </select><br />
            <i className="or">или</i> Коэффициент трения<br /><b>&mu; </b>
            <input type='text'></input></label><br />
        </form>
        <form>
          <label>Тип привода тормозов<br />
            <select>
              <option value="#">---</option>
              <option value="#">Пневматическая</option>
              <option value="#">Гидравлическая</option>
            </select><br />
            <i className="or">или</i> Время срабатывания тормозной системы<br /><b>t</b><i className="koef">brl </i>
            <input type='text'></input></label><br />
        </form>
        <div className="buttonblock">
          <button className="button">Рассчитать</button>
          <button className="button">Сбросить</button>
        </div>
        <h4>Выходные данные</h4>


        <div className="date">
          <div className="textblock">
            Угол крутизны уклона
          </div>
          <div>
            <input className="dateblock" type="text"></input>
          </div>
        </div>
        <br />
        <div className="date">
          <div className="textblock">
            Замедление
          </div>
          <div>
            <input className="dateblock" type="text"></input>
          </div>
        </div>
        <br />
        <div className="date">
          <div className="textblock">
            Время торможения
          </div>
          <div>
            <input className="dateblock" type="text"></input>
          </div>
        </div>
        <br />
        <div className="date">
          <div className="textblock">
            Растояние, которое проедет
            автомобиль во время восприятия
            водителем опасности
          </div>
          <div>
            <input className="dateblock" type="text"></input>
          </div>
        </div>
        <br />
        <div className="date">
          <div className="textblock">
            Растояние, которое проедет автомобиль во время реакции водителя на опасность
          </div>
          <div>
            <input className="dateblock" type="text"></input>
          </div>
        </div>
        <br />
        <div className="date">
          <div className="textblock">
            Растояние, которое проедет
            автомобиль за время задержки срабатывания тормоза
          </div>
          <div>
            <input className="dateblock" type="text"></input>
          </div>
        </div>
        <br />
        <div className="date">
          <div className="textblock">
            Тормозной путь
          </div>
          <div>
            <input className="dateblock" type="text"></input>
          </div>
        </div>
        <br />
        <div className="date">
          <div className="textblock">
            Остановочный путь
          </div>
          <div>
            <input className="dateblock" type="text"></input>
          </div>
        </div>
        <br />
        <div className="date">
          <div className="textblock">
            Критический угол наклона для заданного коэффициента трения
          </div>
          <div>
            <input className="dateblock" type="text"></input>
          </div>
        </div>
        <br />
        <div className="date">
          <div className="textblock">
            Критический угол для заданного коэффициента трения
          </div>
          <div>
            <input className="dateblock" type="text"></input>
          </div>
        </div>
        <br />
      </div>
    </div>    
    </>
  );
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const[speed, setSpeed] = useState('');
  const[timeHP, setTimeHP] = useState('1.5');
  const[timeHR, setTimeHR] = useState('1');
  const[slop, setSlop] = useState('');
  const[friction, setFriction] = useState('');
  const[breakeType, setBreakeType] = useState('');
  const[deceleration, setDeceleration] = useState('');
  const[timeBreak, setTimeBreak] = useState('');
  const[distanceHP, setDistanceHP] = useState('');
  const[distanceHR, setDistanceHR] = useState('');
  const[distanceBRL, setDistanceBRL] = useState('');
  const[distanceBreak, setDistanceBreak] = useState('');
  const[distanceStop, setDistanceStop] = useState('');
  const[criticalAngle, setCriticalAngle] = useState('');
  const[criticalSlop, setCriticalSlop] = useState('');
  
  
  function onSlopChange(e){
    setSlop(e.target.value);
  };
  function onFrictionChange(e){
    setFriction(e.target.value);
  };
  function onBreakChange(e){
    setBreakeType(e.target.value);
  };
  return (
    <>
    <div className='calc'>
      <h1>Калькулятор остановочного пути автомобиля</h1>
      <div>
        <h3>Калькулятор остановочного пути</h3>
        <h4>Входные данные</h4>
        <form>
          <label>Начальная скорость<br /><b>V</b><i className="koef">0</i> <input type='text' value={speed} onChange={(e) => setSpeed(e.target.value)}></input>
            <select>
              <option value="#">м/с</option>
              <option value="#">км/ч</option>
              <option value="#">фут/с</option>
              <option value="#">миль/ч</option>
            </select> </label><br />
        </form>
        <label>Время восприятия опасности водителем<br />t<i className="koef">hp</i> <input type='text' value={timeHP} onChange={(e) => setTimeHR(e.target.value)}></input></label><br />
        <label>Время реакции водителя<br />t<i className="koef">hr</i> <input type='text' value={timeHR} onChange={(e) => setTimeHP(e.target.value)}></input></label><br />
        <form>
          <label>Уклон<br />
            &sigma; <input type='text' value={slop} onChange={onSlopChange}></input></label>
          <select>
            <option value="degre">градус</option>
            <option value="percent">%</option>
          </select><br />
          <input type="radio" id="up" name="angle" value="up"></input>
          <label for="up">Движение вверх</label>
          <input type="radio" id="down" name="angle" value="down"></input>
          <label for="up">Движение вниз</label><br />
        </form>
        <form>
          <label>Состояние дороги<br />
            <select id='road' value={friction} onChange={onFrictionChange}>
              <option value="">---</option>
              <option value="0.7">Сухой асфальт</option>
              <option value="0.4">Мокрый асфальт</option>
              <option value="0.3">Покрытый снегом асфальт</option>
              <option value="0.02">Покрытый льдом асфальт</option>
            </select><br />
            <i className="or">или</i> Коэффициент трения<br /><b>&mu; </b>
            <input type='text' value={friction} onChange={onFrictionChange}></input></label><br />
        </form>
        <form>
          <label>Тип привода тормозов<br />
            <select id='breaktype' value={breakeType} onChange={onBreakChange}>
              <option value="">---</option>
              <option value="0.4">Пневматическая</option>
              <option value="0.1" >Гидравлическая</option>
            </select><br />
            <i className="or">или</i> Время срабатывания тормозной системы<br /><b>t</b><i className="koef">brl </i>
            <input type='text' value={breakeType} onChange={onBreakChange}></input></label><br />
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
            <input className="dateblock" type="text" value={slop} ></input>
          </div>
        </div>
        <br />
        <div className="date">
          <div className="textblock">
            Замедление
          </div>
          <div>
            <input className="dateblock" type="text" value={deceleration} ></input>
          </div>
        </div>
        <br />
        <div className="date">
          <div className="textblock">
            Время торможения
          </div>
          <div>
            <input className="dateblock" type="text" value={timeBreak} ></input>
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
            <input className="dateblock" type="text" value={distanceHP} ></input>
          </div>
        </div>
        <br />
        <div className="date">
          <div className="textblock">
            Растояние, которое проедет автомобиль во время реакции водителя на опасность
          </div>
          <div>
            <input className="dateblock" type="text" value={distanceHR} ></input>
          </div>
        </div>
        <br />
        <div className="date">
          <div className="textblock">
            Растояние, которое проедет
            автомобиль за время задержки срабатывания тормоза
          </div>
          <div>
            <input className="dateblock" type="text" value={distanceBRL} ></input>
          </div>
        </div>
        <br />
        <div className="date">
          <div className="textblock">
            Тормозной путь
          </div>
          <div>
            <input className="dateblock" type="text" value={distanceBreak} ></input>
          </div>
        </div>
        <br />
        <div className="date">
          <div className="textblock">
            Остановочный путь
          </div>
          <div>
            <input className="dateblock" type="text" value={distanceStop} ></input>
          </div>
        </div>
        <br />
        <div className="date">
          <div className="textblock">
            Критический угол наклона для заданного коэффициента трения
          </div>
          <div>
            <input className="dateblock" type="text" value={criticalAngle}></input>
          </div>
        </div>
        <br />
        <div className="date">
          <div className="textblock">
            Критический угол для заданного коэффициента трения
          </div>
          <div>
            <input className="dateblock" type="text" value={criticalSlop}></input>
          </div>
        </div>
        <br />
      </div>
    </div>    
    </>
  );
}

export default App

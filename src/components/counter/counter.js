import React from 'react';


function Counter(props) {
    return <div className="counter">
            <p>{(props.endgame) ?  <span>Вы нашли элемент! (счетчик попыток: {props.counter})</span> :
                <span>Ваши попытки: {props.counter}</span>}</p>
    </div>
}


export default Counter;

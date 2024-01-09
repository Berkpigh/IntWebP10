import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";
 

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
  );
  //  let currentidx = 0;

  const nextCard = () => {
    setIndex((index + 1) % byDateDesc.length)
  //  currentidx = index
  }

  useEffect(() => {
    const timer = setInterval(nextCard, 5000)
    return () => {
      clearInterval(timer)
    }
  }, [index, data]);

  const handleInputClick = (radioIdx) => {
    setIndex(radioIdx);
  //  currentidx = radioIdx
  };

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
          <div
            key={`slide-${event.title.replace(/\\s+/g, '_')}`}
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
      ))}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateDesc?.map((event, radioIdx) => (
            <input
              key={`radio-${event.title.replace(/\\s+/g, '_')}`}
              type="radio"
              name="radio-button"
              checked={radioIdx === index}
              onChange={() => handleInputClick(radioIdx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
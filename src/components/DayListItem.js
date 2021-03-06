import React from "react";
import "components/DayList";
import "components/DayListItem.scss";
import classNames from 'classnames';
export default function DayListItem(props) {
    const formatSpots =function ()  {
    if (!props.spots) {
        return ("no spots remaining");

    }

    if (props.spots> 1 ) {
        return (props.spots + " spots remaining");
    }
    return (props.spots + " spot remaining");
    };

    const dayClass = classNames("day-list__item", {
      
        "day-list__item--selected": props.selected,
        "day-list__item--full": !props.spots
      })
    
      return(
        <li className= {dayClass} onClick={() => props.setDay(props.name)}>
        <h2 className="text--regular">{props.name}</h2> 
        <h3 className="text--light">{formatSpots()} </h3> 
         </li>
      );
    
};


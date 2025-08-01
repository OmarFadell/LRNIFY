import React from 'react'
import {Link} from 'react-router-dom'

function CardItem(props) {
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={props.path}>
                    <figure className="cards__item__pic-wrap" >
                        <img src={props.src} alt="Travel Image"
                        className="cards__item__img"/>
                    </figure>
                    <div className='cards__item__info'>
                      <h1>{props.label}</h1>
                        <h5 className='cards__item__text'>{props.text}</h5>
                        <h5 className='cards__item__text'>{props.price} | {props.rating} | {props.hours} </h5>
                    </div>

                </Link>
            </li>
        </>
    )
}

export default CardItem

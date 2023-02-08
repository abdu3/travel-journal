import React from 'react'

export default function Card(props) {
  return (
   <section>
     <div className='card'>
        <div className="img-box">
             <img src={props.imageUrl} alt="ds" />
        </div>
        <div className="info">
            <div className='location'>
                <span className='location-icon'><i className="fa-solid fa-location-dot"></i></span>
                <span className='location-country'>{props.location}</span>
                <span className='location-map'><a href={props.googleMapsUrl}>View on Google Maps</a> </span>
            </div>
            <h2>{props.title}</h2>
            <span className='date-from'>{props.startDate} -</span> <span className='date-to'>{props.endDate}</span>
            <p>{props.description}</p>
        </div>
    </div>
   </section>
  )
}

import React from 'react'

export default function RatingSelect({rating , select}) {
  return (
    <ul className='rating'>
        
        {
            [1,2,3,4,5,6,7,8,9,10].map(nb=> 
            <li key={nb}>
                <input type='radio' id={'nb'+nb} value={nb} name="rating"
                checked={rating === nb}  />
                <label htmlFor={'nb'+nb} 
                onClick={()=>select(nb)}
                >{nb}</label>
            </li>)
        }
       
    </ul>
  )
}
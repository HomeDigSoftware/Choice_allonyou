import React from 'react';


//   import './menu-item.style.scss'




const MenuItem = ({title , imageUrl , size }) => (
    <div className={`${size} menu-item`}>
        <div 
        className='background-image' 
        style={{
              backgroundImage: `url(${imageUrl})`
            }} 
        />
     <div className='content'>
      <div className='title'>{title.toUpperCase()}</div>
      <span className='subtitle'>see all</span>
     </div>
    </div>
);
export default MenuItem;
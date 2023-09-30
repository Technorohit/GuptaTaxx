import React, { useState, useEffect } from 'react';
import './Grid.css'
import OverlayImage from '../OverlayImage/OverlayImage';

const Grid = (props) => {
    const {dimensions} = props
    const getColumns = (dimensions = 3) => {
        let d = '';
         Array(dimensions).fill('x').forEach(()=> {d+='auto ';console.log('d')})
         return d
    }
    const Data = [{
        text:'GST Filing',
        src:'https://tax.thomsonreuters.com/content/dam/ewp-m/images/tax/en/photography/tr1130923-2500x1406.jpg.transform/rect-768/q90/image.jpg',
        scale:2
    },{
        text:'ITR Filing',
        src:'https://tax.thomsonreuters.com/content/dam/ewp-m/images/tax/en/photography/tr1130923-2500x1406.jpg.transform/rect-768/q90/image.jpg',
        scale:2

    },{
        text:'TDS Filing',
        src:'https://tax.thomsonreuters.com/content/dam/ewp-m/images/tax/en/photography/tr1130923-2500x1406.jpg.transform/rect-768/q90/image.jpg',
        scale:2

    },{
        text:'Advance Tax Filing',
        src:'https://tax.thomsonreuters.com/content/dam/ewp-m/images/tax/en/photography/tr1130923-2500x1406.jpg.transform/rect-768/q90/image.jpg',
        scale:2

    },{
        text:'Corporate Filing',
        src:'https://tax.thomsonreuters.com/content/dam/ewp-m/images/tax/en/photography/tr1130923-2500x1406.jpg.transform/rect-768/q90/image.jpg',
        scale:2

    },{
        text:'Company Registration',
src:'https://tax.thomsonreuters.com/content/dam/ewp-m/images/tax/en/photography/tr1130923-2500x1406.jpg.transform/rect-768/q90/image.jpg',
scale:2
    }]
    console.log(getColumns(3))
    return <div className='grid-container' style={{display:'grid', gridTemplateColumns:getColumns(dimensions)}}>
        {Data.map((data, index)=>{
             return <div className="overlay-container" style={{ background: (index%2 === 0 ? '#3498db' : '#9b59b6') }}><OverlayImage {...data}/></div>
        })}
    </div>
}
export default Grid
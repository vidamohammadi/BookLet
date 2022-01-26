import React from 'react'
import './MainImages.css'
import DirectAccess from './DirectAccess'
import { getMainImages } from '../../../api/getMainImages'


const MainImages = () => {
    const images = getMainImages()
    return (
        <div className="images">
            {
                images.map((item) => {
                    return (
                        <DirectAccess
                            key={item.id}
                            src={item.src}
                            link={item.root}
                            width={item.width}
                            margin={item.margin}
                        />
                    )
                })
            }
        </div>
    )
}

export default MainImages

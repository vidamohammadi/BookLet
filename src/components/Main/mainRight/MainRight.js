import React from 'react'
import './MainRight.css'
import { getMainRight } from '../../../api/getMainRight'
import ItemRight from './ItemRight'
 
const MainRight = () => {
    const popular = getMainRight()
    return (
        <div className="main-right">
            <h4>most popular</h4>
            <ul>

                {
                    popular.map((item) => {
                        return (
                           <ItemRight 
                                key={item.id}
                                root={item.root}
                                src={item.src}
                                title={item.title}
                           />
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default MainRight

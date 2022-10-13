import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

function Widgets() {

    const newsArticle = (heading, subtitle)=>(
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecordIcon />
                </div>
                <div className="widgets__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>

            </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn news</h2>
                <InfoIcon />
            </div>
            {newsArticle("New opportunities at tech giants", "Top news - 5733 readers")}
            {newsArticle("Tesla hits new highs","Auto - 7438 readers")}
            {newsArticle("Elon musk into fragrance business","New - 3348 readers")}

        </div>
    )
}

export default Widgets
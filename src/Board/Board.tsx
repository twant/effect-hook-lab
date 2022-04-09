import React, { useState } from 'react';
import { CategoryType, CardType } from '../utils';
import Category from "../Category/Category"
import "./Board.css"

export default function Board(props: { categories: CategoryType, updateScore: Function }) {
    const categoryList = Object.keys(props.categories)
    let categoriesRendered = 0
    const [openCard, setOpenCard] = useState(false)

    return (
        <div className="Board">
            {categoryList.map(categoryName => {
                const categoryData = props.categories[categoryName]
                if (categoryData.length == 5 && categoriesRendered < 5) {
                    categoriesRendered += 1
                    return (<Category updateScore={props.updateScore} key={categoryName} name={categoryName} cards={categoryData} />)
                }
            })}
        </div>
    )

}

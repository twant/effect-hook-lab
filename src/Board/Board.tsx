import React, { useState } from 'react';
import { CategoryType, CardType } from '../utils';
import Category from "../Category/Category"
import "./Board.css"

export default function Board(props: { categories: CategoryType }) {
    const categoryList = Object.keys(props.categories)
    let categoriesRendered = 0
    const [openCard, setOpenCard] = useState(false)

    return (
        <div className="Board">
            
        </div>
    )

}

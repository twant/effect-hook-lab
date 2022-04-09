import data from "./sample_data.json"

export type APIData = typeof data
export const newGame = () => {
    return callAPI()
}



export const callAPI = () => {
    return fetch('https://jservice.io/api/random?count=100')
        .then(data => data.json())
        .then(data => { return data })
        .catch(err => console.log(err))
}


export const cleanData = (data: APIData) => {
    // re-organizes the raw API data to an object that looks like:
    // {
    //  categoryName: [{cardData}, {cardData}],
    //  categoryname: [{cardData}, {cardData}, {cardData}],
    //  ... 
    // }
    const cleanedData = data.reduce((acc: any, currentValue: any) => {
        if (currentValue.category.title in acc) {
            acc[currentValue.category.title].push(currentValue)
        } else {
            acc[currentValue.category.title] = [currentValue]
        }
        return acc
    }, {}
    )

    // filters out any categories with incomplete sets of cards
    const finalData: any = {}
    for (var category in cleanedData) {
        let countValues = 0
        cleanedData[category].forEach((card: any) => {
            if (card.value != undefined) {
                countValues += 1
            }
        })
        if (countValues == 5) {
            finalData[category] = cleanedData[category]
        }

    }
    return finalData
}

const sampleDataType = cleanData(data)
export type CategoryType = typeof sampleDataType
export type CardType = typeof data[0]
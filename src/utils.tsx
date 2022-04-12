import data from "./sample_data.json"

export const callAPI = () => {
    //WRITE YOUR API CALL HERE
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
export type APIData = typeof data

// use this function as a starter to clean answers before you check if the user's guess is correct! 
const cleanAnswer = (answer: string) => {
    const substringsToRemove = ["<i>", "</i>", '"', "<", "a ", "the "]
    substringsToRemove.forEach(substring => {
        answer = answer.replace(substring, "")
    })
    return answer.trim()
}


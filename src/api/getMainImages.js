import one from "../images/main/mainImages/1.jpg"
import two from "../images/main/mainImages/2.jpg"
import three from "../images/main/mainImages/3.jpg"
import four from "../images/main/mainImages/4.jpg"
import five from "../images/main/mainImages/5.jpg"

export const getMainImages = () => [
    {
        id: 1,
        src: one,
        root: "books",
        width: true,
        margin: true
    },
    {
        id: 2,
        src: two,
        root: "login",
        width: true,
        margin: false
    },
    {
        id: 3,
        src: three,
        root: "books",
        width: false,
        margin: true
    },
    {
        id: 4,
        src: four,
        root: "books",
        width: false,
        margin: true
    },
    {
        id: 5,
        src: five,
        root: "books",
        width: false,
        margin: false
    }
]
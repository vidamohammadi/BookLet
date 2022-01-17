import one from "../images/main/mainImages/1.jpg"
import two from "../images/main/mainImages/2.jpg"
import three from "../images/main/mainImages/3.jpg"
import four from "../images/main/mainImages/4.jpg"
import five from "../images/main/mainImages/5.jpg"

export const getMainImages = () => [
    {
        id: 1,
        title: "study",
        src: one,
        width: true,
        margin: true
    },
    {
        id: 2,
        title: "change",
        src: two,
        width: true,
        margin: false
    },
    {
        id: 3,
        title: "sale",
        src: three,
        width: false,
        margin: true
    },
    {
        id: 4,
        title: "list",
        src: four,
        width: false,
        margin: true
    },
    {
        id: 5,
        title: "buy",
        src: five,
        width: false,
        margin: false
    }
]
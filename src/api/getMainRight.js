import one from '../images/main/1/product3.jpg'
import two from '../images/main/2/product3.jpg'
import three from '../images/main/3/product3.jpg'
import four from '../images/main/4/product3.jpg'
 
export const getMainRight = () => [
    {
        id: 1,
        title: "Physics",
        writer:"Holiday",
        src: one,
        root: "physics",
        price: "20",
        off:"2"
    },
    {
        id: 2,
        title: "Architecture",
        writer: "Moris Mano",
        src: two,
        root: "architecture",
        price:"30",
        off:"3"
    },
    {
        id: 3,
        title: "Statistics",
        writer: "Faramarzi",
        src: three,
        root: "statistics",
        price:"25",
        off:"10"
    },
    {
        id: 4,
        title: "Religious",
        writer: "Sobhani",
        src: four,
        root: "religious",
        price: "45",
        off: "8"
    }
]
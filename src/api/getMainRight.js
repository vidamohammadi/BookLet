import one from '../images/main/1/product3.jpg'
import two from '../images/main/2/product3.jpg'
import three from '../images/main/3/product3.jpg'
import four from '../images/main/4/product3.jpg'
import five from '../images/main/5/product3.jpg'
import sOne from '../images/main/1/product1.jpg'
import sTwo from '../images/main/2/product1.jpg'
import sThree from '../images/main/3/product1.jpg'
import sFour from '../images/main/4/product1.jpg'
import sFive from '../images/main/5/product1.jpg'

 
export const getMainRight = () => [
    {
        id: 1,
        title: "Physics",
        writer:"Holiday",
        src: one,
        scrollSrc: sOne,
        root: "physics",
        price: "20",
        off:"2"
    },
    {
        id: 2,
        title: "Architecture",
        writer: "Moris Mano",
        src: two,
        scrollSrc: sTwo,
        root: "architecture",
        price:"30",
        off:"3"
    },
    {
        id: 3,
        title: "Statistics",
        writer: "Faramarzi",
        src: three,
        scrollSrc: sThree,
        root: "statistics",
        price:"25",
        off:"10"
    },
    {
        id: 4,
        title: "Religious",
        writer: "Sobhani",
        src: four,
        scrollSrc: sFour,
        root: "religious",
        price: "45",
        off: "8"
    },
    {
        id: 5,
        title: "Statistics",
        writer: "Faramarzi",
        src: five,
        scrollSrc: sFive,
        root: "statistics",
        price:"78",
        off:"11"
    }
]
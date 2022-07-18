import home from './home.js';

function ShopingCards(props){

    const items=[

        {
            name:'Boys-Shirt',
            img: 'image1.jpg',
            desc: '₹600' ,
        },

        {
            name:'Boys-Track',
            img: 'image2.jpg',
            desc: '800' ,
        },

        {
            name:'Boys-Shirt',
            img: 'image3.jpg',
            desc: '₹500' ,
        },

        {
            name:'Boys-Track',
            img: 'image4.jpg',
            desc: '₹1000' ,
        },
    ];


    return (
        <div>
            <home name={items[0].name}
            img={items[0].img}
            desc={items[0].desc}>
            </home>

            <home name={items[1].name}
            img={items[1].img}
            desc={items[1].desc}>
            </home>

            <home name={items[2].name}
            img={items[2].img}
            desc={items[2].desc}>
            </home>

            <home name={items[3].name}
            img={items[3].img}
            desc={items[3].desc}>
            </home>

        </div>
        
        );
 }
 
 export default ShopingCards;
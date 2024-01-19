type category = '' | 'breakfast' | 'lunch' | 'shakes' | 'dinner'
interface Dinner {
    name : string,
    price : number,
    phrase : string,
    category : category,
    image : string
}

const data : Dinner[] = [
    {
        name : 'Buttermilk Pancakes',
        price : 15.99,
        phrase : 'I´m baby woke mlkshk wolf bitter live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
        category : 'breakfast',
        image : 'pancakes.jpeg'
    },
    {
        name : 'Diner double',
        price : 13.99,
        phrase : 'vaporware iPhone mumblecore selvage ram denim slow-carb leggings gochujang helvetica man braid jiabing. Marfa thubdercats',
        category : 'lunch',
        image : 'diner double.jpeg'
    },
    {
        name : 'Godzilla Milkshake',
        price : 6.99,
        phrase : 'ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral',
        category : 'shakes',
        image : 'godzilla milkshake.jpeg'
    },
    {
        name : 'Country Delight',
        price : 20.99,
        phrase : 'Shabby chic keffyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.',
        category : 'breakfast',
        image : 'overflow.jpeg'
    },
    {
        name : 'Egg Attack',
        price : 22.99,
        phrase : 'franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90´s pop-up',
        category : 'lunch',
        image : 'egg attack.jpeg'
    },
    {
        name : 'Oreo Dream',
        price :  18.99,
        phrase : 'Portland chicharrones ethcical edison bulb, palo santo craft beer chia heirloom iPhone everyday',
        category : 'shakes',
        image : 'oreodream.jpeg'
    },
    {
        name : 'Bacon Overflow',
        price : 8.99,
        phrase : 'carry jiabing, normcore freegan. Viral single-origin coffee live-edge , pork belly cloud bread iceland put a braid',
        category : 'breakfast',
        image : 'bacon.jpeg'
    },
    {
        name : 'American Classic',
        price : 12.99,
        phrase : 'on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut',
        category : 'lunch',
        image : 'american classic.jpeg'
    },
    {
        name : 'Quarantine Buddy',
        price : 16.99,
        phrase : 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison yuccie crucifix microdosing',
        category : 'shakes',
        image : 'quarentena buddy.jpeg'
    },
    {
        name : 'Steak Dinner',
        price : 30.99,
        phrase : 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
        category : 'dinner',
        image : 'dinner.jpeg'
    },
]

export const dishes = {
    getAll : () =>{
        return data
    },
    getFromType : (type : category) : Dinner[] =>{
        return data.filter((item)=> item.category == type)
    }
}
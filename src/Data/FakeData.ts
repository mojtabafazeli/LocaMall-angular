import Cart from "src/Model/Cart";

export var Products = [
	{
		id: 'bsedghi098028340298502',
		name: 'Birthday Cake',
		price: 20,
		type: 'product',
		image: '../assets/products/birthday-cake.jpg',
		rate: 2
	},
	{
		id: 'mhaeri098028340298502',
		name: 'Naked Cake',
		price: 20,
		type: 'product',
		image: '../assets/products/naked-cake.jpg',
		rate: 4
	},
	{
		id: 'vahid098028340298502',
		name: 'Resume',
		price: 20,
		type: 'service',
		image: '../assets/products/resume.jpg',
		rate: 3
	},
	{
		id: 'mahvin098028340298502',
		name: 'Home Design',
		price: 120,
		type: 'service',
		image: '../assets/products/home-design.jpg',
		rate: 5
	},
	{
		id: 'gkiani098028340298502',
		name: 'Sweets',
		price: 40,
		type: 'product',
		image: '../assets/products/sweets.jpg',
		rate: 1
	},
	{
		id: 'bsedghi234524352345252',
		name: 'Roll Cakes',
		price: 20,
		type: 'product',
		image: '../assets/products/roll-cake.jpg',
		rate: 4
	},
	{
		id: 'bsedghi35245243523452',
		name: 'Cupcake',
		price: 20,
		type: 'product',
		image: '../assets/products/cupcake.jpg',
		rate: 3
	},
	{
		id: 'mtaba35245243523452',
		name: 'Keto Bread',
		price: 20,
		type: 'product',
		image: '../assets/products/keto-bread.jpg',
		rate: 4
	}
];

export const Sellers = [
	{
		firstName: 'Bahara',
		lastName: 'Sedghi',
		username: 'bsedghi',
		id: '',
		location: 'Orleans',
		catalog: [
			Products[0].id, Products[5].id, Products[6].id
		],
		image: '../assets/sellers/bahara.jpg',
		rate: 5
	},
	{
		firstName: 'Maryam',
		lastName: 'Haerian',
		username: 'mhaeri',
		id: '',
		location: 'Findlay Creek',
		catalog: [Products[1].id,],
		image: '../assets/sellers/maryamh.jpg',
		rate: 4
	},
	{
		firstName: 'Gita',
		lastName: 'Kiani',
		username: 'gkiani',
		id: '',
		location: 'Merivale',
		catalog: [Products[4].id,],
		image: '../assets/sellers/gita.jpg',
		rate: 2
	},
	{
		firstName: 'Vahid',
		lastName: 'Pilechi',
		username: 'vpilechi',
		id: '',
		location: 'Orleans',
		catalog: [Products[2].id,],
		image: '../assets/sellers/vahid.jpg',
		rate: 2
	},
	{
		firstName: 'Fereshteh',
		lastName: 'Khafafi',
		username: 'fereshteh',
		id: '',
		location: 'Findlay Creek',
		catalog: [],
		image: '../assets/sellers/bahara.jpg',
		rate: 1
	},
	{
		firstName: 'Mahvin',
		lastName: 'Memarpour',
		username: 'mahvin',
		id: '',
		location: 'Orleans',
		catalog: [Products[3].id,],
		image: '../assets/sellers/mahvin.jpg',
		rate: 4
	},
	{
		firstName: 'Maryam',
		lastName: 'Taba',
		username: 'mtaba',
		id: '',
		location: 'Orleans',
		catalog: [Products[7].id,],
		image: '../assets/sellers/maryamt.jpg',
		rate: 3

	}
];

export const Users = [
	{
		id: 'mtaba730',
		firstName: 'Maryam',
		lastName: 'Taba',
		username: 'mtaba',
		location: 'Orleans',
		cart: [new Cart('mtaba730'),]
	}
];



export default { Sellers, Users, Products };



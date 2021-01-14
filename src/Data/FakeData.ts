import Cart from "src/Model/Cart";

export var Products = [
	{
		id: 'bsedghi098028340298502',
		name: 'Birthday Cake',
		price: 20,
		type: 'product',
		image: '',
		rate: 2
	},
	{
		id: 'mhaeri098028340298502',
		name: 'Naked Cake',
		price: 20,
		type: 'product',
		image: '',
		rate: 4
	},
	{
		id: 'vahid098028340298502',
		name: 'Resume',
		price: 20,
		type: 'service',
		image: '',
		rate: 3
	},
	{
		id: 'mahvin098028340298502',
		name: 'Home Design',
		price: 120,
		type: 'service',
		image: '',
		rate: 5
	},
	{
		id: 'gkiani098028340298502',
		name: 'Sweets',
		price: 40,
		type: 'product',
		image: '',
		rate: 1
	},
	{
		id: 'bsedghi234524352345252',
		name: 'Roll Cakes',
		price: 20,
		type: 'product',
		image: '',
		rate: 4
	},
	{
		id: 'bsedghi35245243523452',
		name: 'Cupcake',
		price: 20,
		type: 'product',
		image: '',
		rate: 3
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
		rate: 4
	},
	{
		firstName: 'Maryam',
		lastName: 'Haerian',
		username: 'mhaeri',
		id: '',
		location: 'Findlay Creek',
		catalog: [Products[1].id,],
		rate: 4
	},
	{
		firstName: 'Gita',
		lastName: 'Kiani',
		username: 'gkiani',
		id: '',
		location: 'Merivale',
		catalog: [Products[4].id,],
		rate: 4
	},
	{
		firstName: 'Vahid',
		lastName: 'Pilechi',
		username: 'vpilechi',
		id: '',
		location: 'Orleans',
		catalog: [Products[2].id,],
		rate: 4
	},
	{
		firstName: 'Fereshteh',
		lastName: 'Khafafi',
		username: 'fereshteh',
		id: '',
		location: 'Findlay Creek',
		catalog: [],
		rate: 4
	},
	{
		firstName: 'Mahvin',
		lastName: 'Memarpour',
		username: 'mahvin',
		id: '',
		location: 'Orleans',
		catalog: [Products[3].id,],
		rate: 4
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



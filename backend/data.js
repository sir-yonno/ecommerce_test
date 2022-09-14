import bcrypt from 'bcrypt';

const data = {
  users: [
    {
      name: 'Yonno',
      email: 'admin@fakemail.com',
      password: bcrypt.hashSync('123456', bcrypt.genSaltSync()),
      isAdmin: true
    },
    {
      name: 'Snoop',
      email: 'snoop@dogg.com',
      password: bcrypt.hashSync('DOdoubleG', bcrypt.genSaltSync())
    }
  ],
  products: [
    {
      //_id: '1',
      name: 'Nika Slim shirt',
      slug: 'nika-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 5,
      brand: 'Subemelaradjio',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality raccoon'
    },
    {
      //_id: '2',
      name: 'Nika Slim Pant',
      slug: 'nika-slim-pant',
      category: 'Pants',
      image: '/images/p1.jpg',
      price: 25,
      countInStock: 0,
      brand: 'Subemelaradjio',
      rating: 3.5,
      numReviews: 42,
      description: 'high quality raccoon'
    },
    {
      //_id: '3',
      name: 'Supreme jacket',
      slug: 'supreme-drip',
      category: 'Jackets',
      image: '/images/drip.jpg',
      price: 999999,
      countInStock: 1,
      brand: 'drippythangs',
      rating: 5.0,
      numReviews: 0,
      description: 'high quality drip'
    },
  ],
};

export default data;

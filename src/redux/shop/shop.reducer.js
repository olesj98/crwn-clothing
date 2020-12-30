const initState = {
  collections: {
    hats: {
      id: 1,
      title: 'Hats',
      routeName: 'hats',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: 'https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_2659000/ff_2659252_full.jpg&w=600',
          price: 25
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: 'data:image/jpeg;base64,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',
          price: 18
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSql2XW6_4geBtbqo0hutsp7h6cQGaCkQZzow&usqp=CAU',
          price: 35
        },
        {
          id: 4,
          name: 'Grey Brim',
          imageUrl: 'https://imgbb.com/RjBLWxB/grey-brim.png',
          price: 25
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl: 'https://imgbb.com/YTjW3vF/green-beanie.png',
          price: 18
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: 'https://imgbb.com/rKBDvJX/palm-tree-cap.png',
          price: 14
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: 'https://imgbb.com/bLB646Z/red-beanie.png',
          price: 18
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: 'https://imgbb.com/1f2nWMM/wolf-cap.png',
          price: 14
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: 'https://imgbb.com/X2VJP2W/blue-snapback.png',
          price: 16
        }
      ]
    },
    sneakers: {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 10,
          name: 'Adidas NMD',
          imageUrl: 'https://imgbb.com/0s3pdnc/adidas-nmd.png',
          price: 220
        },
        {
          id: 11,
          name: 'Adidas Yeezy',
          imageUrl: 'https://imgbb.com/dJbG1cT/yeezy.png',
          price: 280
        },
        {
          id: 12,
          name: 'Black Converse',
          imageUrl: 'https://imgbb.com/bPmVXyP/black-converse.png',
          price: 110
        },
        {
          id: 13,
          name: 'Nike White AirForce',
          imageUrl: 'https://imgbb.com/1RcFPk0/white-nike-high-tops.png',
          price: 160
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          imageUrl: 'https://imgbb.com/QcvzydB/nikes-red.png',
          price: 160
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://imgbb.com/fMTV342/nike-brown.png',
          price: 160
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          imageUrl: 'https://imgbb.com/w4k6Ws9/nike-funky.png',
          price: 190
        },
        {
          id: 17,
          name: 'Timberlands',
          imageUrl: 'https://imgbb.com/Mhh6wBg/timberlands.png',
          price: 200
        }
      ]
    },
    jackets: {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 18,
          name: 'Black Jean Shearling',
          imageUrl: 'https://imgbb.com/XzcwL5s/black-shearling.png',
          price: 125
        },
        {
          id: 19,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://imgbb.com/mJS6vz0/blue-jean-jacket.png',
          price: 90
        },
        {
          id: 20,
          name: 'Grey Jean Jacket',
          imageUrl: 'https://imgbb.com/N71k1ML/grey-jean-jacket.png',
          price: 90
        },
        {
          id: 21,
          name: 'Brown Shearling',
          imageUrl: 'https://imgbb.com/s96FpdP/brown-shearling.png',
          price: 165
        },
        {
          id: 22,
          name: 'Tan Trench',
          imageUrl: 'https://imgbb.com/M6hHc3F/brown-trench.png',
          price: 185
        }
      ]
    },
    womens: {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 23,
          name: 'Blue Tanktop',
          imageUrl: 'https://imgbb.com/7CQVJNm/blue-tank.png',
          price: 25
        },
        {
          id: 24,
          name: 'Floral Blouse',
          imageUrl: 'https://imgbb.com/4W2DGKm/floral-blouse.png',
          price: 20
        },
        {
          id: 25,
          name: 'Floral Dress',
          imageUrl: 'https://imgbb.com/KV18Ysr/floral-skirt.png',
          price: 80
        },
        {
          id: 26,
          name: 'Red Dots Dress',
          imageUrl: 'https://imgbb.com/N3BN1bh/red-polka-dot-dress.png',
          price: 80
        },
        {
          id: 27,
          name: 'Striped Sweater',
          imageUrl: 'https://imgbb.com/KmSkMbH/striped-sweater.png',
          price: 45
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          imageUrl: 'https://imgbb.com/v1cvwNf/yellow-track-suit.png',
          price: 135
        },
        {
          id: 29,
          name: 'White Blouse',
          imageUrl: 'https://imgbb.com/qBcrsJg/white-vest.png',
          price: 20
        }
      ]
    },
    mens: {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 30,
          name: 'Camo Down Vest',
          imageUrl: 'https://imgbb.com/xJS0T3Y/camo-vest.png',
          price: 325
        },
        {
          id: 31,
          name: 'Floral T-shirt',
          imageUrl: 'https://imgbb.com/qMQ75QZ/floral-shirt.png',
          price: 20
        },
        {
          id: 32,
          name: 'Black & White Longsleeve',
          imageUrl: 'https://imgbb.com/55z32tw/long-sleeve.png',
          price: 25
        },
        {
          id: 33,
          name: 'Pink T-shirt',
          imageUrl: 'https://imgbb.com/RvwnBL8/pink-shirt.png',
          price: 25
        },
        {
          id: 34,
          name: 'Jean Long Sleeve',
          imageUrl: 'https://imgbb.com/VpW4x5t/roll-up-jean-shirt.png',
          price: 40
        },
        {
          id: 35,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://imgbb.com/mh3VM1f/polka-dot-shirt.png',
          price: 25
        }
      ]
    }
  }
};

const shopReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
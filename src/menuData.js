// All items and prices are transcribed verbatim from the cafe's printed menu.
// Prices are exclusive of tax. "Hot/Ice" items show both prices separated by "/".

export const menuGroups = [
  {
    group: 'Coffee & Drinks',
    categories: [
      {
        name: 'Coffee & Espresso',
        note: 'Hot/Ice',
        items: [
          { name: 'Espresso', price: '510' },
          { name: 'Americano', price: '580/590' },
          { name: 'Cappuccino', price: '640/670' },
          { name: 'Cortado', price: '610' },
          { name: 'Mocha', price: '760/790' },
          { name: 'Flat White', price: '680/710' },
        ],
      },
      {
        name: 'Latte',
        note: 'Hot/Ice',
        items: [
          { name: 'Classic Latte', price: '670/720' },
          { name: 'Spanish Latte', price: '750/770' },
          { name: 'Cinnamon Latte', price: '760/790' },
          { name: 'Hazelnut Latte', price: '760/790' },
          { name: 'Coconut Latte', price: '760/790' },
          { name: 'Caramel Latte', price: '760/790' },
          { name: 'French Vanilla Latte', price: '760/790' },
          { name: 'Salted Vanilla Latte', price: '760/790' },
          { name: 'Pistachio Latte', price: '970/990' },
          { name: 'Salted Caramel Latte', price: '760/990' },
          { name: 'San Sebastian Cheesecake Latte', price: '990', badge: 'Cold Only' },
          { name: 'Tiramisu Latte', price: '990', badge: 'Cold Only' },
        ],
      },
      {
        name: 'Mojitos',
        items: [
          { name: 'Raspberry Passionfruit Mojito', price: '880' },
          { name: 'Green Apple Kiwi Mojito', price: '880' },
        ],
      },
      {
        name: 'Americano Tonic',
        note: 'All 860',
        items: [
          { name: 'Peach Americano Tonic', price: '860' },
          { name: 'Passionfruit Americano Tonic', price: '860' },
          { name: 'Coconut Americano Tonic', price: '860' },
          { name: 'Orange Americano Tonic', price: '860' },
          { name: 'Pineapple Americano Tonic', price: '860' },
        ],
      },
      {
        name: 'Chocolate Signature',
        items: [
          { name: 'Hot Chocolate', price: '980' },
          { name: 'Kunafa Hot Chocolate', price: '1150' },
        ],
      },
      {
        name: 'Matcha',
        note: 'Hot/Ice where noted',
        items: [
          { name: 'Matcha Latte', price: '860/890' },
          { name: 'Dirty Matcha', price: '995' },
          { name: 'Blueberry Matcha', price: '995' },
          { name: 'Strawberry Matcha', price: '995' },
          { name: 'Mango Matcha', price: '995' },
          { name: 'Coconut Matcha', price: '1050' },
        ],
      },
      {
        name: 'Frappe',
        items: [
          { name: 'Vanilla Bean Frappe', price: '950' },
          { name: 'Ferrero Rocher Frappe', price: '950' },
        ],
      },
      {
        name: 'Green Door Artisanal',
        items: [
          { name: 'V60', price: '1095' },
          { name: 'French Press', price: '995' },
        ],
      },
    ],
  },
  {
    group: 'Food & Patisserie',
    categories: [
      {
        name: 'Patisserie',
        items: [
          { name: 'Butter Croissant', price: '690' },
          { name: 'Pain Au Chocolat', price: '890' },
          { name: 'Almond Croissant', price: '840' },
          { name: 'Pistachio Chocolate Croissant', price: '940' },
        ],
      },
      {
        name: 'Something Savoury',
        items: [
          { name: 'Fajita Danish', price: '690' },
          { name: 'Chicken Mushroom Quiche', price: '750' },
        ],
      },
      {
        name: 'Sando',
        items: [
          { name: 'Smoky Chicken Sando', price: '940' },
          { name: 'Beef Bacon Jalapeno Sando', price: '960' },
          { name: 'Spicy Chicken Sando', price: '940' },
          { name: 'Chicken Fajita Sando', price: '940' },
          { name: 'Chicken Shiitake Sando', price: '940' },
        ],
      },
      {
        name: 'Something Sweet',
        items: [
          { name: 'Chocolate Fudge Cake', price: '690' },
          { name: 'Fresh Mango Cake', price: '690' },
          { name: 'Burnt Cheesecake', price: '990' },
          { name: 'Blueberry Muffin', price: '590' },
          { name: 'Chocolate Chip Brown Butter Cookies', price: '520' },
          { name: 'Chocolate Crunch Cookies', price: '590' },
          { name: 'Pistachio Double Choco Cookie', price: '530' },
          { name: 'Banana Bread', price: '490' },
          { name: 'Fudge Brownie', price: '490' },
        ],
      },
      {
        name: 'Breakfast Bagels',
        items: [
          { name: 'Breakkie Egg & Sausage Bagel', price: '670' },
          { name: 'Chicken Salad Bagel', price: '680' },
          { name: 'Mortadella Egg & Cheese Bagel', price: '660' },
        ],
      },
    ],
  },
]

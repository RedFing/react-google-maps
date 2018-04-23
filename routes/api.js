const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const data = [
    {
      id: 1,
      position: { lat: 43.853958, lng: 18.406500 },
      icon: 'https://image.flaticon.com/icons/png/128/131/131075.png',
      header: 'Tesla Model S',
      description: 'In very good shape. ',
      price: '140$ per day',
      category: 'cars',
      productImg: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Tesla_Model_S_%28Facelift_ab_04-2016%29_trimmed.jpg',
    },
    {
      id: 2,
      position: { lat: 43.857409, lng: 18.406722 },
      header: 'Trek CrossRip 2',
      icon: 'https://image.flaticon.com/icons/png/128/131/131075.png',
      description: `Trek designed the CrossRip 2 to do more than just get you from A to B, 
      but it’ll still do that incredibly well. The CrossRip 2 has a road geometry and drop
      bars for fitness riding and longer jaunts and enough tire clearance to equip it with
      rubber burly enough to take on gravel. It also has mounting points for fenders and racks if you travel 
      with more than just a backpack. If you only have room for one bike in your tiny urban apartment, consider this one.`,
      price: '10$ per day',
      category: 'bicycles',
      productImg: 'https://cdn.gearpatrol.com/wp-content/uploads/2017/11/The-9-Best-Commuter-Bikes-gear-patrol-Trek-Crossrip-2.jpg',
    },
    {
      id: 3,
      position: { lat: 43.817409, lng: 18.426722 },
      icon: 'https://image.flaticon.com/icons/png/128/131/131075.png',
      header: 'Raleigh Carlton 8',
      description: `Raleigh’s eight-speed Carlton is a solid affordable option that doesn’t need customization. 
      The Carlton uses a steel, diamond-shaped frame with dual top tubes as a base for a range of good components 
      including a Shimano drivetrain, front and rear fenders and a low-profile basket that contains an unfinished 
      wooden platform. Additional details include a bell and reflective tape on the frame (for those who arrive early and leave late).`,
      price: '10$ per day',
      category: 'bicycles',
      productImg: 'https://cdn.gearpatrol.com/wp-content/uploads/2017/11/The-9-Best-Commuter-Bikes-gear-patrol-Raleigh-Carlton-8.jpg',
    },
  ];
  res.json(data);
});

module.exports = router;


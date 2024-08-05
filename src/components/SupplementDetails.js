import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, ButtonGroup, Badge, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Slideshow from './Slideshow';
import Whey from '../assets/images/wheyprotein.png';
import Casein from '../assets/images/casein.png';
import Plantbased from '../assets/images/plantbased.png';
import Collagen from '../assets/images/collagen.png';
import Eggwhite from '../assets/images/eggwhite.png';
import Soy from '../assets/images/soyprotein.png';
import Pea from '../assets/images/peaprotein.png';
import Creatine from '../assets/images/creatine.png';
import './SupplementDetails.css';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import {  useCart } from './CartContext';
import Layout from './Layout';
const products = [
  { 
    id: 1, 
    name: 'Whey Protein Powder', 
    priceLevels: {
        entry: "680",
        mid: "1680",
        high: "4200"
    },
        images: [Whey], 
        description: 'Whey protein is a fast-digesting protein derived from milk. It is rich in essential amino acids and is ideal for post-workout recovery, promoting muscle repair and growth.',
        offers: ['Get for ₹599 with coupon', 'Additional offers available'],
        rating: 4.8,
        reviewsCount: 1200,
        vendor: 'ABC Company',
  },
  { 
    id: 2, 
    name: 'Casein Protein Powder', 
    priceLevels: {
        entry: "680",
        mid: "1680",
        high: "4200"
    },
        images: [Casein], 
        description: 'Casein protein is a slow-digesting protein also derived from milk. It provides a steady release of amino acids, making it ideal for nighttime use to support muscle repair while you sleep.',
        offers: ['Get for ₹599 with coupon', 'Additional offers available'],
        rating: 4.8,
        reviewsCount: 1200,
        vendor: 'ABC Company',
  },
  { 
    id: 3, 
    name: 'Plant Based Protein Powder', 
    priceLevels: {
        entry: "680",
        mid: "1680",
        high: "4200"
    },
        images: [Plantbased], 
        description: 'Plant-based protein powders are made from various plant sources such as pea, rice, hemp, and soy. They are suitable for vegans and individuals with dairy allergies.',
        offers: ['Get for ₹599 with coupon', 'Additional offers available'],
        rating: 4.8,
        reviewsCount: 1200,
        vendor: 'ABC Company',
  },
  { 
    id: 4, 
    name: 'Collagen Protein Powder', 
    priceLevels: {
        entry: "680",
        mid: "1680",
        high: "4200"
    },
        images: [Collagen], 
        description: ' Collagen protein is derived from animal sources and is known for supporting joint, skin, hair, and nail health in addition to muscle repair.',
        offers: ['Get for ₹599 with coupon', 'Additional offers available'],
        rating: 4.8,
        reviewsCount: 1200,
        vendor: 'ABC Company',
  },
  { 
    id: 5, 
    name: 'Egg White Protein Powder', 
    priceLevels: {
        entry: "680",
        mid: "1680",
        high: "4200"
    },
        images: [Eggwhite], 
        description: ' Egg white protein is made from the whites of eggs and is a highly bioavailable and complete protein source, free from dairy and soy.',
        offers: ['Get for ₹599 with coupon', 'Additional offers available'],
        rating: 4.8,
        reviewsCount: 1200,
        vendor: 'ABC Company',
  },
  { 
    id: 6, 
    name: 'Soy Protein Powder', 
    priceLevels: {
        entry: "680",
        mid: "1680",
        high: "4200"
    },
        images: [Soy], 
        description: ' Soy protein is derived from soybeans and is a complete plant-based protein, rich in essential amino acids and suitable for vegetarians and vegans.',
        offers: ['Get for ₹599 with coupon', 'Additional offers available'],
        rating: 4.8,
        reviewsCount: 1200,
        vendor: 'ABC Company',
  },
  { 
    id: 7, 
    name: 'Pea Protein Powder', 
    priceLevels: {
        entry: "680",
        mid: "1680",
        high: "4200"
    },
        images: [Pea], 
        description: 'Pea protein is a plant-based protein made from yellow peas. It is hypoallergenic and suitable for those with dietary restrictions or allergies.',
        offers: ['Get for ₹599 with coupon', 'Additional offers available'],
        rating: 4.8,
        reviewsCount: 1200,
        vendor: 'ABC Company',
  },
  { 
    id: 8, 
    name: 'Creatine Monohydrate', 
    priceLevels: {
        entry: "680",
        mid: "1680",
        high: "4200"
    },
        images: [Creatine], 
        description: 'Creatine monohydrate is a popular supplement used to improve strength, increase lean muscle mass, and help muscles recover more quickly during exercise.',
        offers: ['Get for ₹599 with coupon', 'Additional offers available'],
        rating: 4.8,
        reviewsCount: 1200,
        vendor: 'ABC Company',
  },

];
const recommendedProducts=[
  { 
    id: 1, 
    name: 'Whey Protein Powder', 
    price: "680",
       
        image: Whey, 
        offers: ['Get for ₹599 with coupon', 'Additional offers available'],
        rating: 4.8,
    
  },
  { 
    id: 2, 
    name: 'Casein Protein Powder', 
    price: 680,
    image: Casein, 
    offers: ['Get for ₹599 with coupon', 'Additional offers available'],
    rating: 4.8,
  },
  { 
    id: 3, 
    name: 'Plant Based Protein Powder', 
    price:680,
    image: Plantbased, 
    offers: ['Get for ₹599 with coupon', 'Additional offers available'],
    rating: 4.8,
  },
  { 
    id: 4, 
    name: 'Collagen Protein Powder', 
    price:1680,
    image: Collagen, 
    offers: ['Get for ₹599 with coupon', 'Additional offers available'],
    rating: 4.8,
  },
  { 
    id: 5, 
    name: 'Egg White Protein Powder', 
    price:4200,
    image:Eggwhite, 
    offers: ['Get for ₹599 with coupon', 'Additional offers available'],
    rating: 4.8,
  },
  { 
    id: 6, 
    name: 'Soy Protein Powder', 
    price: 4200,
    image: Soy, 
    offers: ['Get for ₹599 with coupon', 'Additional offers available'],
    rating: 4.8,
  },
  { 
    id: 7, 
    name: 'Pea Protein Powder', 
    price:4200,
    image: Pea, 
    offers: ['Get for ₹599 with coupon', 'Additional offers available'],
    rating: 4.8,
  },
  { 
    id: 8, 
    name: 'Creatine Monohydrate', 
    price: 1680,
    image: Creatine, 
    offers: ['Get for ₹599 with coupon', 'Additional offers available'],
    rating: 4.8,
    },
];

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleViewDetails = () => {
    navigate(`/supplement/${product.id}`);
  };
 return(
  <div className="product-card">
    <img src={product.image} alt={product.name} className="product-image" onClick={handleViewDetails}/>
    <h3 className="product-name">{product.name}</h3>
    <p style={{fontWeight:'bold'}}>{product.rating} ★ </p>
    <p style={{fontWeight:'bold'}}>₹{product.price}</p>
    <p className="product-price">{product.offers} </p>
  </div>
 );
};

const SupplementDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [count, setCount] = useState(1);
  const [selectedLevel, setSelectedLevel] = useState('mid');
  const { addToCart } = useCart();
  

  if (!product) return <Typography>Product not found</Typography>;

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handleAddToCart = () => {
    console.log("Handle Add to Cart:", { ...product, price: product.priceLevels[selectedLevel], count });
    addToCart({ ...product, price: product.priceLevels[selectedLevel], count });
  };
  
  const filteredRecommendedProducts = recommendedProducts.filter(p => p.id !== product.id);

  return (
    <Layout>
      <Container style={{ marginTop: "4rem" }}>
        <Box display="flex" flexDirection="row" gap={4}>
          <Box width="50%">
            <Slideshow images={product.images} />
          </Box>
          <Box width="50%">
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>{product.name}</Typography>
            <FormControl fullWidth style={{ marginTop: '20px', marginBottom: '20px' }}>
              <InputLabel id="treadmill-level-label">Tubs</InputLabel>
              <Select
                labelId="treadmill-level-label"
                id="treadmill-level"
                value={selectedLevel}
                label="Tubs"
                onChange={handleLevelChange}
              >
                <MenuItem value="entry">1lbs</MenuItem>
                <MenuItem value="mid">2lbs</MenuItem>
                <MenuItem value="high">greater than 2lbs</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="h4">₹{product.priceLevels[selectedLevel]}</Typography>
            <Typography style={{ marginTop: '20px' }}>{product.description}</Typography>
            {product.offers.map((offer, index) => (
              <Typography key={index} color="secondary" style={{ marginTop: '10px' }}>
                {offer}
              </Typography>
            ))}
            <Typography style={{ marginTop: '10px' }}>
              <strong>Rating:</strong> {product.rating} ★ ({product.reviewsCount} reviews)
            </Typography>
            <div style={{ marginTop: '20px' }}>
              <ButtonGroup>
                <Button
                  aria-label="reduce"
                  onClick={() => setCount(Math.max(count - 1, 0))}
                  style={{ marginRight: '3vh', backgroundColor: 'lavender' }}
                >
                  <RemoveIcon fontSize="small" style={{ color: 'purple' }} />
                </Button>
                <Badge color="secondary" badgeContent={count}>
                  <ShoppingCartIcon />
                </Badge>
                <Button
                  aria-label="increase"
                  onClick={() => setCount(count + 1)}
                  style={{ marginLeft: '3vh', backgroundColor: 'lavender' }}
                >
                  <AddIcon fontSize="small" style={{ color: 'purple' }} />
                </Button>
              </ButtonGroup>
            </div>
            <div style={{display:'flex'}}>
            <Button variant="contained" onClick={handleAddToCart} style={{ marginTop: '20px', backgroundColor: 'purple', width: '100%',marginRight:'2rem' }}>Add To Cart</Button>
            <Button component={Link} to="/cart" variant='contained' style={{backgroundColor:'purple',height:'5vh',marginTop:'3vh'}}><LocalMallIcon/></Button>
            </div>
          </Box>
        </Box>
      </Container>
      <div className="supplement-details">
        <h2>You Might Also Like</h2>
        <div className="recommended-products">
          {filteredRecommendedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default SupplementDetails;
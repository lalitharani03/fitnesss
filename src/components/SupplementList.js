import React, { useState } from 'react';
import { Grid} from '@mui/material';
import SupplementFilters from './SupplementFilters';
import SupplementItem from './SupplementItem';
import Whey from '../assets/images/wheyprotein.png';
import Plantbased from '../assets/images/plantbased.png';
import Casein from '../assets/images/casein.png';
import Collagen from '../assets/images/collagen.png';
import Eggwhite from '../assets/images/eggwhite.png';
import Pea from '../assets/images/peaprotein.png';
import Soy from '../assets/images/soyprotein.png';
import Creatine from '../assets/images/creatine.png';
import Layout from './Layout';
import './SupplementList.css';

const allProducts = [
  { id: 1, name: 'Whey Protein', price: 1050, image: Whey, rating: 4.8, type: 'Proteins', brand: 'Brand A' },
  { id: 2, name: 'Casein Protein', price: 8999, image: Casein, rating: 4.5 },
  { id: 3, name: 'Plant Based Protein', price: 3999, image: Plantbased, rating: 4.1 },
  { id: 4, name: 'Collagen Protein', price: 999, image: Collagen, rating: 4.1 },
  { id: 5, name: 'Egg White Protein', price: 249, image: Eggwhite, rating: 4.1 },
  { id: 6, name: 'Soy Protein', price: 12999, image: Soy, rating: 4.7 },
  { id: 7, name: 'Pea Protein', price: 299, image: Pea, rating: 4.6 },
  { id: 8, name: 'Creatine Monohydrate', price: 10999, image: Creatine, rating: 4.5 },
];

const SupplementList = () => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  const filteredProducts = allProducts.filter(product => {
    const { priceRange = [], brands = [], types = [], flavors = [], dietaryPreferences = [], form, goal, ratings } = filters;

    const isInPriceRange = !priceRange.length || priceRange.some(range => {
      const [min, max] = range.split('-').map(Number);
      return product.price >= min && (max ? product.price <= max : true);
    });

    const isInBrand = !brands.length || brands.includes(product.brand);
    const isInType = !types.length || types.includes(product.type);
    const isInFlavor = !flavors.length || flavors.includes(product.flavor);
    const isInDietaryPreference = !dietaryPreferences.length || dietaryPreferences.includes(product.dietaryPreference);
    const isInForm = !form || form === product.form;
    const isInGoal = !goal || goal === product.goal;
    const isInRating = !ratings || product.rating >= ratings;

    return isInPriceRange && isInBrand && isInType && isInFlavor && isInDietaryPreference && isInForm && isInGoal && isInRating;
  });

  return (
    <Layout>
      <div style={{display:'flex'}}>
          <SupplementFilters onFilterChange={handleFilterChange} />
      <div style={{ flex: 1, paddingLeft: '20px',marginRight:'3rem'
       }}>
        <Grid container spacing={2}>
          {filteredProducts.map(product => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <SupplementItem product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
          </div>
    </Layout>
  );
};

export default SupplementList;

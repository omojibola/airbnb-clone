import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  return (
    <div className='searchPage'>
      <div className='searchPage_info'>
        <p>62 stays . 26 august to 30 august . 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant='outlined'>Cancellation flexibility</Button>
        <Button variant='outlined'>Type of place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and beds</Button>
        <Button variant='outlined'>More filters</Button>
      </div>
      <SearchResult
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU'
        location='Private Room in the center of London'
        title='Stay at this spacious Edwardian House'
        description='1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free Parking . Washing Machine'
        star={4.73}
        price='£30 / night'
        total='£117 total'
      />
      <SearchResult
        img='https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg'
        location='Private Room in the center of London'
        title='Independed luxury studio apartment'
        description='2 guest .3 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free Parking . Washing Machine'
        star={4.3}
        price='£40 / night'
        total='£157 total'
      />
      <SearchResult
        img='https://smartertravel.com/uploads/2017/07/Untitled-design-8.jpg'
        location='Private Room in the center of London'
        title='London Studio Apartments'
        description='4 guest .4 bedroom .2 bed .2 shared bathrooms . Wifi . Kitchen . Free Parking . Washing Machine'
        star={4.73}
        price='£35 / night'
        total='£207 total'
      />
    </div>
  );
};

export default SearchPage;

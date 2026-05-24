import React from 'react'
import ReviewsPage from './ReviewsPage'

export const metadata = {
//   title: "All Reviews",
title:{
    absolute:"Satiesfied Users",
},
  description: "Best fastfood",
};

const AllReviews = () => {
  return (
    <div>
        <ReviewsPage></ReviewsPage>
    </div>
  )
}

export default AllReviews
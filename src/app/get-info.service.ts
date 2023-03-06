import { Injectable } from '@angular/core';
import {ECommerce} from '../app/ecommerce';
@Injectable({
  providedIn: 'root'
})
export class GetInfoService {

  constructor() { }


  getProductInfo():ECommerce[]{
    return[
      {
    id:666,
    name:'Attitude is Everything',
    star:5,
    imageUrl:'/assets/images4.jpg',
    DeliveryTime:'4 Days',
    origin:'India'
      },
  {
    id:667,
    name:'Think and Grow Rich',
    star:5,
    imageUrl:'/assets/images1.jpg',
    DeliveryTime:'4 Days',
    origin:'India'
  },
{
  id:668,
  name:'A Thousan Spendid',
  star:5,
  imageUrl:'/assets/images2.jpg',
  DeliveryTime:'4 Days',
  origin:'India'
    },
{
  id:669,
  name:'You Can',
  star:5,
  imageUrl:'/assets/images3.jpg',
  DeliveryTime:'4 Days',
  origin:'India'
    },

  ]
  

}
}
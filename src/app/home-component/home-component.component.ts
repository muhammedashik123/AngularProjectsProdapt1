import { Component, OnInit } from '@angular/core';
import {GetInfoService } from '../get-info.service';
import {ECommerce} from '../ecommerce';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  ecomModel:ECommerce[]=[];
  //username:any;
  constructor(private ecomServie:GetInfoService,
    private routea:ActivatedRoute) {
   }

  ngOnInit(): void {
    this.routea.params.subscribe(params=>{
      if(params['searchBook']){
        this.ecomModel=this.ecomServie.getProductInfo().
        filter(ecomModel=>ecomModel.name.toLowerCase().includes(params['searchBook'].toLowerCase()));
      }
      else{
        this.ecomModel=this.ecomServie.getProductInfo();
      }
    })

    




    
  }


}

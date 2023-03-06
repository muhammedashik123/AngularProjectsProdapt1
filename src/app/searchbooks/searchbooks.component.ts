import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchbooks',
  templateUrl: './searchbooks.component.html',
  styleUrls: ['./searchbooks.component.css']
})
export class SearchbooksComponent implements OnInit {
  searchBook:String='';
  constructor(private routesa:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
  }
  searchBookMethod():void
  {
    if(this.searchBook){
      this.route.navigateByUrl('/search/'+this.searchBook)
    }
    
  }

}

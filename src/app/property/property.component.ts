import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
})
export class PropertyComponent implements OnInit {

  items = [
    { "id": 1, "name": "Commercial", "description": "With Large Garden", "details": "Bedroom: 4 Bathroom: 2, Land Size: 5000 sqft, Building Size: 2400 sqft House", "price": "40000/Month", "src": "../../assets/img/35.jpg/", "address": "334, Rock Hill, 313001, Udaipur" },
    { "id": 2, "name": "Residential ", "description": "In Forests- Fresh Air", "details": "Bedroom: 3, Bathroom: 2, Land Size: 4000 sqft, Building Size: 2000 square House", "price": "30000/Month", "src": "../../assets/img/36.jpg/", "address": "55, Rock Hill, Mississippi, 313001, Surat  " },
    { "id": 3, "name": "Villa", "description": "With its Own Pool", "details": "Bedroom: 2, Bathroom: 2, Land Size: 3000 sqft, Building Size: 1400 square House", "price": "25000/Month", "src": "../../assets/img/31.jpg/", "address": "334, Rock Hill, Mississippi, 313001, dispur" },
    { "id": 4, "name": "Apartment", "description": "With Best rates", "details": "Bedroom: 2, Bathroom: 1, Land Size: 3400 sqft, Building Size: 1400 square House", "price": "10000/Month", "src": "../../assets/img/24.jpg/", "address": "334, Rock Hill, Mississippi, 313001, Agra" },
    { "id": 5, "name": "Beach House", "description": "Balcony View", "details": "Bedroom: 1, Bathroom: 1, Land Size: 2000 sqft, Building Size: 1200 sqft House", "price": "5000/Month", "src": "../../assets/img/16.jpg/", "address": "334, Rock Hill, Mississippi, 313001, Gujarat" },
    { "id": 6, "name": "Duplex", "description": "Duplex for full Family", "details": "Bedroom: 4, Bathroom: 3, Land Size: 6000 sqft, Building Size: 4000 square House", "price": "50000/Month", "src": "../../assets/img/30.jpg/", "address": "334, Rock Hill, Mississippi, 313001, Mumbai" }
  ];
  proc = [
    { "id": 1, "name": "Family house", "description": "2 BHK House for rent in surat 1200 sqft", "price": "45000/Month", "src": "assets/img/37.jpg/", "Details": "3 Beds, 2 Bath" },
    { "id": 2, "name": "Apartments", "description": "3 BHK House for rent in Rukmini 2000 sqft", "price": "50000/Month", "src": "assets/img/38.jpg/", "Details": "2 Beds, 1 Bath" },
    { "id": 3, "name": "Residential", "description": "2 BHK House for rent in Dispur 1800 sqft", "price": "20000/Month", "src": "assets/img/45.jpg/", "Details": "2 Beds, 1 Bath" },
    { "id": 4, "name": "Commercial", "description": "3 BHK House for rent in Hatigaon 1450 sqft", "price": "20000/Month", "src": "assets/img/35.jpg/", "Details": "3 Beds, 1 Bath" },
    { "id": 5, "name": "Villa", "description": "2 BHK House for rent in Ambari 1200 sqft", "price": "20000/Month", "src": "assets/img/40.jpg/", "Details": "2 Beds, 1 Bath" },
    { "id": 6, "name": "Paying Guest", "description": "2 BHK House for rent in Rajgarh 900 sqft", "price": "20000/Month", "src": "assets/img/41.jpg/", "Details": "3 Beds, 2 Bath" },
    { "id": 7, "name": "Street House", "description": "2 BHK House for rent in Rajgarh 900 sqft", "price": "20000/Month", "src": "assets/img/42.jpg/", "Details": "2 Beds, 1 Bath" },
    { "id": 8, "name": "Bungalow", "description": "2 BHK House for rent in Rajgarh 900 sqft", "price": "20000/Month", "src": "assets/img/43.jpg/", "Details": "4 Beds, 3 Bath" },
    { "id": 9, "name": "Balcony View", "description": "2 BHK House for rent in Rajgarh 900 sqft", "price": "20000/Month", "src": "assets/img/44.jpg/", "Details": "3 Beds, 2 Bath" },
  ];
  resultItems = [...this.items];
  constructor(private router: Router, private dataService: DataserviceService) { }


  ngOnInit(): void {
    this.dataService.getSearchValue().subscribe((res: any) => {
      console.log('res', res);
      this.resultItems = [];
      if (res.length) {
        this.items.forEach((item: any) => {
          if (item.name.toLowerCase().includes(res.toLowerCase()) || item.description.toLowerCase().includes(res.toLowerCase())) {
            console.log('Item #$#$#$#$#$#$$$$$$$$$#', item);
            this.resultItems.push(item);
          }
        })
      }
      else {
        this.resultItems = [...this.items];
      }
      console.log('this.resultItems@@', this.resultItems);
      console.log('this.product', this.items);
    })
    if (!localStorage.getItem('email')?.length && !localStorage.getItem('uid')?.length) {
      this.router.navigate(['/Login']);
    }
  }
}


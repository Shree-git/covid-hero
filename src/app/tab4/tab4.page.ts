import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  restaurantsData;
  constructor(private rService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsData = this.rService.getAllRestaurants();
  }

  
}

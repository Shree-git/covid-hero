import { Component, OnInit } from '@angular/core';

import { RestaurantsService } from 'src/app/services/restaurants.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-post-review',
  templateUrl: './post-review.page.html',
  styleUrls: ['./post-review.page.scss'],
})
export class PostReviewPage implements OnInit {

  ratingScore;
  review: string;
  businessId: string;
  restaurants;
  business;
  constructor(private restaurantService: RestaurantsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      this.businessId = this.activatedRoute.snapshot.paramMap.get('business');
      this.business = this.restaurantService.getRestaurant(this.businessId)
  }

  ngOnInit() {

  }



  postReview() {
    this.restaurantService.postReview(this.businessId, this.ratingScore, this.review).then(()=>{
      this.router.navigate(['/tabs/tab4']);
    });
  }

}

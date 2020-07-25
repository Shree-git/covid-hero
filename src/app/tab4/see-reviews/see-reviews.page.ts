import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { Observable } from 'rxjs';
import { Review } from 'src/app/models/review.model';


@Component({
  selector: 'app-see-reviews',
  templateUrl: './see-reviews.page.html',
  styleUrls: ['./see-reviews.page.scss'],
})
export class SeeReviewsPage implements OnInit {

  businessId: string;
  business;
  reviews: Observable<Review[]>
  constructor(private activatedRoute: ActivatedRoute, private restaurantService: RestaurantsService, private router: Router) {
    this.businessId = this.activatedRoute.snapshot.paramMap.get('business');
    this.business = this.restaurantService.getRestaurant(this.businessId);
  }

  ngOnInit() {
    this.reviews = this.getReviews();
  }


  getReviews(){
    return this.restaurantService.getAllReviews(this.businessId);
  }

  sendLike(reviewId, like, dislike){
    let likes: number = like + 1;
    this.restaurantService.updateLikes(this.businessId, reviewId, likes, dislike)
  }

  sendDislike(reviewId, like, dislike){
    let dislikes: number = dislike + 1;
    this.restaurantService.updateLikes(this.businessId, reviewId, like, dislikes)
  }

}

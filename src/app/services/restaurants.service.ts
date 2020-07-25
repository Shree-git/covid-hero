import { Injectable } from '@angular/core';
import { restaurantsData } from '../models/restaurants'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AccountService } from './account.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  restaurantsData;
  review: Review
  constructor(private http: HttpClient, private accountService: AccountService, private afs: AngularFirestore) {

  }

  getAllRestaurants() {

    return restaurantsData;
  }

  getRestaurant(restaurantID){
    return restaurantsData.find(elem => elem.business_id == restaurantID)
  }

  getAllReviews(businessId): Observable<Review[]>{
    return this.afs.collection('businesses').doc(businessId).collection('reviews').valueChanges() as Observable<Review[]>;
  }

  postReview(businessId, ratingScore, reviewData){
    let user = this.accountService.getAccount();
    this.review = {
      id: this.afs.createId(),
      business_id: businessId,
      userName: user.fName + ' ' + user.lName,
      rating: ratingScore,
      review: reviewData,
      likes: 0,
      dislikes: 0
    }
    return this.afs.collection('businesses').doc(businessId).collection('reviews').doc(this.review.id).set(this.review);
  }

  updateLikes(businessId, reviewId, likes, dislikes){
    return this.afs.collection('businesses').doc(businessId).collection('reviews').doc(reviewId).update({
      likes: likes,
      dislikes: dislikes
    });
  }
}

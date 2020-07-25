import { Component } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  articles: any;
  date;
  constructor(private newsApiService: NewsapiService) {}

  ionViewDidEnter(){
    this.newsApiService.getNews().subscribe((data)=>{
      console.log(data)
      this.articles = data['articles']
      this.date = new Date();
    })
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $: any;
@Injectable({
  providedIn: 'root'
})

export class NewsapiService {
  API_KEY = 'cd8914267c5444f4bf3518dac4ca41ee';

  constructor(private httpClient: HttpClient) {

  }

  getNews() {
    return this.httpClient.get('http://newsapi.org/v2/top-headlines?' +
      'q=COVID&' +
      'country=us&' +
      'pageSize=2&' +
      'from=2020-07-03&' +
      'apiKey=cd8914267c5444f4bf3518dac4ca41ee');
  }

  getCases() {
   
    return this.httpClient.get('https://hub.mph.in.gov/api/3/action/datastore_search?resource_id=8b8e6cd7-ede2-4c41-a9bd-4266df783145&limit=5')
  }
}

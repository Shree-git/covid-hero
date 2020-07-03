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

      // 'sortBy=popularity&' +
      'apiKey=cd8914267c5444f4bf3518dac4ca41ee');
  }

  getCases() {
    //   var data = {
    //     resource_id: '8b8e6cd7-ede2-4c41-a9bd-4266df783145', // the resource id
    //     limit: 5, // get 5 results
    //     q: 'jones' // query for 'jones'
    //   };
    //   $.ajax({
    //     url: 'https://hub.mph.in.gov/api/3/action/datastore_search',
    //     data: data,
    //     dataType: 'jsonp',
    //     success: function(data) {
    //       alert('Total results found: ' + data.result.total)
    //       return data.result
    //     }
    //   })
    // }
    // var data = 
    return this.httpClient.get('https://hub.mph.in.gov/api/3/action/datastore_search?resource_id=8b8e6cd7-ede2-4c41-a9bd-4266df783145&limit=5')
  }
}

//Author : Sabrina Tarin Chowdhury


import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts'; 


@Component({
  selector: 'app-predictive-index',
  templateUrl: './predictive-index.page.html',
  styleUrls: ['./predictive-index.page.scss'],
})

/*let selectElement = document.getElementById('InCounty');
let covid_marion =[];
if(selectElement.nodeValue == 'Marion'){
  covid_marion = [ 
    { data: [12992, 18101, 23207, 28325, 32216, 35646], label: 'ETS' },
    { data: [14783, 20212, 23301,24513, 25723, 27168], label: 'ARIMA' },
    { data: [12882, 12317, 13658, 12811, 13800, 15682], label: 'Neural Network' }
  ];
}*/

export class PredictiveIndexPage implements OnInit {
  
  users: any[] = [
    {
      id: 1,
      first: 'Adams',
    },
    {
      id: 2,
      first: 'Marion', 
    },
    {
      id: 3,
      first: 'Tippecanoe',
    }
  ];


  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: Label[] = ['August', 'September', 'October', 'November', 'December', 'January'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = []; 
 
  //if(this.selectedLevel.name==='Adams'){};
  //if(this.selectedLevel==="Adams"){}

  public barChartData: ChartDataSets[] = 
  [
    { data: [0, 0, 0, 0, 0, 0], label: 'ETS' },
    { data: [0, 0, 0, 0, 0, 0], label: 'ARIMA' },
    { data: [0, 0, 0, 0, 0, 0], label: 'Neural Network' }
  ];
  /*[
    { data: [12992, 18101, 23207, 28325, 32216, 35646], label: 'ETS' },
    { data: [14783, 20212, 23301,24513, 25723, 27168], label: 'ARIMA' },
    { data: [12882, 12317, 13658, 12811, 13800, 15682], label: 'Neural Network' }
  ];*/
  selectedLevel;
  constructor() {} 
  ngOnInit() {}

  selected(){
    let data1= [];
    let data2= [];
    let data3= [];    

    if(this.selectedLevel==="Adams"){
      data1 = [159, 246, 357, 555, 842, 1085];
      data2 = [306, 678, 945, 1274, 1575, 1857];
      data3 = [164, 810, 299, 178, 736, 1339];
    }
    if(this.selectedLevel==='Marion'){
      data1= [12992, 18101, 23207, 28325, 32216, 35646];
      data2= [14783, 20212, 23301, 24513, 25723, 27168]; 
      data3= [12882, 12317, 13658, 12811, 13800, 15682];
    }   

    if(this.selectedLevel==='Tippecanoe'){
      data1 = [1714, 2571, 3142, 4285, 5142, 6571];
      data2 = [606, 2727, 4578, 6935, 9634, 11824];
      data3 = [1212, 1553, 2076, 1461, 1892, 2415];
  }
  
    this.barChartData[0].data = data1;
    this.barChartData[1].data = data2;
    this.barChartData[2].data = data3;
}
}


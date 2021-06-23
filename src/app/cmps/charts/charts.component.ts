import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  @Input() chart: any
  constructor() { }

  // chartToShow = {
  //   title: '',
  //   type: ChartType.AreaChart,
  //   data: [['']],
  //   options: {
  //     colors: ['#cfaa01'],
  //   }
  // }

  ngOnInit(): void {
    console.log(this.chart)
    // this.chartToShow.title = this.chart.name
    // if (this.chart.values) {
    //   const data = this.chart.values.map((value: any) => {
    //     return [new Date(value.x * 1000), value.y]
    //   })
    //   data.sort(function (a: any, b: any) { return a[0] - b[0] });
    //   this.chart.data = data;
    // }
  }
}

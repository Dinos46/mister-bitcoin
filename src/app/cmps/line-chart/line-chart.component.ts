import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'src/app/models/bitcoin.model';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  chart: Chart
  @Input() data: Array<any>;
  @Input() chartType: any;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
    this.chart = {
      type: this.chartType,
      data: this.data,
      title: this.title,
      options: {
        backgroundColor: { fill: 'transparent' }
      }
    }
  }

}

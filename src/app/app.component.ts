import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js/auto'
import {valueOrDefault} from "chart.js/helpers";
import colorLib from "@kurkle/color";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demo';

  chart: any = [];

  constructor() {}

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 30],
            borderWidth: 1,
            borderColor: 'rgb(255, 99, 132)',
          },{
            label: '# of Votes',
            data: [22, 20, 15, 5, 18, 10],
            borderWidth: 1,
            borderColor: 'rgb(128,255,99)',
          },
        ],
      },
      options: {
        scales: {

          y1: {
            beginAtZero: true,
            position: 'right',
          },

        },
      },
    });
  }
}

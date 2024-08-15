import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-marketing-plan',
  standalone: true,
  templateUrl: './marketing-plan.component.html',
  styleUrls: ['./marketing-plan.component.css']
})
export class MarketingPlanComponent implements OnInit {
  chart: any;

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    Chart.register(...registerables); // Register necessary components
    this.chart = new Chart('progressChart', {
      type: 'bar', // Chart type
      data: {
        labels: ['TODO', 'DOING', 'DONE'], // Y-axis labels
        datasets: [
          {
            label: '# of Tasks',
            data: [4, 6, 7], // X-axis data representing the number of tasks
            backgroundColor: ['red', 'yellow', 'green'], // Colors for bars
            borderWidth: 1,
          }
        ]
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Task Count'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Task Status'
            }
          }
        }
      }
    });
  }
}

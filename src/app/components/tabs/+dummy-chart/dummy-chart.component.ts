import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dummy-chart',
  templateUrl: './dummy-chart.component.html',
  styleUrls: ['./dummy-chart.component.scss']
})
export class DummyChartComponent implements OnInit {
  public title: string;

  constructor(private route: ActivatedRoute) {
    this.title = this.route.snapshot.data.title;
  }

  ngOnInit() {
  }

}

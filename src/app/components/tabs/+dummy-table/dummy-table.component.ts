import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dummy-table',
  templateUrl: './dummy-table.component.html',
  styleUrls: ['./dummy-table.component.scss']
})
export class DummyTableComponent implements OnInit {
  public title: string;

  constructor(private route: ActivatedRoute) {
    this.title = this.route.snapshot.data.title;
  }

  ngOnInit() {
  }

}

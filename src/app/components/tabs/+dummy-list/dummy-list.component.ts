import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dummy-list',
  templateUrl: './dummy-list.component.html',
  styleUrls: ['./dummy-list.component.scss']
})
export class DummyListComponent implements OnInit {

  public title: string;

  constructor(private route: ActivatedRoute) {
    this.title = this.route.snapshot.data.title;
  }

  ngOnInit() {
  }

}

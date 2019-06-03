import { Component, OnInit } from '@angular/core';

import { DetailService } from './detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  detail$;

  constructor(private detailService: DetailService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.detail$ = this.detailService.getDetailById(+this.route.snapshot.paramMap.get('id'));
  }

}

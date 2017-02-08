import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent implements OnInit {
  name: string;
  id: string;
  description: string;
  url: string;
  postData: any;

  constructor(private webService: WebService, private activatedRoute: ActivatedRoute) {
    this.url = this.activatedRoute.snapshot.url[0] + "/" + this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.webService.getReq(this.url).subscribe(
      response => {
        let itemx = response.json()[0];
        this.id = itemx._id;
        this.name = itemx.name;
        this.description = itemx.description;
      },
      error => console.error(error)
    );
  }
}

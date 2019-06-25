import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postListArrays : any[];
   loveIts = 0;
  

  constructor() { }

  ngOnInit() {
  }

  onLoveIts() {
    // console.log("Love it!");
     return this.loveIts++;

  }

  onDontLoveIts() {
    // console.log("Don't love it!");
    return this.loveIts--;
  }

}

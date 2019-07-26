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
    
     return this.loveIts++;

  }

  onDontLoveIts() {
    
    return this.loveIts--;
  }

}

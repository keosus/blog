import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  
  

posts = [
  {
    title: "Mon premier post",
    content: "Ceci est mon premier post.",
    
    created_at: new Date()
    
  },

  {
    title: "Mon deuxième post",
    content: "Ceci est mon deuxième post.",
    loveIts: 0,
    created_at: new Date()
  },

  {
    title: "Mon troisième post",
    content: "Ceci est mon troisième post.",
    loveIts: 0,
    created_at: new Date()
  }

];

constructor() {

  setTimeout(
    () => {
      this.isAuth = true;
    }, 2000
  );

}



}
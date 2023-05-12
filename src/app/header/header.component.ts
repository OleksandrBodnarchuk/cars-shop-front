import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private authorised:boolean=false;

  isAuthorised(){
    return this.authorised;
  }

}

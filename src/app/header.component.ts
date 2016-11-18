import {Component} from "@angular/core";
/**
 * Created by Palko on 17/11/2016.
 */

@Component({
  selector: 'headerScroll',
  host: {'(window:scroll)': 'track($event)'},

  templateUrl: './header.component.html',
  styleUrls: ['./app.component.css']
})
export class HeaderComponent {

  currPos: number = 0;
  nextPos: number = 0;
  hideElement = false;
  i:number =0;

  track():void {

    this.currPos = (window.pageYOffset);

    //displays the header at the beginning
    if(this.i<1){
      this.hideElement = false;
      this.i++;
    }

    //hides the header when scrolling down
    else if (this.nextPos <this.currPos) {
      this.nextPos = this.currPos;
      this.hideElement = true;
    }

    //displays the header when scrolling up
    else {
      this.nextPos > this.currPos;
      this.nextPos = this.currPos;
      this.hideElement = false;
    }

  }
}

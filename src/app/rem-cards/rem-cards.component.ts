import { Component, OnInit, Input } from '@angular/core';
import { AuthService, TokenPayload} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rem-cards',
  templateUrl: './rem-cards.component.html',
  styleUrls: ['./rem-cards.component.css']
})
export class RemCardsComponent implements OnInit {
  
  // parentMessage = "message from parent";
  credentialsID: TokenPayload={
    twitterID_Card: ''
  }


  flipped = false;
  serverData: JSON;
 
  constructor(private auth: AuthService, private router: Router) { }


  ngOnInit() {
  }
  flipIt() {
    this.flipped = !this.flipped;
  }

  submit(){
    this.auth.postTwitterID(this.credentialsID).subscribe(
      data => {
        this.serverData = data as JSON;
        // console.log(this.serverData);
        // this.auth.other(this.serverData);
        console.log(this.serverData);
        this.router.navigateByUrl('/recommendation');
      },
      err => {
        console.error(err);
      }
    )
  }


}

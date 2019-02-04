import { Component, OnInit, ViewChild } from '@angular/core';
import {GridOptions} from "ag-grid/main";
import {GridOptionsWrapper} from "ag-grid/main";
import { AuthService, TokenPayload} from '../auth.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import "ag-grid-enterprise";
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import {Movie} from '../movie';
import {NgxNavigationWithDataComponent} from 'ngx-navigation-with-data';
import { LoginComponent } from '../ui/login/login.component';
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';

@Component({
  providers:[LoginComponent],
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  serverData: JSON;
  credentialsID: TokenPayload = {
    twitterID_Card: 'sach10_4u'
  }

  // movieData: MovieData = {
  //   movie: {}
  // }

  flipped = false;
  imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkL8GlKZ775j3f0VVgS1rU8L2LoX5UEM6fKv_eGLzeza27WYH"

  flipIt() {
    this.flipped = !this.flipped;
  }

  
  private gridOptionsWrapper: GridOptionsWrapper;
columnDefs: any[];
rowData: Movie[];
// rowData: any[];
perMovie
public gridOptions: GridOptions;
url:any;
private displayGrid = false;
private gridApi;
private gridColumnApi;
private defaultColDef; 
private overlayLoadingTemplate;
private rowSelection;
private persons:any[];
private rowClassRules;
private sendToClipboard;
private status:String;

params;

constructor(private login: LoginComponent, private _authService: AuthService, private router: Router, public arouter: ActivatedRoute) {
console.log('inside constructor')
 
  // const navigation = this.arouter.snapshot.paramMap.get('id');
  // console.log(navigation);
 
  // const state = navigation.extras.state as {example : string};
// console.log(state)
    this.columnDefs = [
      {
        headerName: "url",
        field: "url" ,
        width: 80
      },
      {
        headerName: "title",
        field: "title",
        width: 230
      }
      // {
      //   headerName: "Genres",
      //   field: "Genres",
      //   width: 150
      // },
      // {
      //   headerName: "Rank",
      //   field: "Rank",
      //   width: 100
      // }
    ];

    // this.rowData = [
    //   {
    //     Sr_No: "1",
    //     Name: "URI",
    //     Genres: "War film",
    //     Rank: 5
    //   },
    //   {
    //     Sr_No: "2",
    //     Name: "Sultan",
    //     Genres: "Documentary",
    //     Rank: 5
    //   },

    //   {
    //     Sr_No: "3",
    //     Name: "Welcome",
    //     Genres: "Comedy",
    //     Rank: 5
    //   }
    // ];
  // this.gridOptions = {
  //   columnDefs: this.columnDefs,
  //   getRowStyle: function(params) {
  //       if (params.data.status === 'Sanction Screening Fail' || params.data.status === 'Transaction Rollback') {
  //           return {
  //               'background-color': 'rgb(255,199,206)'
  //           };
  //       } else if (params.data.status === 'Sanction Screening Pass') {
  //           return {
  //               'background-color': 'rgb(198,239,206)'
  //           };
  //       }
  //       else if (params.data.status === 'Insufficient Balance') {
  //         return {
  //             'background-color': 'rgb(255,235,156)'
  //         };
  //     }
  //       return null;
  //   }
  // }
  // this.defaultColDef = { width: 150};
  this.rowSelection = "single";
  this.overlayLoadingTemplate =
  '<span class="ag-overlay-loading-center">Please wait while your rows are loading</span>';
  
  this.onGridReady(event)
}

 ngOnInit() {
   this.perMovie = this._authService.movie;
  console.log(this._authService.movie);
  console.log('inside ngOnInit')
    // this._authService.postTwitterID(this.credentialsID).subscribe((persons)=>{
    //   this.url=persons.url;
    //    console.log(this.url);
    // },(error)=>{
    //   console.log(error);
    // })


  //   this._authService.postTwitterID(this.credentialsID).subscribe(
  //     persons => {
  //         this.rowData = persons;
  //     },
  //     error => {
  //         console.log(error);
  //     }
  // )

    //piechart

    this._authService.getCount().subscribe((statusCount)=>{
      console.log(statusCount[0]);
      console.log(statusCount[1]);
      console.log(statusCount[2]);
      console.log(statusCount[3]);
      console.log(statusCount[4]);
      console.log(statusCount[5]);
        
      this.pieChartData[0]=Math.round(55);
      this.pieChartData[1]=Math.round(30);
      this.sanctionComplete=5;
      this.sancationFail=2;
      this.validationPass=3;
      this.validationFail=8;
      this.rollBack=6;
    },(error)=>{
       console.log(error);
    })  
    setTimeout(() => {
        if (this.chart && this.chart.chart && this.chart.chart.config) {
          this.chart.chart.config.data.labels = this.pieChartLabels;
          this.chart.chart.update();
        }
    });


  }
  onGridReady(params) {
    console.log('inside onGridReady')
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // params.rowData = this._authService.movie
    // params.api.setRowData(this._authService.movie);
    console.log(this._authService.movie);
    // params.api.setRowData(this._authService.movie);
    // params.api.setRowData(this.navCtrl.data);
    this._authService.postTwitterID(this.credentialsID).subscribe((persons)=>{
      this.url=persons.url;
      console.log(persons);
      params.api.setRowData(persons);
      
      // this.rowData = persons;
    })
    // params.api.sizeColumnsToFit();

    window.addEventListener("resize", function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
      });
    });
  }

  // onModelUpdated(){
  //   console.log('hiii')
  //   // this.rowData = this._authService.movie;
  // }
  btnClick(){
    
    this.displayGrid = true;
    console.log(this.displayGrid)
  }

  //pie chart

  private options: any = {
    legend: { position: 'left' }
  }

  totalStatus:any;
  sanctionComplete:Number;
  sancationFail:Number;
  validationFail:Number;
  validationPass:Number;
  rollBack:Number;
  legend: boolean = true;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  public pieChartLabels:string[] = ['Openness', 'Conscientiousness', 'Agreeableness', 'Extraversion', 'Neuroticism'];
  public pieChartData:number[] = [20,30,10,15,25];
  public pieChartType:string = 'pie';
  public pieChartColors:{}[] = [{ backgroundColor : ['#3333ff','#e6e6e6', '#4dff4d', '#ff1a1a', '#595959'] }];

  
  public chartClicked(e:any):void {
    console.log(e);
  }
  public chartHovered(e:any):void {
    console.log(e);
  }



  submit(){
    this._authService.postTwitterID(this.credentialsID).subscribe(
      data => {
        this.serverData = data as JSON;
        // console.log(this.serverData);
        // this.auth.other(this.serverData);
        console.log(this.serverData);
        this.router.navigateByUrl('/login');
      },
      err => {
        console.error(err);
      }
    )
  }
}

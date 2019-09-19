import { Component, OnInit } from '@angular/core';

import { Table1Service } from './table1.service';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {

  alldata:any
  data_from_API=[]
  constructor(private Table1Service:Table1Service) { }

  getdata(){

    this.Table1Service.getalldata().subscribe((res) => {
      this.alldata=res
      this.data_from_API=this.alldata.data
    });    
  }

  ngOnInit() {
    this.getdata()
  }
  
}

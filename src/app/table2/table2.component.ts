import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {

  analysis_array_from_API=[]

  subject="It  success status code atus codehjjygyjgyfyffyfyfjgjgj"
  error="Post method fails because of success status code not present put Post method fails because of success status code not present put Postmethod fails because of success method fails because of success status code not present put Postmethod fails because of success status code not present put Postmethod fails because of success status code not present put Post method fails because of success status code not present put Postmethod fails because of success status code not present put Postmethod fails because of success status code not present put Postmethod fails because of success status code not present put Post method fails because of success status code not present put Postmethod fails because of success status code not present put Post method fails because of success status code not present put Postmethod fails because of success status code not present put Postmethod fails because of success status code not present put Post method fails because of success status code not present put Postmethod fails because of success status code not present put Postmethod fails because of success status code not present put Post status code not present put Post method fails because of success status code not present putPost method fails because of success status code not present put method fails lalnawwnnnwn wddnwdnwldknwkkkkkkkkkkkkkkkk kkkkkkkkkkkkkk kkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkk"
  solution="Post method fails because of success status code notsss Post method Post method fails status code notsss Post method fails becausePost status code notsss Post method fails becausePost status code notsss Post method fails becausePost method fails because of success status code notsss Post method fails because Post method fails because of success status code notsss Post method fails becausePost method fails because of" 


  constructor() { }


  setdata(){
    for(var i=0;i<6;i++)
    {
      var obj={}
      obj['percentage']=(i+1)
      obj['api_name']= "pet/{pet}hhbhbkjnppppppppppp"
      obj['show_description_flag']=false
      obj['subject']=this.subject
      obj['error']=this.error
      obj['solution']=this.solution

      this.analysis_array_from_API.push(obj)
    }
  //  this.analysis_array_from_API[1].show_description_flag=true
    //console.log(this.data1)
  }

  update_flag(per){
    for(var i=0;i<this.analysis_array_from_API.length;i++)
    {
      if(per==i){
        if(this.analysis_array_from_API[i].show_description_flag==true)
          this.analysis_array_from_API[i].show_description_flag = false
        else
          this.analysis_array_from_API[i].show_description_flag = true  
      }
      else{
          this.analysis_array_from_API[i].show_description_flag = false
      }
    }

  }

  ngOnInit() {
  
  this.setdata()
  }


}

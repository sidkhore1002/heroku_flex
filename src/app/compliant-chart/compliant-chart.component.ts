import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

//------------------------------html-to-pdf------------------------------------
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  
//------------------------------html-to-pdf------------------------------------

@Component({
  selector: 'app-compliant-chart',
  templateUrl: './compliant-chart.component.html',
  styleUrls: ['./compliant-chart.component.css']
})
export class CompliantChartComponent implements OnInit {

  percentage = 75
  constructor() {}
  
//------------------------------html-to-pdf------------------------------------
  download_Compliance_Report(){
    var data = document.getElementById('pdf-report');  
    
    html2canvas(data,{
      scale: 1,
      allowTaint : true,
      logging: true,
      useCORS: true,
      }).then(canvas => {  
        var imgWidth = 210; 
        var pageHeight = 295;  
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        var doc = new jspdf();
        var position = 0;
  
      const contentDataURL = canvas.toDataURL('image/png')  
      
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        doc.addImage(contentDataURL, 'PNG', 2, position, imgWidth, imgHeight);
        heightLeft -= pageHeight; 
        doc.addPage();
      }
      doc.save('Compliance-Report.pdf');
    })
  }
//------------------------------html-to-pdf------------------------------------

  ngOnInit() {}
}



import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onPrint() {
    window.print();
  }

  public captureScreen() {
    const getData = document.getElementById('contentToConvert');
    html2canvas(getData).then(canvas => {
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('resume.pdf');
    });
    //   html2canvas(document.querySelector("#contentToConvert")).then(canvas => {
    //     document.body.appendChild(canvas);
    // });
  }
  public captureScreen1() {
    const getData = document.getElementById('contentToConvert');
    html2canvas(getData).then(canvas => {
      const generatedImage = canvas.toDataURL('image/png', 1.0).replace('image/png', 'image/octet-stream');
      const link = document.createElement('a');
      link.download = 'sathishkumar_9500394907.png';
      link.href = generatedImage;
      link.click();
    });
  }

}

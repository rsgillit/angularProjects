import { Component, OnInit, Input, OnChanges, SimpleChanges ,DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChange, DoCheck ,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterContentChecked, OnDestroy{

  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() { 
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called");
    console.log(changes);

  }
  ngDoCheck() {
    console.log("ngDoCheck called");

  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
    console.log("Text Content of Para: " , this.paragraph.nativeElement.textContent);

  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called");

  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
    console.log("Text Content: " , this.header.nativeElement.textContent);

  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called");

  }

  ngOnDestroy() {
    console.log("ngOnDestroy called");

  }

  ngOnInit() {
    console.log("ngOnInit called");
    console.log("Text Content: " , this.header.nativeElement.textContent);

  }


}

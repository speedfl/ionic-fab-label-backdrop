import {Component, Output, Input, ViewChild,EventEmitter, ViewChildren, QueryList, Renderer, ElementRef} from '@angular/core';
import { FabContainer} from 'ionic-angular';

@Component({
  selector: 'my-menu',
  templateUrl: 'my-menu.html'
})
export class MyMenu {

  @ViewChild('fab') fab: FabContainer;

  @ViewChild('container') container: any;

  @ViewChildren('label') labels : QueryList<any>;

  @Input("an-input") anInput : any;

  @Output("an-output") anOutput = new EventEmitter<any>();

  showMenuItem : boolean;
  
  condition1 : boolean;
  
  condition2 : boolean;
  
  condition3 : boolean;

  constructor(private _elementRef: ElementRef,
			  private _renderer: Renderer) {}

  public ngOnInit() {
	this.showMenuItem = false;
	if(anInput){
		this.condition1 = true;
		this.condition2 = true;
		this.condition3 = true;
	}
  }

  ngOnChanges() {
	this.showMenuItem = false;
  }

  hideMenuFab() {
	setTimeout(() => { this.fab.close(); }, 200);
  }

  showMenuItems() {

	this.showMenuItem = !this.showMenuItem;

	if(this.showMenuItem){
	  this._renderer.setElementClass(this.container.nativeElement, "show", true);
	  let i = 1;
	  var localLabel = this.labels.toArray().reverse()
	  localLabel.forEach(elem => {
		setTimeout(() => this._renderer.setElementClass(elem.nativeElement, "show", true), i * 10)
		i++;
	  })
	} else{
	  this._renderer.setElementClass(this.container.nativeElement, "show", false);
	  this.labels.forEach(elem => {
		this._renderer.setElementClass(elem.nativeElement, "show", false);
	  })
	}
  }
  
  action1(){
	// do something
	this.anOutput.emit(true);
  }
  
  action2(){
	// do something
	this.anOutput.emit(false);
  }
  
  action3(){
	// do something (can emitt an object)
	this.anOutput.emit(true);
  }
}
import { Component, Output, Input, ViewChild, EventEmitter, ViewChildren, QueryList, Renderer } from '@angular/core';
import { FabContainer } from 'ionic-angular';

export class FabMenuItem {
  constructor(
    public id: string,
    public icon: string,
    public label: string) { }
}

@Component({
  selector: 'custom-fab-menu',
  templateUrl: 'custom-fab-menu.html'
})
export class CustomFabMenu {

  @ViewChild('fab') fab: FabContainer;

  @ViewChild('container') container: any;

  @ViewChildren('label') labels: QueryList<any>;

  @Input("fabIcon") fabIcon: string;

  @Input("items") items: Array<FabMenuItem> = [];

  @Output("onItemSelected") anOutput = new EventEmitter<FabMenuItem>();

  public showMenuItem: boolean = false;

  constructor(private renderer: Renderer) { }

  public ngOnInit() {
    this.showMenuItem = false;
  }

  public ngOnChanges() {
    this.showMenuItem = false;
  }

  public hideMenuFab() {
    this.fab.close();
    this.showMenuItems();
  }

  public showMenuItems() {
    this.showMenuItem = this.fab._listsActive;

    this.renderer.setElementClass(this.container.nativeElement, "show", this.showMenuItem);
    let i = 1;
    var localLabel = this.showMenuItem ? this.labels.toArray().reverse() : this.labels.toArray();
    localLabel.forEach(elem => {
      setTimeout(() => this.renderer.setElementClass(elem.nativeElement, "show", this.showMenuItem), i * 50)
      i++;
    })

  }

  public action(item: FabMenuItem) {
    this.hideMenuFab();
    this.anOutput.emit(item);
  }

}

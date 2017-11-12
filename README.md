# ionic-fab-label-backdrop
A simple component to integrate to have menu with backdrop and labels on fab

This is under MIT liscence so you can copy past it improve it etc

1) Add the component to your app.module.ts

2) to use it:

`
<custom-fab-menu [fabIcon]="fabIcon" [items]="fabMenuItems" (onItemSelected)="onItemSelected($event)"></custom-fab-menu>
`
#### Note: You may need to place the tags outside the ion-content tag.

3) Finally in the parent component if you want to handle the event create a method:

`
import { FabMenuItem } from './fab-menu-item';

public fabMenuItems: Array<FabMenuItem> = [new FabMenuItem("new_calendar", "calendar", "New Calendar"),
      new FabMenuItem("sector_id", "document", "New Sector"),
      new FabMenuItem("shift_id", "time", "NEW Shift")];
public fabIcon = "add";
public onItemSelected(item: FabMenuItem) {
   console.log(item);
}
`

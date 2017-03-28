# ionic-fab-label-backdrop
A simple component to integrate to have menu with backdrop and labels on fab

This is under MIT liscence so you can copy past it improve it etc

to use it:

`
<my-menu [an-input]="yourInput" (an-output)="handleEvent($event)" *ngIf="aCondition"></my-menu>
`

Finally in the parent component if you want to handle the event create a method:

`
handleEvent(ev : any) {
   console.log(ev);
}
`
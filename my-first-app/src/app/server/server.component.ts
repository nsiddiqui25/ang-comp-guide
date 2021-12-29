import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  personName: string = "Creepo";
  personOccupation: string = "Waffle Engineer";
  personAge: number = 35;

  getPersonAge() {
    return this.personAge;
  }
}

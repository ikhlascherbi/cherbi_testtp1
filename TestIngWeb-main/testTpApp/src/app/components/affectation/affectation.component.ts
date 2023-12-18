import {Component, OnInit} from '@angular/core';
import {StagiaireCrudService} from "../../services/stagiaire-crud.service";



@Component({
  selector: 'app-affectation',
  standalone: true,
  imports: [],
  templateUrl: './affectation.component.html',
  styleUrl: './affectation.component.css'
})
export class affectation implements OnInit {


  ngOnInit(): void {
    // Initialize data or make necessary calls when the component is created
  }

  // Implement logic for random assignment button
  onRandomAssignmentClick(): void {
    this.stagiaireService.performRandomAssignment().subscribe(() => {
      // Refresh the data or perform any additional actions after assignment
    });
  }
}



import { Component, OnInit, Input } from '@angular/core';
import { Objective, objectiveResourcesAllocated } from '../objective';

@Component({
  selector: 'app-objective-summary',
  templateUrl: './objective-summary.component.html',
  styleUrls: ['./objective-summary.component.css']
})
export class ObjectiveSummaryComponent implements OnInit {
  @Input() objective: Objective;
  @Input() unit: string;

  constructor() { }

  ngOnInit() {
  }

  allocatedResources(): number {
    return objectiveResourcesAllocated(this.objective);
  }

  allocationSummary(): string {
    if (this.isRejected()) {
      return this.objective.resourceEstimate + '';
    } else if (this.isPartiallyAllocated()) {
      return this.allocatedResources() + ' of ' + this.objective.resourceEstimate;
    } else {
      return this.allocatedResources() + '';
    }
  }

  isRejected(): boolean {
    return this.allocatedResources() <= 0;
  }

  isPartiallyAllocated(): boolean {
    return !this.isRejected() && this.allocatedResources() < this.objective.resourceEstimate;
  }
}

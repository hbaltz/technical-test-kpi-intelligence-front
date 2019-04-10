import { Component, EventEmitter, Output } from '@angular/core';

/**
 *MAnages the filter on city and progress status
 *
 * @export
 * @class FilterComponent
 */
@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html"
})
export class FilterComponent {
  /**
   * Emitter to send filter to other component
   */
  @Output() buttonFilterClicked = new EventEmitter<Object>();

  /**
   * the city's name
   */
  public city: string;
  /**
   * The progress status
   */
  public prog_stat: string;

  /**
   * Constructor
   */
  constructor() {
    this.city = null;
    this.prog_stat = null;
  }

  /**
   * Recovers city and progress status and emits them
   */
  launchFilter() {
    if (this.city || this.prog_stat) {
      this.buttonFilterClicked.emit({'city': this.city, 'progress_status': this.prog_stat});
    }
  }
}

import { Directive, Input, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: string;
  @HostBinding('class') stateClass;

  constructor() {}

  ngOnChanges() {
    this.stateClass = this.formatClass(this.appState);
  }

  private removeAccents(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  // A livrer => state-aliver
  // En cours => state-encours
  // Livrée => state-livree

  private formatClass(str: string): string {
    return `state-${this.removeAccents(str).toLowerCase().replace(' ', '')}`;
  }
}

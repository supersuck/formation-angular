import { Directive, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnInit {
  @Input() appState: string;
  @HostBinding('class') stateClass;

  constructor() {

  }

  ngOnInit() {
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

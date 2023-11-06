import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'notify-component',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss'],
})
export class NotifyComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}

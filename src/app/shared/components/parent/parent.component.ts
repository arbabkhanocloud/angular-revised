import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() value = 'ProAcedmy';

  constructor() {
    console.log('Parent Constructor gets Called');
    // console.log('Value Input Property in const is:', this.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng on changes gets called');
    // console.log(changes);
  }

  ngOnInit(): void {
    console.log('ng Onit Called');
    // console.log('Value Input Property in OnInit is:', this.value);
  }

  ngDoCheck(): void {
    console.log('ng DoCheck Called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}

import { Observable, filter, map, Subject, takeUntil } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-revised';

  inputText = '';
  destroy: boolean = true;

  // obs$ = new Observable<number>((observer) => {
  //   observer.next(5);
  //   observer.next(10);
  //   observer.next(15);
  // });

  destoyed$ = new Subject<void>();

  ngOnInit(): void {
    // this.obs$
    //   .pipe(
    //     filter((val) => val > 3),
    //     map((val) => val * 5)
    //   )
    //   .pipe(takeUntil(this.destoyed$))
    //   .subscribe({
    //     next(val) {
    //       console.log('value after transformation is:', val);
    //     },
    //   });
  }

  ngOnDestroy(): void {
    this.destoyed$.complete();
  }

  onSubmit(el: HTMLInputElement) {
    // console.log('onsubmit click');
    this.inputText = el.value;
  }

  onDestroy() {
    this.destroy = false;
  }
}

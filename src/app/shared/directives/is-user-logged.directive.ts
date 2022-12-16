import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appisLogged]'
})
export class IsUserLoggedDirective {

  constructor(private elementRef: ElementRef) { }

  @Input() set appisLogged(isLoggedIn: boolean){
    if(!isLoggedIn){
      this.elementRef.nativeElement.style.display = 'none';

    }
    else{
      this.elementRef.nativeElement.style.display = 'block';

    }
  }

}

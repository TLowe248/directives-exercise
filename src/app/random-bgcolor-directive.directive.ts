import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appRandomBGColorDirective]',
  standalone: true
})
export class RandomBGColorDirectiveDirective {
	private hostElementRef = inject<ElementRef>(ElementRef);

  constructor() {
		this.hostElementRef.nativeElement.style.backgroundColor = this.getRandomColor();
		console.log(this.hostElementRef.nativeElement.style.backgroundColor)
  }

  getRandomColor() {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
  }

}

import { Directive, ElementRef, HostListener,Input ,OnInit} from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  private initialTagStyle: string;
  constructor(private el: ElementRef) {
    this.initialTagStyle = this.el.nativeElement.style.fontWeight
   }
  @Input() highlightType?: "type" | "tag";
 
  /* @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.textDecoration = 'underline';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.textDecoration = 'none';
  }

  @HostListener('mouseover') onMouseOver(){
    if(this.hightlightTag === 'tag'){
      this.el.nativeElement.style.color = 'red';
    } 
  }*/
  @HostListener("mouseover") onMouseOver() {
    if (this.highlightType === "type") {
      // set type background color
      this.el.nativeElement.style.textDecoration = "underline";
    }

    if (this.highlightType === "tag") {
      // set tag font color
      this.el.nativeElement.style.fontWeight = '900';
    }
  }
  @HostListener("mouseout") onMouseOut() {
    if (this.highlightType === "type") {
      // reset type background color
      this.el.nativeElement.style.textDecoration = "none"
    }

    if (this.highlightType === "tag" ) {

      // reset tag font color back to original value
      this.el.nativeElement.style.fontWeight = this.initialTagStyle;
    }
  }

  

}

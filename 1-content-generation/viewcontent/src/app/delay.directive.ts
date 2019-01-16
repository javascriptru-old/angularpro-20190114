import { Directive, ViewContainerRef, TemplateRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[delay]'
})
export class DelayDirective implements OnInit {

  @Input() delay: number;

  constructor(
    public view: ViewContainerRef,
    private template: TemplateRef<HTMLElement>
  ) {}

  ngOnInit() {
    setTimeout(_ => {
      this.view.createEmbeddedView(this.template);
    }, this.delay);
  }

}

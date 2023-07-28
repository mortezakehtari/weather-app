import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-loading',
  templateUrl: './skeleton-loading.component.html',
  styleUrls: ['./skeleton-loading.component.scss']
})
export class SkeletonLoadingComponent implements OnInit {

  constructor() { }
  @Input({required: true}) skeltWidth!: string;
  @Input({required: true}) skeltHeight!: string;
  @Input() skeltCircle!: boolean;
  @Input() marginAuto!: boolean;
  @Input() display!: string;
  @Input() margin!: string;
  ngOnInit(): void {
  }
  getStyles() {
    const styles = {
      'width': this.skeltWidth ? this.skeltWidth : '',
      'height': this.skeltHeight ? this.skeltHeight : '',
      'border-radius': this.skeltCircle ? '50%' : '',
      'margin-left': this.marginAuto ? 'auto' : '',
      'margin-right': this.marginAuto ? 'auto' : '',
      'display': this.display ? this.display : 'block',
      'margin': this.margin ? this.margin : '',
    }
    return styles;
  }

}

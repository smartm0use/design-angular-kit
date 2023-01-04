import { ContentChildren, Directive, HostBinding, HostListener, Input, QueryList } from '@angular/core';
import { ButtonColor, ButtonSize } from '../../../interfaces/core';
import { IconComponent } from '../../utils/icon/icon.component';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';

@Directive({
  selector: '[itButton]',
  exportAs: 'itButton'
})
export class ButtonDirective {

  /**
   * Button color
   */
  @Input('itButton') color?: ButtonColor;

  /**
   * Button size
   */
  @Input() size?: ButtonSize;

  /**
   * Indicates whether the button occupies all the width available to it.
   */
  @Input() block?: ButtonSize;

  /**
   * If button is disabled
   */
  @Input() @HostBinding('disabled') disabled?: BooleanInput;

  /**
   * The icon children
   */
  @ContentChildren(IconComponent) icons?: QueryList<IconComponent>;

  /**
   * The progress bar children
   */
  @ContentChildren(ProgressBarComponent) progressBar?: ProgressBarComponent;

  private isFocus = false;

  @HostListener('focus')
  onFocus() {
    this.isFocus = true;
  }

  @HostListener('blur')
  onBlur() {
    this.isFocus = false;
  }

  @HostBinding('class')
  get hostClasses(): string {
    let cssClass = 'btn';

    if (this.color) {
      cssClass += ` btn-${this.color}`;
    }

    if (this.size) {
      cssClass += ` btn-${this.size}`;
    }

    if (this.block) {
      cssClass += ' btn-block';
    }

    if (isTrueBooleanInput(this.disabled)) {
      cssClass += ' disabled';
    }

    if (this.isFocus) {
      cssClass += ' focus--mouse';
    }

    if (this.icons?.length && !this.progressBar) {
      cssClass += ' btn-icon';
    }

    if (this.progressBar) {
      cssClass += ' btn-progress';
    }

    return cssClass;
  }

}
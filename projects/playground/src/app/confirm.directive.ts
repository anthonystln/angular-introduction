import { Directive, HostListener, Input } from "@angular/core";

@Directive({
    standalone: true,
    selector: 'a[confirm]',
})

export class ConfirmDirective {
    @Input('confirm-message')
    message = 'Êtes vous sûr ?';

    @HostListener('click')
    onClickLink() {
        return window.confirm(this.message);
    }
}
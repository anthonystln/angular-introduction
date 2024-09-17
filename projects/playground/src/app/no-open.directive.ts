import { Directive, HostListener } from "@angular/core";

@Directive({
    standalone: true,
    selector: 'a[no-open]',
})

export class NoOpenDirective {
    @HostListener('click')
    onClickLink() {
        return false;
    }
}
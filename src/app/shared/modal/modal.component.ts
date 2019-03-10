import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent {
    @Input()
    modalHeading: string;

    @Output()
    close = new EventEmitter();

    public onClose(): void {
        this.close.emit();
    }
}

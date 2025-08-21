import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-file-dropzone',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './file-dropzone.component.html',
  styleUrls: ['./file-dropzone.component.scss']
})
export class FileDropzoneComponent {

  @ViewChild('fileInput') fileInput!: ElementRef;

  @Output() fileSelected = new EventEmitter<File>();

  public onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.fileSelected.emit(file);
    }
  }

  public openFilePicker(): void {

    this.fileInput.nativeElement.click();
  }

}

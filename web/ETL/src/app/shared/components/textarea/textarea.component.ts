import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
}

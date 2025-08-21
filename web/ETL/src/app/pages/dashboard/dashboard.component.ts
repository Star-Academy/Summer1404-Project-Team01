import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TextInputComponent } from '../../shared/components/text-input/text-input.component';
import { TextareaComponent } from '../../shared/components/textarea/textarea.component';
import { FileDropzoneComponent } from '../../shared/components/file-dropzone/file-dropzone.component';
import { DatasetService } from '../../services/dataset.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonComponent,
    TextInputComponent,
    TextareaComponent,
    FileDropzoneComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private datasetService = inject(DatasetService);


  public selectedFile: File | null = null;
  public datasetName: string = '';
  public datasetDescription: string = '';


  public onFileDropped(file: File): void {
    this.selectedFile = file;
    console.log('File received in dashboard:', this.selectedFile.name);
  }


  public upload(): void {
    if (!this.selectedFile || !this.datasetName) {
      alert('Please select a file and enter a dataset name.');
      return;
    }

    this.datasetService.uploadDataset(this.selectedFile, this.datasetName, this.datasetDescription)
      .subscribe({
        next: (response) => {
          console.log('Upload successful!', response);
          alert('Dataset uploaded successfully!');

        },
        error: (err) => {
          console.error('Upload failed', err);
          alert('Upload failed. Please try again.');
        }
      });
  }
}

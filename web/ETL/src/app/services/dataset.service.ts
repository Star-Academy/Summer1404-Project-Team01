import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {
  private http = inject(HttpClient);
  private uploadUrl = 'http://localhost:5226/api/datasets/upload';

  public uploadDataset(file: File, name: string, description: string): Observable<any> {
    const formData = new FormData();

    formData.append('file', file, file.name);
    formData.append('name', name);
    formData.append('description', description);

    return this.http.post(this.uploadUrl, formData);
  }
}

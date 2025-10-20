import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../../../shared/models/api-response.model';
import { DataUsage } from '../models/data-usage.model';

@Injectable({ providedIn: 'root' })
export class DataUsageService {
  private apiUrl = `${environment.apiBaseUrl}/customer`;

  constructor(private http: HttpClient) {}

  getDataUsage(): Observable<ApiResponse<DataUsage>> {
    return this.http.get<ApiResponse<DataUsage>>(this.apiUrl);
  }
}

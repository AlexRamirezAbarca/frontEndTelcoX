import { Component, OnInit } from '@angular/core';
import { DataUsageService } from '../services/data-usage.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { DataUsage } from '../models/data-usage.model';
import { ApiResponse } from '../../../shared/models/api-response.model';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-data-usage',
  standalone : true,
  imports: [CommonModule],
  templateUrl: './data-usage.component.html',
  // styleUrl: './data-usage.css'
})
export class DataUsageComponent implements OnInit {
  data!: DataUsage;
  loading = true;
  error: string | null = null;
  lastUpdated: string | null = null;

  constructor(private dataUsageService: DataUsageService,  public themeService: ThemeService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
  this.loading = true;

  const MIN_LOADING_TIME = 500; // milisegundos
  const start = Date.now();

  this.dataUsageService.getDataUsage().subscribe({
    next: (res: ApiResponse<DataUsage>) => {
      const elapsed = Date.now() - start;
      const remaining = MIN_LOADING_TIME - elapsed;

      setTimeout(() => {
        this.data = res.data;
        this.lastUpdated = this.data.lastUpdated;
        this.loading = false;
      }, remaining > 0 ? remaining : 0);
    },
    error: (err) => {
      const elapsed = Date.now() - start;
      const remaining = MIN_LOADING_TIME - elapsed;

      setTimeout(() => {
        console.error('Error al obtener datos:', err);
        this.error = 'No se pudieron cargar los datos del cliente.';
        this.loading = false;
      }, remaining > 0 ? remaining : 0);
    },
  });
}


  get dataUsagePercent(): number {
    if (!this.data) return 0;
    return (this.data.dataUsed / this.data.dataLimit) * 100;
  }

  get minutesUsagePercent(): number {
    if (!this.data) return 0;
    return (this.data.minutesUsed / this.data.minutesLimit) * 100;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
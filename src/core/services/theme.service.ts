import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkModeKey = 'darkMode';

  constructor() {
    // Aplicar el tema guardado al iniciar
    const darkMode = localStorage.getItem(this.darkModeKey);
    if (darkMode === 'true') {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }
  }

  enableDarkMode() {
    document.documentElement.classList.add('dark');
    localStorage.setItem(this.darkModeKey, 'true');
  }

  disableDarkMode() {
    document.documentElement.classList.remove('dark');
    localStorage.setItem(this.darkModeKey, 'false');
  }

  toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
  }

  isDarkMode(): boolean {
    return document.documentElement.classList.contains('dark');
  }
}

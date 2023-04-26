import { Component, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class LogUpdateService {
  checkForUpdates() {
    throw new Error('Method not implemented.');
  }

  constructor(private swUpdate: SwUpdate, private snackBar: MatSnackBar) {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe(() => {
        const snackBarRef = this.snackBar.open('New version available', 'Update');
        snackBarRef.onAction().subscribe(() => {
          this.swUpdate.activateUpdate().then(() => document.location.reload());
        });
      });
    }
  }   
}


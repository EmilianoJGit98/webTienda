import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-hub',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './hub.component.html',
  styleUrl: './hub.component.css',
})
export class HubComponent {}

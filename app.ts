import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./non-auth/header/header";
import { UserActivityService } from './services/user-activity.service';
import { Footer } from "./non-auth/footer/footer";
import { NgxUiLoaderModule } from 'ngx-ui-loader';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxUiLoaderModule, Header, Footer],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pcchandra');
  constructor(private userActivity: UserActivityService) { }
}
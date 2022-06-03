import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'OutroAPP--';

  constructor(private titleService: Title) {
    setTimeout(() => {
      this.titleService.setTitle('OutroAPP--');
    }, 1000);
  }

  ngOnInit(): void {}
}

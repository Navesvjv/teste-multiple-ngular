import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // openNewTab(url: string): void {
  //   let newWindow = window.open(url);

  //   newWindow!.addEventListener(
  //     'load',
  //     () => (newWindow!.document.title = url),
  //     false
  //   );

  //   // setTimeout(() => {
  //   //   newWindow!.document.title = `${url}`;
  //   // }, 100);
  // }
}

import { Component, OnInit } from '@angular/core';
import { Foo } from '@models';
import { SomeApisService } from '@some-apis';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  content: Foo;

  constructor(private someApisService: SomeApisService) {}

  ngOnInit() {
    this.content = this.someApisService.getFoo();
  }
}

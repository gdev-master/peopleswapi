import { Component, OnDestroy, OnInit } from '@angular/core';
import { PeopleService } from './Service/people.service'
import * as data from './models/person.model'
import { Observable, Subscription } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  arrayOfPeople: data.IData;
  counter: number = 1;
  nextPageSubs: Subscription;
  previousPageSubs: Subscription;

  constructor(private appService: PeopleService) {}

  ngOnInit() {
    this.appService.getPeople()
    .subscribe((res: data.IData) => {
      this.arrayOfPeople = res;
    });

  }

  nextPage() {
    this.counter = this.counter + 1;
    this.appService.getPeopleByPages(this.counter)
    .subscribe((val) => {
      this.arrayOfPeople = val;
    });
  }

  previousPage() {
    this.counter = this.counter - 1;
    this.appService.getPeopleByPages(this.counter)
    .subscribe((val) => {
      this.arrayOfPeople = val;
    } )
  }

  ngOnDestroy() {
    this.nextPageSubs.unsubscribe();
    this.previousPageSubs.unsubscribe();
  }

}

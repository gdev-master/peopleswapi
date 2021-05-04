import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as data from "../../models/person.model"
@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.css']
})
export class SearchPersonComponent implements OnInit {


  @Output() changeNextPage = new EventEmitter<null>();
  @Output() changePreviousPage = new EventEmitter<null>();
  @Input('counter') counter: number;

  constructor() { }

  ngOnInit(): void {
  }

  nextPage() {

    this.changeNextPage.emit()
  }

  previousPage() {
    this.changePreviousPage.emit()
  }

}

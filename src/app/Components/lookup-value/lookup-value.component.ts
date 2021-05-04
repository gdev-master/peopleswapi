import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as people from '../../models/person.model'

@Component({
  selector: 'app-lookup-value',
  templateUrl: './lookup-value.component.html',
  styleUrls: ['./lookup-value.component.css']
})
export class LookupValueComponent implements OnInit, OnChanges {

  @Input() peopleData: people.IPerson[];
  displayedColumns: string[] = ['name', 'birth_year', 'eye_color', 'gender', 'hair_color', 'height',
                                'mass', 'skin_color'];
  dataSource: MatTableDataSource<people.IPerson>;

  constructor() { }

  ngOnInit(): void {
    }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.peopleData);
  }

}


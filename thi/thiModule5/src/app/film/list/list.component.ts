import {Component, OnInit} from '@angular/core';

import {MatDialog} from "@angular/material/dialog";
import {DeleteComponent} from "../delete/delete.component";
import {Car} from "../model/car";
import {CarServiceService} from "../service/car-service.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  carList: Car [] = [];
  name: any;

  constructor(private carServiceService: CarServiceService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.carServiceService.getAllCar().subscribe(dataCar => {
      this.carList = dataCar;
    })
  }

  delete(id: number, nameCar: string) {
    let dialog = this.dialog.open(DeleteComponent, {
      data: {
        name: nameCar
      }
    });
    dialog.afterClosed().subscribe(nextClose => {
      if (nextClose == `true`) {
        this.carServiceService.delete(id).subscribe(data => {
          this.ngOnInit();
          console.log(data);
        })
      }
    })
  }

}

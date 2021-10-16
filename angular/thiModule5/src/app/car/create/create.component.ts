import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CarServiceService} from "../service/car-service.service";

import {Router} from "@angular/router";
import {Car} from "../model/car";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  carForm: FormGroup = new FormGroup({
    id: new FormControl(""),
    typeCar: new FormControl(""),
    nameCar: new FormControl(""),
    diemDi: new FormControl(""),
    diemDen: new FormControl(""),
    phone: new FormControl(""),
    email: new FormControl(""),
    timeDi: new FormControl(""),
    timeDen: new FormControl("")
  })

  constructor(private carServiceService: CarServiceService, private router: Router) {
  }

  ngOnInit(): void {

  }

  save(): void {
    console.log(this.carForm.value);
    this.carServiceService.saveCar(this.carForm.value).subscribe((response: Car) => {
        console.log(response);
        this.router.navigateByUrl("");
      }, error => (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}

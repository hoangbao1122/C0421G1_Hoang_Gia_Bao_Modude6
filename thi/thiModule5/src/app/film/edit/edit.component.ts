import {Component, OnInit} from '@angular/core';
import {Car} from "../model/car";

import {Subscription} from "rxjs";
import {CarServiceService} from "../service/car-service.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  car!: Car;



  public subcription: Subscription | undefined;
  public subcriptionParam: Subscription | undefined;
  carForm: FormGroup = new FormGroup({
    id: new FormControl(""),
    TypeCar: new FormControl("", [Validators.required]),
    NameHomeCar: new FormControl("", [Validators.required]),
    diemDi: new FormControl("", [Validators.required]),
    diemDen: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.pattern('[0-9]{10}'), Validators.required]),
    email: new FormControl("", [Validators.required,Validators.email]),
    timeDi: new FormControl("", [Validators.required,Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')]),
    timeDen: new FormControl("", [Validators.required,Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')])
  })

  constructor(private carServiceService: CarServiceService, private router: Router, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadData();

  }

  loadData() {
    this.subcriptionParam = this.activeRoute.params.subscribe((data: Params) => {
      let id = data['id'];
      this.subcription = this.carServiceService.getCar(id).subscribe((car: Car) => {
        console.log(car);
        this.car = car;
      })
    })
  }

  update(id: number) {
    console.log(this.carForm.value);
    this.carServiceService.update(this.carForm.value).subscribe((response: Car) => {
        console.log(response);
        this.router.navigateByUrl("");
      }, error => (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}

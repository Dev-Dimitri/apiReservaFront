import { CarModel } from 'src/app/Models/CarModel';
import { FormCarService } from './form-car.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; 
import { FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-car',
  templateUrl: './form-car.component.html',
  styleUrls: ['./form-car.component.css']
})
export class FormCarComponent implements OnInit {

  data: any;
  dadosApi: any[] = []
  carMapper: CarModel = {};
  formCar!: FormGroup
  observableCar?: Observable<CarModel>
  selectedFiles?: FileList;
  currentFileUpload?: File;
  selectedFile = null;

  constructor(
    private fCarService: FormCarService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(){
    this.listarAlunosDb();
    this.createForm();
    this.paramMapRoute();
  }

  paramMapRoute(){
    this.activatedRoute.paramMap
    .pipe(map((parameters) => parameters.get('id')))
    .subscribe((id) => {this.loadCar((id))} );
  }

  private loadCar(id: string | null){
    if(id){
      this.fCarService.listarCarsById(parseInt(id)).subscribe(carModel => {
        this.carMapper = carModel
        console.log(carModel);
        this.setCarros(carModel);
      })
    }
  }

  createForm(){
    this.formCar = new FormGroup({
      pkCar: new FormControl(''),
        nameCar: new FormControl(''),
        modelCar: new FormControl(''),
        companyCar: new FormControl(''),
        dateManufacture: new FormControl(''),
        descricao: new FormControl(''),
        imageCar: new FormControl('')
    })
  }

  onChangeButton(){
    this.carMapper.nameCar = this.formCar.get("nomeCar")?.value
    console.log(this.carMapper);
  }

   resetForm(){
    this.formCar.reset();
    this.carMapper = {};
  }

  listarAlunosDb(){
    this.fCarService.listarCars().subscribe(dadosApi => {
    this.dadosApi = dadosApi;
    }, err => {
      console.log("erro ao carregar dados!", err);
    })
  }

  salvarCarros(){
    this.carMapper.nameCar = this.formCar?.get("nameCar")?.value;
    this.carMapper.companyCar = this.formCar?.get("companyCar")?.value;
    this.carMapper.dateManufacture = this.formCar?.get("dateManufacture")?.value;
    this.carMapper.descricao = this.formCar?.get("descricao")?.value;
    this.carMapper.modelCar = this.formCar?.get("modelCar")?.value;
    this.fCarService.createCars(this.carMapper).subscribe(
      (success: CarModel) => {
        this.resetForm();
        this.toastr.success("Registro salvo com sucesso!");
        setTimeout(() => this.router.navigate(["/home/listagem"]), 1500);
    },(errorMsg) => {
      this.toastr.error(errorMsg.error.message);
    })
  }

  setCarros(evento: any) {
    if (evento) {
      this.carMapper = evento;
      this.formCar.get("pkCar")?.setValue(evento.pkCar);
      this.formCar.get("nameCar")?.setValue(evento.nameCar);
      this.formCar.get("modelCar")?.setValue(evento.modelCar);
      this.formCar.get("companyCar")?.setValue(evento.companyCar);
      this.formCar.get("dateManufacture")?.setValue(evento.dateManufacture);
      this.formCar.get("descricao")?.setValue(evento.descricao);
      this.formCar.get("imageCar")?.setValue(evento.imageCar);
    } else {
      this.carMapper = {};
    }
  }


  setForm(evento: any){
    if(evento){
      this.formCar?.get("pkCar")?.setValue(evento.pkCar);
      this.formCar?.get("disponivel")?.setValue(evento.disponivel);
      this.formCar?.get("nameCar")?.setValue(evento.nameCar);
      this.formCar?.get("modelCar")?.setValue(evento.modelCar);
      this.formCar?.get("companyCar")?.setValue(evento.companyCar);
      this.formCar?.get("dateManufacture")?.setValue(evento.dateManufacture);
    
    }else{
      this.carMapper = {};
    }
  }
  
  onFileChanged(evento: any) {
    let array = evento.target.value.split('.');
    let extensao = array[array.length - 1];
    if (extensao == 'jpg' || extensao == 'jpeg' || extensao == 'png'){
      const file = evento.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (reader.result) {
          this.formCar?.get("imageCar")?.setValue(reader.result);
          this.carMapper.imageCar = reader.result;
        }
      };
    }else {
     this.toastr.warning('Arquivo não suportado.', 'Aviso');
    }
  }
}

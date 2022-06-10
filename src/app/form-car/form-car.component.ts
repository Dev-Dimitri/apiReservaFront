import { FormCarService } from './form-car.service';
import { CarModel } from './../Models/CarModel';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; 
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-car',
  templateUrl: './form-car.component.html',
  styleUrls: ['./form-car.component.css']
})
export class FormCarComponent implements OnInit {

  data: any;
  dadosApi: Array<any> = new Array();
  carMapper: CarModel = new CarModel();
  formCar?: FormGroup
  observableCar?: Observable<CarModel>
  selectedFiles?: FileList;
  currentFileUpload?: File;
  selectedFile = null;



  constructor(
    private fCarService: FormCarService) { }

  ngOnInit(){
    this.listarAlunosDb();
  }

  carModel = new FormGroup({
    pkCar: new FormControl(''),
    nameCar: new FormControl(''),
    modelCar: new FormControl(''),
    companyCar: new FormControl(''),
    dateManufacture: new FormControl(''),
  });


  listarAlunosDb(){
    this.fCarService.listarCars().subscribe(dadosApi => {
    this.dadosApi = dadosApi;
    console.log(this.dadosApi);
    }, err => {
      console.log("erro ao carregar dados!", err);
    })
  
  }

  // salvarCarros(){
  //   this.carMapper.nameCar = this.formCar?.get("nameCar")?.value;
  //   this.carMapper.companyCar = this.formCar?.get("companyCar")?.value;
  //   this.fCarService.createCars(this.carMapper).subscribe(
  //     (success: CarModel) => {
  //       this.resetForm();
  //       this.toastr.success("Registro salvo com sucesso!");
  //   },(errorMsg) => {
  //     this.toastr.error(errorMsg.error.message, "Não foi possível concluir o cadastro!");
  //     console.log(errorMsg);
  //     console.log(this.carMapper)
  //   })

  // }

  salvando(){

  }

  resetForm(){
    this.carModel.reset();
    this.carMapper = new CarModel();
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
      this.carMapper = new CarModel();
    }

  }
  
  obterDados(){
    this.data = this.carModel.value;
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
          // this.formMantenedora.get("logomarca").setValue(reader.result);
          // this.mantenedoraModel.logomarca = reader.result;
        }
      };
    }else {
      // this.toastr.warning('Arquivo não suportado.', 'Aviso');
    }
  }


}

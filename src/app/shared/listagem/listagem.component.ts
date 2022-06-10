import { ToastrService } from 'ngx-toastr';
import { FormCarService } from './../../form-car/form-car.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CarModel } from 'src/app/Models/CarModel';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  @Output() objetoSelecionado = new EventEmitter<any>();


  dadosApi: Array<any> = new Array();
  data: any;
  carMapper: CarModel = {};
  formCar!: FormGroup
  observableCar?: Observable<CarModel>
  selectedFiles?: FileList;
  currentFileUpload?: File;
  selectedFile = null;

  

  constructor(private formCarService: FormCarService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.listarAlunosDb();


  }


  update(evento: any){

  }

  
  updateMantenedora() {
    this.formCarService.updateCars(this.carMapper).subscribe(
      (success: CarModel) => {
        this.resetForm();
        this.toastr.success("Registro atualizado com sucesso! ");
      },
      (error) => {
        this.toastr.error(error.error.message);
        this.resetForm();
      }
    );
  }

  delete(idCar: CarModel){
    this.formCarService.deleteById(idCar).subscribe(success => {
      this.toastr.success("Deletado com sucesso!");
      this.listarAlunosDb();
    }, error => {
      console.error("deu ruim");
      this.toastr.error("Erro ao deletar registro!");
    })

  }


  resetForm(){
    this.formCar.reset();
    this.carMapper = {};
  }

  


  listarAlunosDb(){
    this.formCarService.listarCars().subscribe(dadosApi => {
    this.dadosApi = dadosApi;
    console.log(this.dadosApi);
    }, err => {
      console.log("erro ao carregar dados!", err);
    })
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

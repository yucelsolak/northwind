import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  Form,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createProductAddForm();
  }
  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      ProductName: ['', Validators.required],
      UnitPrice: ['', Validators.required],
      UnitsInStock: ['', Validators.required],
      CategoryId: ['', Validators.required],
    });
  }
  add() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      this.productService.add(productModel).subscribe({
        next: (response) => {
          console.log(response);
          this.toastrService.success('Ürün başarıyla eklendi', 'Başarılı');
        },
        error: (errorResponse) => {
    if(errorResponse.status === 400){
      console.log(errorResponse)
      this.toastrService.error(errorResponse.error.message, 'Doğrulama Hatası');
    } else {
      this.toastrService.error('Bir hata oluştu', 'Hata');
    }
  },
      });
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import  {FormGroup,FormBuilder,FormControl,Validators, Form} from '@angular/forms'
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
this.add();
  }
createProductAddForm()
{
this.productAddForm=this.formBuilder.group(
  {
    productName:["",Validators.required],
    unitePrice:["",Validators.required],
    unitsInStock:["",Validators.required],
    categoryId:["",Validators.required]
  }
)
}
add(){

}
}

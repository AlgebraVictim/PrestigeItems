import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ItemService} from '../../services/item/item.service';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  form: FormGroup;
  selectedCategory: string;

  constructor(
    private fb: FormBuilder,
    private itemService: ItemService,
    private router: Router,
    private authService: AuthService
  ) {
    this.selectedCategory = '';
    this.form = this.fb.group({
      value: ['', [Validators.required, Validators.min(1)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      name: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit(): void {
  }

  submitHandler(): void {
    const data = this.form.value;
    data.category = this.selectedCategory;

    this.itemService.createItem(data).subscribe({
      next: () => {
        this.router.navigate(['/']);
        this.authService.onSuccess('Successfully created an item!');
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  selectChangeHandler(event: any): void {
    this.selectedCategory = event.target.value;
  }
}

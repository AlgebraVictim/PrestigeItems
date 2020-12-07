import {Component, OnInit} from '@angular/core';
import {ItemService} from '../../services/item/item.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  id: string;
  item: any;
  form: FormGroup;
  selectedCategory: string;

  constructor(
    private fb: FormBuilder,
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.selectedCategory = 'games';
    this.id = activatedRoute.snapshot.params.id;
    this.itemService.loadItem(this.id).subscribe(item => {
      this.item = item;
    });
    this.form = this.fb.group({
      value: ['', [Validators.required, Validators.min(1)]],
      quantity: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {

  }

  submitHandler(): void {
    const data = this.form.value;
    data.category = this.selectedCategory;

    this.itemService.editItem(data, this.id).subscribe({
      next: () => {
        this.router.navigate(['/']);
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

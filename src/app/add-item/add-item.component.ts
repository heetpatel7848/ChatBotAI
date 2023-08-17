import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { ItemService } from '../services/item.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  itemForm: FormGroup;
  @Output() itemAdded = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private itemService: ItemService, private dialogRef: MatDialogRef<AddItemComponent>) {
    this.itemForm = this.fb.group({
      itemCode: ['', Validators.required],
      barcode: ['', Validators.required],
      itemName: ['', Validators.required],
      cost: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.itemService.addItem(this.itemForm.value).subscribe(result => {

      console.log('Item added successfully:', result);

      this.itemAdded.emit();
      this.dialogRef.close();

    });
  }
}

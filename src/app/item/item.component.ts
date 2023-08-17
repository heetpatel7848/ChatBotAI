import { Component, OnInit } from '@angular/core';
import { ItemDTO } from '../Interfcae/ItemDTO';
import { ItemService } from '../services/item.service';
import { AddItemComponent } from '../add-item/add-item.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  items!: ItemDTO[];



  constructor(private itemService: ItemService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getItems();
    this.handleItemAdded();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '400px',
      data: { mode: 'add' }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.getItems();
      }
    });
  }

  handleItemAdded(): void {
    this.getItems();
  }
}

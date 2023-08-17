import { Component, OnInit } from '@angular/core';
import { PriceChangeService } from '../services/price-change.service';
import { ItemDTO } from '../Interfcae/ItemDTO';
import { ItemService } from '../services/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-price-change',
  templateUrl: './price-change.component.html',
  styleUrls: ['./price-change.component.scss']
})
export class PriceChangeComponent implements OnInit {
  items: ItemDTO[] = [];
  selectedItem!: number; // Change this to a single number
  changeType: string = 'increase';
  priceType: string = '$';
  changeOptions = { cost: true, price: true };

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private priceChangeService: PriceChangeService
  ) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  onSubmit(): void {
    const updateData = {
      itemCode: this.selectedItem,
      changeType: this.changeType,
      priceType: this.priceType,
      changeOptions: this.changeOptions
    };

    const itemCodeParam = this.route.snapshot.paramMap.get('itemCode');

    if (itemCodeParam !== null) {
      const itemCode = +itemCodeParam;
      this.priceChangeService.updateItems(itemCode, updateData).subscribe({
        next: () => {
          console.log('Item updated successfully');
        },
        error: (error) => {
          console.error('Error updating item:', error);
        }
      });
    } else {
      console.log("itemCode is null");
    }

  }
}

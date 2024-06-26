import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  template: `
    <p>
      details works! {{housingLocation?.id}}
      
    </p>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route:ActivatedRoute=inject(ActivatedRoute);
  housingService=inject(HousingService);
  housingLocation : HousingLocation|undefined
  constructor(){
    const housingLocationId=Number(this.route.snapshot.params['id']);
    this.housingLocation=this.housingService.getHousingLocation(housingLocationId);
  }
}

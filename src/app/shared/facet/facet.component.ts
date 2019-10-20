import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'facets',
  templateUrl: './facet.component.html',
  styleUrls: ['./facet.component.scss']
})
export class FacetComponent implements OnInit {
  
  @Input() facets:any;
  @Output() selectedFacets = new EventEmitter();
  filterName: String;
  constructor() { }

  ngOnInit() { }

  checkFacetObject(facet: any, value: string){
    if(facet == 'displayName')
      this.filterName = value;
  };

  checkForValues(values: any) {
    return (values == 'values')
  };

  typeCheck(data: any){
    return (typeof(data) == 'string');
  }

  onSelect(selectedOption: any){
    if(selectedOption.target.checked)
    this.selectedFacets.emit(selectedOption.target.value);
  }
}

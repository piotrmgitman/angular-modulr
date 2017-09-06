import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search/search.service';
import { OrderByPipe } from '../../pipes/orderby/orderby.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  public results: any;
  public searchphrase: string;
  public spinner: boolean = false;
  public isDisabled: boolean = true;
  public orderType: boolean = false;

  constructor(private searchService: SearchService) {
    this.spinner = true;
  }

  ngOnInit() { }

  search() {
    this.searchService.updateSearch(this.searchphrase);

    this.searchService.getByQuery().subscribe(results => {
      this.results = results.content;

    });
  }

  showAll() {
    const time = Math.floor(Math.random() * 5000);

    this.searchphrase = '';
    this.spinner = false;
    this.isDisabled = true;

    this.searchService.getEmpty().subscribe(results => {
      this.results = results.content;
    });

    setTimeout(() => {
      this.spinner = true;
      this.isDisabled = false;
      this.searchService.getAll().subscribe(results => {
        this.results = results.content;
      });
    }, time);
  }

}

import { Component, inject } from '@angular/core';
import { SearchService } from '../searches.service';
import { RandomBGColorDirectiveDirective } from '../random-bgcolor-directive.directive';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [RandomBGColorDirectiveDirective],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
	searchService = inject(SearchService);
}

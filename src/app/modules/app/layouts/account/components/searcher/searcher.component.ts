import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  @Input() placeholderValue: string = '';
  @Input() isMinified: boolean = false;

  searcherForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.searcherForm = this.fb.group({
      searcher: ['']
    });

    this.onValueChanges();
  }

  onValueChanges(): void {
    this.searcherForm.get('searcher').valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(val => {
        console.log(val);
      });
  }

  expandSearcher() {
    this.isMinified = false;
  }

}

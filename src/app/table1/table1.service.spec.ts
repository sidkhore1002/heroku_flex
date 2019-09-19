import { TestBed } from '@angular/core/testing';

import { Table1Service } from './table1.service';

describe('Table1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Table1Service = TestBed.get(Table1Service);
    expect(service).toBeTruthy();
  });
});

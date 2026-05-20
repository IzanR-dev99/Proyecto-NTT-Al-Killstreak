import { TestBed } from '@angular/core/testing';

import { TareaApi } from './tarea-api';

describe('TareaApi', () => {
  let service: TareaApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareaApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

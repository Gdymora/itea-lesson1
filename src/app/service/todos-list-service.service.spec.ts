import { TestBed } from '@angular/core/testing';

import { TodosListServiceService } from './todos-list-service.service';

describe('TodosListServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodosListServiceService = TestBed.get(TodosListServiceService);
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { AutenticacaoService } from './Autenticacao.service';

describe('AutenticacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticacaoService]
    });
  });

  it('should be created', inject([AutenticacaoService], (service: AutenticacaoService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ConfigurarAppsService } from './configurar-apps.service';

describe('ConfigurarAppsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigurarAppsService]
    });
  });

  it('should be created', inject([ConfigurarAppsService], (service: ConfigurarAppsService) => {
    expect(service).toBeTruthy();
  }));
});

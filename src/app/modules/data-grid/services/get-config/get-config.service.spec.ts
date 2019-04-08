import { inject, TestBed } from '@angular/core/testing';
import { GetConfigService } from './get-config.service';
import { AppModule } from 'src/app/app.module';


describe('GetConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });
  });

  it(
    'should be created',
    inject([GetConfigService], (service: GetConfigService) => {
      expect(service).toBeTruthy();
    })
  );

  describe('getColNumbConfig', () => {
    it(
      'should return a config with for a number column',
      inject([GetConfigService], (service: GetConfigService) => {
        const resExpct = {
          headerName: 'Le Test',
          field: 'fieldTest',
          sort: null,
          filter: 'agNumberColumnFilter'
        };
        const resCalc = service.getColNumbConfig('Le Test', 'fieldTest');
        expect(resCalc).toEqual(resExpct);
      })
    );

    it(
      'should return a config with for a asc sort number column',
      inject([GetConfigService], (service: GetConfigService) => {
        const resExpct = {
          headerName: 'Le Test',
          field: 'fieldTest',
          sort: 'asc',
          filter: 'agNumberColumnFilter'
        };
        const resCalc = service.getColNumbConfig('Le Test', 'fieldTest', true);
        expect(resCalc).toEqual(resExpct);
      })
    );
  });
});

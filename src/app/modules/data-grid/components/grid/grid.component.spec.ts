import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GridComponent } from '@rail/modules/rail-data-grid/components/grid/grid.component';
import { ApiService } from 'services/api/api.service';
import { ApiServiceStub } from 'stub/ApiServiceStub';

import { AppModule } from '../../../../../app.module';
import { RailModule } from '../../../../rail.module';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RailModule],
      providers: [{ provide: ApiService, useClass: ApiServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

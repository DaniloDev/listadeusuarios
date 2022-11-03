import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';

fdescribe('ApiService', () => {
  let service: ApiService;
  let http: HttpClient
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ApiService);
    http = TestBed.inject(HttpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it must call a GET', () => {
    const spy = spyOn(http, 'get').and.callThrough()
    service.getUsers(0)
    expect(spy).toThrow()
  });

  it('it must call a GET with correct endpoint', () => {
    const spy = spyOn(http, 'get').and.callThrough()
    service.getUsers(0)
    let url = `https://randomuser.me/api/?results=20&format=json&inc=gender,name,email,picture&nat=br&page=0`
    expect(spy).toHaveBeenCalledWith(url)
  });

});

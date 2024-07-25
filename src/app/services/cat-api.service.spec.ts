import { TestBed } from '@angular/core/testing';

import { CatApiService } from './cat-api.service';

import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { CatsData } from '../interfaces/cat.interface';
import { environment } from '../../environments/environment';

fdescribe('CatApiService', () => {
  let service: CatApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(CatApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch cat images with breed data', () => {
    const mockResponse: CatsData[] = [
      {
        breeds: [
          {
            id: 'ycho',
            name: 'York Chocolate',
            weight: {
              imperial: '12 - 18',
              metric: '5 - 8',
            },
            temperament: 'Playful, Social, Intelligent, Curious, Friendly',
            origin: 'United States',
            country_codes: 'US',
            country_code: 'US',
            description:
              'York Chocolate cats are known to be true lap cats with a sweet temperament.',
            life_span: '13 - 15',
            indoor: 0,
            lap: 1,
            alt_names: 'York',
            adaptability: 5,
            affection_level: 5,
            child_friendly: 4,
            dog_friendly: 5,
            energy_level: 5,
            grooming: 3,
            health_issues: 1,
            intelligence: 5,
            shedding_level: 3,
            social_needs: 4,
            stranger_friendly: 4,
            vocalisation: 5,
            experimental: 0,
            hairless: 0,
            natural: 0,
            rare: 0,
            rex: 0,
            suppressed_tail: 0,
            short_legs: 0,
            wikipedia_url: 'https://en.wikipedia.org/wiki/York_Chocolate',
            hypoallergenic: 0,
            reference_image_id: '0SxW2SQ_S',
          },
        ],
        id: 'sNSYauLG8',
        url: 'https://cdn2.thecatapi.com/images/sNSYauLG8.jpg',
        width: 1080,
        height: 1350,
      },
    ];

    service.getCatImagesWithBreedData().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const mockedApiRequest = httpMock.expectOne(
      `${environment.apiUrl}?limit=10&has_breeds=1`
    );
    expect(mockedApiRequest.request.method).toBe('GET');
    mockedApiRequest.flush(mockResponse);
  });

  it('should handle errors', () => {
    service.getCatImagesWithBreedData().subscribe(
      () => fail('should have failed with the network error'),
      (error) => {
        expect(error.status).toBe(500);
        expect(error.statusText).toBe('Internal Server Error');
      }
    );

    const mockedApiRequest = httpMock.expectOne(
      `${environment.apiUrl}?limit=10&has_breeds=1`
    );

    mockedApiRequest.flush('Failed to load cat images', {
      status: 500,
      statusText: 'Internal Server Error',
    });
  });
});

import {HttpClient} from '@core/httpClient';
import {HomeRepositoryImpl} from '@home/infrastructure/repositories';
import {HomeUseCasesImpl} from '@home/application';

const httpClientInstance = new HttpClient();
const homeRepositoryInstance = new HomeRepositoryImpl(httpClientInstance);
const homeUseCasesInstance = new HomeUseCasesImpl(homeRepositoryInstance);

export default {
  homeUseCases: homeUseCasesInstance,
};

// repository for https://react-frontend.pages.dev
// Class to interact with the API

import axios, { AxiosInstance } from "axios";
import { ISlide } from "types/slides.interface";

export class ReactFrontedPagesRepository {
  private static readonly BASE_URL = "https://react-frontend.pages.dev";

  private readonly api: AxiosInstance = axios.create({
    baseURL: ReactFrontedPagesRepository.BASE_URL,
    timeout: 1000,
  });

  public async getSlides(): Promise<ISlide[]> {
    const response = await this.api.get<ISlide[]>("/slides.json");

    return response.data;
  }
}

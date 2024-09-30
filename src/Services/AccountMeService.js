"use client";
import { BaseService } from "./Base/BaseService";

export class AccountMeService extends BaseService {
  constructor() {
    super("/accounts/me");
  }

  async getMe() {
    return this.axiosInstance.get(`${this.url}`).then((res) => res.data);
  }
}

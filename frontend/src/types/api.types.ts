export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export interface DeleteResponse {
  success: boolean;
  message: string;
}
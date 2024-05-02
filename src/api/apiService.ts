import axios from 'axios';
import { JobListing } from '../types/types';

interface ApiResponse {
  jdList: JobListing[];
  totalCount: number;
}

export const fetchJobListings = async (limit: number, offset: number): Promise<ApiResponse> => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const raw = JSON.stringify({ limit, offset });
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  try {
    const response = await axios.post<ApiResponse>(
      'https://api.weekday.technology/adhoc/getSampleJdJSON',
      requestOptions
    );
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching job listings:', error);
    throw error;
  }
};

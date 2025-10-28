export type DestinationItem = {
  id: string;
  name: string; 
  country: string;
  image: string; 
  rating: string;
  price?: string;
};

const API_URL = 'https://6901223aff8d792314bca44f.mockapi.io/destinatios';

export const fetchDestinations = async (): Promise<DestinationItem[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Gagal mengambil data dari server');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching destinations:', error);
    throw error;
  }
};


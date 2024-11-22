import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmY5MWNiMzFmNGM1ZWZlZDA4OGY4NjBlMjI0NWVmMCIsIm5iZiI6MTczMjI5Njc0OS43NTcwNzIsInN1YiI6IjY3MzI1ZWI5YTdmZGM4NjA4Nzg4YmM2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YAeLBke8K_iFLWwpAr1Dwja5icg1slaI_kKrsyh1Oic`,
  },
});

export default api;
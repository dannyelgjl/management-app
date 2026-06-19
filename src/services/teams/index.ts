import { api } from '../api';
import { ApiEnvelope, Team } from '../types';

export async function listTeams(search?: string) {
  const response = await api.get<ApiEnvelope<Team[]>>('/teams', {
    params: {
      limit: 50,
      offset: 0,
      search: search || undefined,
    },
  });

  return response.data;
}

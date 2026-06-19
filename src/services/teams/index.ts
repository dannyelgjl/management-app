import { api } from '../api';
import { ApiEnvelope, Team, TeamPayload } from '../types';

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

export async function createTeam(payload: TeamPayload) {
  const response = await api.post<ApiEnvelope<Team>>('/teams', payload);

  return response.data.data;
}

export async function getTeam(teamId: string) {
  const response = await api.get<ApiEnvelope<Team>>(`/teams/${teamId}`);

  return response.data.data;
}

export async function updateTeam(teamId: string, payload: TeamPayload) {
  const response = await api.put<ApiEnvelope<Team>>(`/teams/${teamId}`, payload);

  return response.data.data;
}

export async function deleteTeam(teamId: string) {
  const response = await api.delete<ApiEnvelope<Team>>(`/teams/${teamId}`);

  return response.data.data;
}

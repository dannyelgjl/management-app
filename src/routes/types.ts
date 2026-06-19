export type RootStackParamList = {
  Home: undefined;
  TaskDetails: { taskId: string };
  TaskForm: { taskId?: string } | undefined;
  TeamForm: { teamId?: string } | undefined;
  Teams: undefined;
};

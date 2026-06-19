export type RootStackParamList = {
  Home: undefined;
  TaskDetails: { taskId: string };
  TaskForm: { taskId?: string } | undefined;
};

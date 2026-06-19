import { Task } from '../../services/types';

export interface TaskCardProps {
  task: Task;
  onPress: () => void;
}

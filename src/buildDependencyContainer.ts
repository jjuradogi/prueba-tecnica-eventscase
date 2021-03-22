import { toDoServiceModule } from '@/services';

export default function buildDependencyContainer(): void {
  toDoServiceModule.build();
}

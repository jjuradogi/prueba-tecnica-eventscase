import { shallowMount } from '@vue/test-utils';
import AddToDo from '@/components/ToDo/AddToDo/AddToDo.component.vue';

describe('AddToDo.component Tests', () => {
  it('changes v-model and data', async () => {
    const wrapper = shallowMount(AddToDo);

    const textInput = wrapper.find('input[type="text"]');

    await textInput.setValue('Testing VModel!');

    expect((textInput.element as HTMLInputElement).value).toBe('Testing VModel!');
    expect(wrapper.vm.$data.toDoDescription).toBe('Testing VModel!');
  });
});

import {Reactfun} from '../Reaction';

export default {
title: 'Reactfun - A Customizable React Table Component',
component: Reactfun,
argTypes:{
    rows: {control: ''},
    headers:{ control: ''}
    }
};

const Template = args => <Reactfun {...args} />;

export const Default = Template.bind({});
Default.args = {
    rows: [
      ['This', 'is', 'just', 'a', 'test'],
      ['This', 'is', 'also', 'a', 'test'],
      ['Just', 'a', 'little', 'more', 'data'],
      ['Row', 'number', 'four', 'right', 'here'],
    ],
    headers: ['Col 1', 'Col 2', 'Col 3', 'Col 4', 'Col 5'],
  };
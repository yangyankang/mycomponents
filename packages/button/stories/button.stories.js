import Button from '../index'

export default { 
  component: Button,
  title: 'Components/Button'
};

//👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button :background="background" :label="label" />',
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { background: '#ff0', label: 'Button' };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: '😄👍😍💯' };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: '📚📕📈🤓' };
import { object } from '@storybook/addon-knobs';
import { UserDetailsComponent } from './user-details.component';

export default {
  title: 'UserDetailsComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: UserDetailsComponent,
  props: {
    user: object('user', { displayName: 'Imran Ahmed' }),
  },
});

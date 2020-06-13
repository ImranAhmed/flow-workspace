import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '@flow-workspace/utilities';

@Component({
  selector: 'ui-kit-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent {
  @Input() user: User;
}

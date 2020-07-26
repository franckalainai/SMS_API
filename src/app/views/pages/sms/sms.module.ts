import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NouveauComponent } from './filiales/nouveau/nouveau.component';
import { SmsComponent } from './sms.component';


const routes: Routes = [
	{
		path: '',
		component: SmsComponent,
		children: [
			{
				path: 'filiales/nouveau',
				component: NouveauComponent
      }
		]
	}
];


@NgModule({
  declarations: [NouveauComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SmsModule { }

import { TestComponent } from './test.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LienComponent } from './lien/lien.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: TestComponent,
		children: [
			{
				path: 'lien',
				component: LienComponent
      },
    ]
  }
];

@NgModule({
  declarations: [LienComponent],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes)
  ]
})
export class TestModule { }

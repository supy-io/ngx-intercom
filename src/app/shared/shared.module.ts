import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Material
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatListModule } from '@angular/material/list'

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule
  ],
  exports: [
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule
  ],
  declarations: []
})
export class SharedModule { }

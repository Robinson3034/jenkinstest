import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { FieldsetModule } from 'primeng/fieldset';

import { MatFormFieldModule, MatToolbarModule, MatInputModule, MatSelectModule, MatOptionModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    MenubarModule,
    ToolbarModule,
    TableModule,
    MessagesModule,
    MessageModule,
    DialogModule,
    SplitButtonModule,
    MultiSelectModule,
    SidebarModule,
    AccordionModule,
    PanelModule,
    InputTextModule,
    TabMenuModule,
    TabViewModule,
    ToastModule,
    FieldsetModule,
    // Material module
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,

    // Form
    ReactiveFormsModule
  ],

  exports: [
    FormsModule,
    ButtonModule,
    DropdownModule,
    MenubarModule,
    ToolbarModule,
    SidebarModule,
    TableModule,
    SplitButtonModule,
    MultiSelectModule,
    MessagesModule,
    MessageModule,
    DialogModule,
    AccordionModule,
    PanelModule,
    InputTextModule,
    TabMenuModule,
    TabViewModule,
    ToastModule,
    FieldsetModule,
    // Material module
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,

    ReactiveFormsModule
  ]
})
export class FedexsharedModule { }

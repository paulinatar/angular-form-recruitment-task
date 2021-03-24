import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <div class = "app">
  <h2>Formularz</h2>
  <dynamic-form [config] = "config"
  (submitted)= "formSubmitted($event)"
  ></dynamic-form>
  </div>
  `
  
})
export class AppComponent {
  title = 'Formularz';
  config = [
    {
      type: 'input',
      label: 'Imię',
      name: 'name',
      placeholder: 'Wpisz imię',
    },
    {
      type: 'input',
      label: 'Nazwisko',
      name: 'surname',
      placeholder: 'Wpisz nazwisko',
      required: true,
    },
    {
      type: 'select',
      label: 'Ulubione jedzenie',
      name: 'food',
      options: [{label: 'Pizza', value:'Pizza'}, {label:'Hot Dogs', value: 'HotDogs'} ],
      placeholder: 'Wybierz',
    },{
      type: 'radio',
      label: 'Ulubione jedzenie',
      name: 'foodBest',
      options: [{label: 'Pizza', value:'pizza'}, {label:'Hot Dogs', value: 'hotdog'} ],
      placeholder: 'Wybierz',
    },
    {
      type: 'checkbox',
      label: 'Zwierzeta',
      name: 'animals',
      options: [{label: 'Kot', value:'cat'}, {label:'Pies', value: 'dog'} ],
      placeholder: 'Wybierz',
    },
    {
      label: 'Wyślij',
      name: 'submit',
      type: 'button',
    },
  ];
  formSubmitted(value: any){
    console.log(value)
    

  }
  
}

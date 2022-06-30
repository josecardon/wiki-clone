import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SpeechRecognitionModule } from '@kamiazya/ngx-speech-recognition';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    SpeechRecognitionModule.withConfig({
      lang: 'es-ES',
      interimResults: true,
      maxAlternatives: 10,

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

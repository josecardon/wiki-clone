import { Component, OnInit } from '@angular/core';
import { SpeechRecognitionService } from '@kamiazya/ngx-speech-recognition';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.less'],
  providers: [SpeechRecognitionService]
})
export class BuscadorComponent implements OnInit {
  private synth = window.speechSynthesis;
  public message: string = "";
  private voices!: any;
  public listen!: string;
  public selectedVoice: SpeechSynthesisVoice | string;
  constructor(public speechSynthesisService: SpeechRecognitionService) { }

  ngOnInit( ): void {

  }

  commandVoice() {
    if(this.synth !== null) {
      this.voices = this.synth.getVoices();
      const uttherThis = new SpeechSynthesisUtterance("Que deseas buscar");
      uttherThis.lang = 'es-ES';
      this.synth.speak(uttherThis);
      const speaking = this.synth.speaking;
      this.listen = 'warn';
      setTimeout(() => {
        this.speechSynthesisService.start();
      }, 2000);
      this.speechSynthesisService.onresult = ({results}) => {
        this.message = results.item(0).item(0).transcript;
        this.selectedVoice = this.message;

      };
      this.speechSynthesisService.onend = () => {
        this.listen = '';
      }


      console.log( 'Voz',this.selectedVoice);
    }
  }



}

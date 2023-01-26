import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  ngOnInit(): void {
    let slideAtual = 1
    let listaSlides = ["url(../../../../assets/img/valorantBanner.png)", "url(../../../../assets/img/csBanner.png)", "url(../../../../assets/img/sonaBanner.png)"]
    if (document.getElementById("bannerImg") as HTMLDivElement| null) {
      const bannerImg = document.getElementById("bannerImg");
      const radio0 = (document.getElementById("radioBanner0") as HTMLInputElement | null);
      const radio1 = (document.getElementById("radioBanner1") as HTMLInputElement | null);
      const radio2 = (document.getElementById("radioBanner2") as HTMLInputElement | null);

      setInterval(mudarSlideDireita, 5000)
      /*//TODO: resetar timer se botão clicado*/
      function mudarSlideEsquerda() {

        if (slideAtual == 2) {
          if (bannerImg)
          bannerImg.style.backgroundImage = listaSlides[1];
          //TODO: AHAHAHAHAHAHAHAHA NAO É NULL CARA ACABEI DE TESTAR ENCIMA AHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAH
          slideAtual = 1;
          if (radio0)
          radio0.checked=false;
          if (radio1)
          radio1.checked=true;
          if (radio2)
          radio2.checked=false;

        } else if (slideAtual == 1) {
          if (bannerImg)
          bannerImg.style.backgroundImage = listaSlides[0];

          slideAtual = 0;

          if (radio0)
          radio0.checked=true;
          if (radio1)
          radio1.checked=false;
          if (radio2)
          radio2.checked=false;

        } else {
          if (bannerImg)
          bannerImg.style.backgroundImage = listaSlides[2];
          slideAtual = 2;

          if (radio0)
          radio0.checked=false;
          if (radio1)
          radio1.checked=false;
          if (radio2)
          radio2.checked=true;

        }

      }

      function mudarSlideDireita() {

        if (slideAtual == 2) {
          if (bannerImg)
          bannerImg.style.backgroundImage = listaSlides[0];
          slideAtual = 0;
          if (radio0)
          radio0.checked=true;
          if (radio1)
          radio1.checked=false;
          if (radio2)
          radio2.checked=false;

        } else if (slideAtual == 1) {
          if (bannerImg)
          bannerImg.style.backgroundImage = listaSlides[2];

          slideAtual = 2;

          if (radio0)
          radio0.checked=false;
          if (radio1)
          radio1.checked=false;
          if (radio2)
          radio2.checked=true;

        } else {
          if (bannerImg)
          bannerImg.style.backgroundImage = listaSlides[1];
          slideAtual = 1;

          if (radio0)
          radio0.checked=false;
          if (radio1)
          radio1.checked=true;
          if (radio2)
          radio2.checked=false;

        }

      }
      console.log("ㅤ██ㅤ  ██\n ██████████ㅤㅤㅤㅤㅤㅤㅤㅤpanㅤㅤ:)\n██ㅤ▌██ㅤ▌██\n██ㅤ ██ㅤ ██\nㅤ████████");
    }
  }
}





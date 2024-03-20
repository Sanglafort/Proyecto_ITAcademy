import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  standalone: true,
  imports: [],
  templateUrl: './dice.component.html',
  styleUrl: './dice.component.css'
})

export class DiceComponent {

  rollDice(): void {

    const dice = document.querySelector('.dice') as HTMLDivElement
    const time = 2

    dice.style.transition = ''
    dice.style.transform = `translateY(400px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`

    setTimeout(() => {
      dice.style.transition = `transform ${time}s`
      const randomValue: number = Math.floor((Math.random() * 6) + 1)
    console.log(`Ha salido el: ${randomValue}`)

    switch(randomValue) {
      case 1:
        dice.style.transform = `translateY(400px) rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;
        break;
      case 6:
        dice.style.transform = `translateY(400px) rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`;
        break;
      case 3:
        dice.style.transform = `translateY(400px) rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`;
        break;
      case 4:
        dice.style.transform = `translateY(400px) rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`;
        break;
      case 5:
        dice.style.transform = `translateY(400px) rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`;
        break;
      case 2:
        dice.style.transform = `translateY(400px) rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`;
        break;
    }

    })

      }

}





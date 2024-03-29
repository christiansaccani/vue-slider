const { createApp } = Vue

createApp({
    data() {
        return {

            slides: [
            {
                image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morales',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],

            // mi salvo una variabile dove memorizzo quale sia la slide attiva
            activeSlideIndex: 0,
            timer: 0,

        }
    },

    methods: {
        nextSlide() {
            this.activeSlideIndex++;

            if (this.activeSlideIndex >= this.slides.length) {
                this.activeSlideIndex = 0
            }
        },
        prevSlide() {
            this.activeSlideIndex--;

            if (this.activeSlideIndex < 0) {
                this.activeSlideIndex = this.slides.length
            }
        },
        selectedSlide(index) {
            this.activeSlideIndex = index;
        },
        pauseTimer() {
            // Congela il timer quando passi il mouse sull'elemento
            clearInterval(this.timer);
        },
        startTimer() {
            this.timer = setInterval(this.nextSlide, 3000);
          },
    },

    mounted() {  //le funzioni scritte all'interno di mounted vengono eseguite una volta costruito il DOM
        // Imposta un intervallo per chiamare il metodo ogni tre secondi
        this.startTimer()
    },

}).mount('#app');



const { createApp } = Vue

createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './assets/img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '03/04/2023 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '03/04/2023 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '03/04/2023 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './assets/img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './assets/img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './assets/img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './assets/img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './assets/img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './assets/img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './assets/img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        },
                    ],
                },
            ],
            currentIndex: 0,
            dateToday: "",
            timeToday: "",
            msg: "",
            messageArchive: [
            ],
            searchInput : "",
            arraySearchConatcts : []
        }
    },
    methods: {
        createDateToday() {
            const today = new Date();
            const day = today.getDate().toString().padStart(2, '0')
            const month = (today.getMonth() + 1).toString().padStart(2, '0')
            const year = today.getFullYear().toString()
            this.dateToday = `${day}/${month}/${year}`

            console.log(this.dateToday);
        },
        createCurrentTime() {
            const today = new Date()
            const hours = today.getHours().toString().padStart(2, '0')
            const minutes = today.getMinutes().toString().padStart(2, '0')
            this.timeToday = hours + ":" + minutes
        },

        extractLastDate(index) {
            const [date, time] = this.contacts[index].messages[this.contacts[index].messages.length - 1].date.split(" ")
            return date

        },
        extractLastTime(index) {
            const [date, time] = this.contacts[index].messages[this.contacts[index].messages.length - 1].date.split(" ")
            if (time.length > 5) {
                return (time.slice(0, -3))
            } else {
                return time

            }

        },
        extract_time(index) {
            const [date, time] = this.contacts[this.currentIndex].messages[index].date.split(" ")
            if (time.length > 5) {
                return (time.slice(0, -3))
            } else {
                return time

            }
        },
        changeCurrentIndex(index) {
            this.toSaveMsg()
            this.msg = ""
            this.currentIndex = index;
            this.checkArchiveMessage()
        },
        toSaveMsg() {
            const savedInputText = this.msg
            const messageIndex = this.currentIndex
            this.messageArchive.push({ message: savedInputText, index: messageIndex });
            console.log(this.messageArchive);
        },
        checkArchiveMessage() {
            const currentMessage = this.messageArchive.find((obj) => obj.index === this.currentIndex);
            // const currentMessage = this.messageArchive.filter((object) => object.index == this.currentIndex);  perchè il filter non gli piace?
            if (currentMessage) {
                this.msg = currentMessage.message;
            }
            this.messageArchive = this.messageArchive.filter((object) => object.index !== this.currentIndex)
        },
        createNewMessage(index) {
            this.contacts[index].messages.push({
                date: this.dateToday + " " + this.timeToday,
                message: this.msg,
                status: 'sent'
            });
            this.msg = '';
            this.automaticAnswer(index)
        },
        automaticAnswer(index) {
            setTimeout(() => {
                this.contacts[index].messages.push({
                    date: this.dateToday + " " + this.timeToday,
                    message: "ok",
                    status: 'received'
                });
            }, 1000)
        },
        functionSearch(){
            const newFilterArray = this.contacts.filter((object) => object.name.toLowerCase().includes(this.searchInput))
            console.log(this.searchInput);
            this.arraySearchConatcts = newFilterArray
            console.log(newFilterArray);
            
        }
    },
    created() {
        this.createDateToday()
        this.createCurrentTime()
    },

}).mount('#app')











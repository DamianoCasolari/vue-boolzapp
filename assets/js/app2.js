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
            dateToday: "",
            timeToday: "",
            msg: "",
            searchInput: "",
            arrayContactsArchive: [],
            currentIndex: -1,
            currentIndexMessage: 0,
            messageArchive: [],
            light: true,
            randomAnswers: [
                "Certo!", "Mi dispiace non riesco", "Ci penso dai", "Per sta volta va bene ma sei in debito..", "Ti richiamo dopo ora sto facendo coding", "Non sono convinto", "Venerdì ti porto tutto", "Vedila così, sei in ritardo solo se rimandi a domani"
            ],
            NewNameContact: "",
            NewAvatarLink: "",
            isWritingString: false,
            isOnline: false,
            selectChat: false,
            splashPage: true,
            increaseFontSize : false,
        }
    },
    methods: {
        saveContacts() {
            let savedFirstContacts = this.contacts
            savedFirstContacts.forEach((object) => this.arrayContactsArchive.push(object))
        },
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
        extractTime(index) {
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
            if (this.msg.trim().length > 0) {
                this.contacts[index].messages.push({
                    date: this.dateToday + " " + this.timeToday,
                    message: this.msg,
                    status: 'sent'
                });
                this.msg = '';
                this.isWritingString = true
                this.automaticAnswer(index)
            }

        },
        automaticAnswer(index) {
            setTimeout(() => {
                this.contacts[index].messages.push({
                    date: this.dateToday + " " + this.timeToday,
                    message: this.randomAnswers[Math.floor(Math.random() * 8)],
                    status: 'received'
                });
                this.isWritingString = false
                this.isOnline = true
                this.automaticScrolla()
            }, 1000)
        },
        automaticScrolla() {
            this.$nextTick(() => {
                const chatTextArea = document.querySelector(".chat_text")
                chatTextArea.scrollTo(0, chatTextArea.scrollHeight);
                setTimeout(() => {
                    this.isOnline = false
                }, 3000)
            })
        },
        lastDateTime() {
            if (!this.isWritingString && !this.isOnline) {
                return 'Ultimo accesso ' +
                    this.extractLastDate(this.currentIndex) + ' alle ' +
                    this.extractLastTime(this.currentIndex)
            } else if (this.isWritingString && !this.isOnline) {
                return "Sta scrivendo.."
            } else {
                return "Online"
            }
        },
        functionSearch() {
            const newFilterArray = this.arrayContactsArchive.filter((object) => object.name.toLowerCase().includes(this.searchInput))
            this.contacts = newFilterArray
            console.log(newFilterArray);

        },
        deleteMessage(index) {
            if (this.contacts[this.currentIndex].messages[index]) {
                this.contacts[this.currentIndex].messages.splice(index, 1)
            }
        },
        changeLayout() {
            this.light = !this.light;
        },
        deleteAllMessages() {
            this.contacts[this.currentIndex].messages = [];
        },
        deleteChat(index) {
            this.contacts.splice(index, 1)
            this.arrayContactsArchive.splice(index, 1)
        },
        addContact() {
            let newContact = {
                name: this.NewNameContact,
                avatar: this.NewAvatarLink.trim(),
                visible: true,
                messages: [
                ]
            }
            if (newContact.name.length > 0) {
                if (newContact.avatar.trim() == "") {
                    newContact.avatar = "../assets/img/foto-profilo-vuota2.jpg"
                }

                this.contacts.unshift(newContact)
                this.NewNameContact = ""
                this.NewAvatarLink = ""
                const btnClose = document.querySelector(".btn-close")
                btnClose.click()
            }
        },
        selectMobileChat() {
            this.selectChat = !this.selectChat
        },
        changeSize() {
            this.increaseFontSize = !this.increaseFontSize
        },
        splashPageFunction() {
            setTimeout(() => {
                this.splashPage = !this.splashPage
            },1000)
        }
    },
    created() {
        this.createDateToday()
        this.createCurrentTime()
        this.saveContacts()
        this.splashPageFunction()
    },

}).mount('#app')










const app = new Vue({
    el: '#app',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        display: false
                    },
                    {
                        date: '10/01/2020 15:50',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        display: false
                    },
                    {
                        date: '10/01/2020 16:15',
                        message: 'Tutto fatto!',
                        status: 'received',
                        display: false
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        display: false
                    },
                    {
                        date: '20/03/2020 16:30',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        display: false
                    },
                    {
                        date: '20/03/2020 16:35',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        display: false
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        display: false
                    },
                    {
                        date: '28/03/2020 16:15',
                        message: 'Ah scusa!',
                        status: 'received',
                        display: false
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        display: false
                    },
                    {
                        date: '10/01/2020 15:50',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        display: false
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        display: false
                    },
                    {
                        date: '10/01/2020 15:50',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        display: false
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30',
                        message: 'Ciao Claudia, hai novit???',
                        status: 'sent',
                        display: false
                    },
                    {
                        date: '10/01/2020 15:50',
                        message: 'Non ancora',
                        status: 'received',
                        display: false
                    },
                    {
                        date: '10/01/2020 15:51',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        display: false
                        
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30',
                        message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                        status: 'sent',
                        display: false
                    },
                    {
                        date: '10/01/2020 15:50',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        display: false
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        display: false
                    },
                    {
                        date: '10/01/2020 15:50',
                        message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        display: false
                    },
                    {
                        date: '10/01/2020 15:51',
                        message: 'OK!!',
                        status: 'received',
                        display: false
                    }
                ],
            }
        ],
        activeContactIndex: 0,
        searchText: '',
        message: '',
        showChat: false
        
    },
    methods: {
        activeChat(i){
            this.activeContactIndex = i
        },
        sendMessage(){
            const newMessage = {
                date: dayjs().format('DD/MM/YYYY HH:mm'),
                message: this.message,
                status: 'sent',
                display: false
            }
            const responseMessage = {
                date: dayjs().format('DD/MM/YYYY HH:mm'),
                message: 'Ok',
                status: 'received',
                display: false
            }
            if (this.message === '') {
                return
            } else {
                this.contacts[this.activeContactIndex].messages.push(newMessage)
                this.message = ''
                setTimeout(()=>{
                    this.contacts[this.activeContactIndex].messages.push(responseMessage)
                },3000)
            }
        },
        filterContact(){
            this.contacts.forEach((contact)=>{
                if(contact.name.toLowerCase().includes(this.searchText.toLowerCase())){
                    contact.visible = true
                } else {
                    contact.visible = false
                }
            })
        },
        lastMessage(index){
            if (index > -1) {
                let last = ''
                if(this.contacts[index].messages.length > 0) {
                    last = this.contacts[index].messages.at(-1).message
                } else {
                    last = ''
                }
                return last
            }
        },
        showMenu: function(activeContactIndex, i){
            if (this.contacts[activeContactIndex].messages[i].display === false) {
                this.contacts[activeContactIndex].messages.forEach((messaggio)=>{
                    messaggio.display = false
                })
            } 
            this.contacts[activeContactIndex].messages[i].display = !this.contacts[activeContactIndex].messages[i].display
        },
        erase(index) {
            this.contacts[this.activeContactIndex].messages.splice(index, 1)
        },
        eraseAllMessage(){
            const length = this.contacts[this.activeContactIndex].messages.length
            this.contacts[this.activeContactIndex].messages.splice(0, length)
        },
        eraseChat(){
            this.contacts.splice(this.activeContactIndex, 1)
        },
        lastAccess(index){
            if (index > -1) {
                //console.log(`Contatto attuale ${index} ${this.contacts[index].name}`);
                let last = ''
                if(this.contacts[index].messages.length > 0) {
                    last = this.contacts[index].messages.at(-1).date
                } else {
                    last = ''
                }
                return last
            }
        }
    }
})
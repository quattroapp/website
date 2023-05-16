---
description: La funzionalità dei resi permette di collegare i movimenti di magazzino di un reso con le relative spedizioni, tenendo aggiornate le quantità consegnate e le previsioni in tutta la piattaforma.
---

# Crea un nuovo reso

## Informazioni generali

### Introduzione

In questa guida troverai tutti i passi per inserire un nuovo reso nel sistema.
La funzionalità di creazione resi è stata pensata per permettere di tenere traccia dei movimenti a magazzino in entrata
causati da un reso a seguito di una spedizione.

:::info
**Non è possibile collegare direttamente l'ordine senza passare per la spedizione** in quanto la funzionalità è stata
pensata per generare i movimenti di magazzino, cosa che non è possibile da un ordine.
:::

:::danger
Creare un reso comporta **l'aggiornamento immediato delle quantità consegnate dell'ordine e delle previsioni di riordino**.
Tuttavia i movimenti di magazzino vengono generati esclusivamente attraverso l'apposita procedura con relativa conferma.
:::

### Permessi necessari

Per utilizzare questa funzionalità è necessario essere in possesso del relativo permesso, nella versione attuale
della piattaforma questo è assegnato agli utenti con ruolo `Amministratore` o `Collaboratore`.

:::info
Al momento non è possibile utilizzare questa funzione come `operatore di magazzino` o come `agente`
:::

## Creazione di un reso

### Passo 1: Iniziare procedura di creazione del reso

Attraverso il menu laterale, raggiungi la sezione `Trasporti` > `Resi`
e clicca sul pulsante <img
style={{display:"inline-flex", margin: 0}}
height="20px" width="200px" src={require("./assets/new-return-button.png").default}/>
in alto a sinistra.

<img style={{width: "60%", margin: "0 auto"}} src={require("./assets/return-menu-item.png").default}/>

### Passo 2: Inserire i dati del reso

Inserisci tutti i dati necessari per tracciare il reso, data ordine, cliente e magazzino di destinazione della merce.
Non ci sono limitazioni per quanto riguarda la data, può essere inserita una data passata o futura, ma attenzione: **la
data scelta non verrà usata per i movimenti di magazzino.**

<img style={{width: "60%", margin: "0 auto"}} src={require("./assets/return-order-details.png").default}/>

:::info
Il magazzino di destinazione è il magazzino dove verranno salvate le quantità del reso.
:::
:::danger
I movimenti di magazzino verranno salvati con la **data dell'operazione di carico**, non con quella dell'ordine.
:::

### Passo 3: Inserisci i prodotti del reso

Ricordati che prima di poter inserire i prodotti è necessario aver selezionato il cliente che sta effettuando il reso,
questo perchè nella tabella di selezione verranno mostrati solo i prodotti che hai consegnato a quel cliente.

Per procedere con l'inserimento dei prodotti clicca sul pulsante <img
style={{display:"inline-flex", margin: 0}}
height="20px" width="200px" src={require("./assets/add-product-button.png").default}/>
subito sopra la tabella dei prodotti. Si aprirà una finestra modale dove potrai visualizzare i prodotti spediti al
cliente selezionato.

<img style={{width: "60%", margin: "0 auto"}} src={require("./assets/add-product-modal.png").default}/>

Seleziona i prodotti che vuoi inserire nel reso semplicemente cliccando sulla riga corrispondente, il prodotto verrà
aggiunto alla tabella e il modale si chiuderà. Se vuoi puoi modificare la quantità direttamente dalla tabella.

### Passo 4: Salva il reso

Una volta inseriti tutti i prodotti, clicca sul pulsante `Salva` in alto a sinistra per salvare il reso.
Se tutto è andato a buon fine verrai reindirizzato alla pagina di dettaglio del reso.

### Passo 5: Carica i prodotti a magazzino

Con questo passo finale puoi generare i movimenti di magazzino per il reso appena creato e concludere la procedura di
reso.
Basta cliccare sul pulsante <img
style={{display:"inline-flex", margin: 0}}
height="20px" width="200px" src={require("./assets/load-to-warehouse.png").default}/>
in alto a destra, dentro al menu `Altro` e confermare l'operazione.

<img style={{width: "60%", margin: "0 auto"}} src={require("./assets/confirm-modal.png").default}/>


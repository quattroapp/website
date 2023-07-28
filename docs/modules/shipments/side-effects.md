# Side effects

La creazione, modifica e eliminazione delle spedizioni viene monitorata dal sistema che, a volte, attiva alcuni processi
secondari per aggiornare altri dati o attivare altre funzioni. Di seguito sono indicate le attività che inizializzano
questi nuovi processi e i loro effetti.

## Aggiornamento di una spedizione

### Spedizione in carico

Quando una spedizione viene segnata come `in carico` e questa è stata già assegnata ad un magazzino di partenza, il
sistema attiva un processo secondario per calcolare in maniera automatica il percorso più rapido e l'ordine di consegna
della merce.

### Chiusura della spedizione

Quando una spedizione viene chiusa (i.e. lo stato diventa `completata`), il sistema attiva un processo secondario che
aggiorna in maniera automatica lo stato degli ordini collegati.
In particolare se l'ordine è stato completamente spedito il suo nuovo stato sarà `evaso`, in alternativa
sarà `parzialmente evaso`.

:::info
L'aggiornamento degli ordini viene effettuato in un processo secondario. potrebbero volerci alcuni secondi per vedere i
nuovi dati aggiornati sul portale e sulle applicazioni esterne.
:::

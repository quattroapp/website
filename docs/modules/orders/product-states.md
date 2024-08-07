---
description: Lo stato del prodotto ordinato permette di identificare la posizione del prodotto nel flusso di vendita.
---

# Stato Prodotti

Lo stato del prodotto ordinato permette di identificare la posizione del prodotto nel flusso di vendita. Questi stati
non sono modificabili liberamente, ma vengono aggiornati dall'applicativo per ridurre il lavoro e minimizzare i
potenziali errori.

<div class="state-list">
    <span class="label label-new">Nuovo</span>
    →
    <div>
        <span class="label label-confirmed">Confermato</span>
        <span style={{marginTop:8}} class="label label-residual">Residuo</span>
    </div>
    →
    <span class="label label-assigned">In spedizione</span>
    →
    <span class="label label-delivered">Consegnato</span> 
</div>

## Gli Stati del Prodotto

Un prodotto ordinato può avere un solo stato alla volta, il quale determina le azioni che possono essere eseguite sul
prodotto stesso o sull'ordine che lo contiene. Di seguito è riportata la lista di tutti gli stati possibili e le
relative limitazioni.

### Nuovo

Questo stato viene automaticamente assegnato quando un ordine viene inserito da un agente.

### Confermato

Questo stato viene automaticamente assegnato quando un ordine viene inserito da un utente amministratore o
collaboratore. Può essere selezionato confermando i prodotti con stato "Nuovo" tramite il pulsante "Conferma Prodotti"
presente nella pagina dell'ordine.

### In Spedizione

Questo stato viene automaticamente assegnato quando un prodotto viene inserito in una spedizione. Lo stato viene rimosso
quando il prodotto è rimosso dalla spedizione.

### Consegnato

Questo stato viene automaticamente assegnato quando la spedizione che contiene il prodotto viene consegnata.

### Residuo

Questo stato viene assegnato ai residui generati automaticamente in seguito allo scarico da magazzino o all'aggiunta del
prodotto alla spedizione.

## Tabella Riassuntiva delle Azioni

| Stato                                                                                                                                                 | Modifica dettagli ordine | Modifica agente | Modifica destinazione | Elimina riga | Modifica quantità | Modifica prezzo |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|-----------------|-----------------------|--------------|-------------------|-----------------|
| <span class="label label-small label-new">Nuovo</span>                                                                                                | ✔️                       | ✔️              | ✔️                    | ✔️           | ✔️                | ✔️              |
| <span class="label label-small label-confirmed">Confermato</span><span style={{marginTop: 8}} class="label label-small label-residual">Residuo</span> | ✔️                       | ✔️              | ✔️                    | ✔️           | ✔️                | ✔️              |
| <span class="label label-small label-assigned">In spedizione</span>                                                                                   | ✔️                       | ✔️              | ❌                    | ❌           | ❌                | ✔️              |
| <span class="label label-small label-delivered">Consegnato</span>                                                                                     | ❌                       | ✔️              | ❌                    | ❌           | ❌                | ✔️             |

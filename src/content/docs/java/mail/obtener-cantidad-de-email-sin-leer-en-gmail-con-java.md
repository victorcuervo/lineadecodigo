---
title: "Obtener cantidad de email sin leer en GMail con Java"
description: "Como obtener la cantidad de email sin leer en GMail con Java."
date: 2013-02-02
updatedDate: 2026-01-09
tags: ["gmail","imap","java-mail","email","folder","session","mail"]
slug: java/mail/obtener-cantidad-de-email-sin-leer-en-gmail-con-java
author: Feffo
type: doc
topic: java
id: 2c8a9dfb-adca-8198-82c0-fc5a0ebde653
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/mail/GMail.java
---

Hoy les traigo una forma fácil de obtener la cantidad de mails sin leer en nuestra casilla de Gmail con [Java](https://www.manualweb.net/java/); en este caso, usaremos la librería JavaMail la cual es bastante conocida y se han hecho muchas publicaciones en [Linea de Código](http://lineadecodigo.com/tag/java-mail/) y también usaremos el [protocolo imaps](http://es.wikipedia.org/wiki/Internet_Message_Access_Protocol). Para empezar debemos establecer ciertos atributos que son necesarios para la conexión (**usuario**, **password**, **servidor**), los cuales los estableceremos mediante un constructor:


```java
public Gmail(String user, String pass) {
  this.user = user + "@gmail.com";
  this.pass = pass;
  this.host = "imap.gmail.com";
}
```


Una vez identificados y establecidos estos elementos podemos proceder con la conexión al buzón de correo. La conexión que realizamos es del tipo imaps. Es por ello que se asignamos dicho valor a la variable del protocolo:


```java
Properties props = System.getProperties();
props.setProperty("mail.store.protocol", "imaps");
```


Ahora creamos una sesión mediante la clase [Session](https://www.w3api.com/Java/DataHandler/) y realizamos la conexión:


```java
Session session = Session.getDefaultInstance(props, null);
Store store = session.getStore("imaps"); 
store.connect(host, user, pass);
```


Es importante indicar que la carpeta de la que queremos la información es el inbox. Es por ello que utilizamos el método .getFolder() para indicar dicha carpeta.


```java
inbox = store.getFolder("Inbox");
```


El código de conexión es el siguiente:


```java
public boolean connect() {
  try {
    Properties props = System.getProperties();
    props.setProperty("mail.store.protocol", "imaps"); 

    Session session = Session.getDefaultInstance(props, null); 
    Store store = session.getStore("imaps"); 
    store.connect(host, user, pass); 

    inbox = store.getFolder("Inbox"); 
    // Obtenemos la casilla de entrada como carpeta a analizar

    return true; 
  } catch (Exception e) {
    e.printStackTrace();
    return false; 
  }
}
```


Ya estamos conectados a GMail, ahora lo único que nos falta es obtener la cantidad de correos sin leer. Abrimos el INBOX mediante el método open. Lo abrimos de solo lectura Folder.READ_ONLY.


```java
inbox.open(Folder.READ_ONLY);
```


El método .getUnreadMessagesCount() nos dice el número de mensajes que tenemos sin leer.


```java
int count = inbox.getUnreadMessageCount(); 
```


Metemos toda la consulta de mensajes no leídos en un método para que quede más sencilla de leer:


```java
public int getUnreadMessageCount() {
  try {
    inbox.open(Folder.READ_ONLY); 
    int count = inbox.getUnreadMessageCount(); 
    inbox.close(false);
    return count;
  } catch (Exception e) {
    System.out.println(e);
    return -1;
    // En caso de una excepción retornamos -1
  }
}
```


Y para finalizar, les voy a mostrar cómo sería el flujo básico de ejecución de este programa para obtener cantidad de email sin leer en GMail con [Java](https://www.manualweb.net/java/):


```java
public static void main(String[] args) {
  Gmail gmail = new Gmail("USER", "PASS");
  gmail.connect();

  System.out.println("Unread: " + gmail.getUnreadMessageCount());
}
```


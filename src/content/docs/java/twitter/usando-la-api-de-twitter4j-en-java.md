---
title: "Usando la API de Twitter4j en java"
description: "Código fuente que nos explica cómo podemos utilizar el API de Twitter4j en Java."
date: 2010-04-27
updatedDate: 2026-01-08
tags: ["twitter","twitter4j","twitterexception","list"]
slug: java/twitter/usando-la-api-de-twitter4j-en-java
type: doc
topic: java
id: 2c8a9dfb-adca-8143-a9d2-c797a02acc14
author: Pablo Ruiz
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/twitter/TwitterJ.java
---

Hola nuevamente acá estoy posteando de nuevo cómo cambiar el estado de Twitter con java gracias a la [API Twitter4J](https://twitter4j.org/en/index.html). Primeramente tenemos que tener descargarnos la [API Twitter4J 2.1.2](https://twitter4j.org/archive/twitter4j-4.0.7.zip) del siguiente link…


[https://twitter4j.org/archive/twitter4j-4.0.7.zip](https://twitter4j.org/archive/twitter4j-4.0.7.ziphttps://twitter4j.org/archive/twitter4j-4.0.7.zip)


Ya descargada la añadimos a nuestro IDE en mi caso uso Netbeans: 1. Botón derecho sobre “libraries (Librerías)”
2. ADD jar/folder (Agregar)
3. Seleccionamos el archivo que descargamos anteriormente del link antes mencionado


Y listo ya tenemos acceso a la [API Twitter4J](https://twitter4j.org/en/index.html) de twitter… Comenzaremos creando nuestra clase base llamada TwitterJ.java y hacemos las importaciones correspondientes


```java
import java.util.List;    
import twitter4j.*;
```


Ahora creamos un atributo privado del tipo Twitter llamado mi_twitter


```java
private Twitter mi_twier;
```


Siguiendo creamos nuestro honorable constructor de la siguiente manera


```java
public TwitterJ(String userName, String password) {
  try {
    mi_twitter = new Twitter(userName, password);    
    mi_twitter.verifyCredentials(); 
  } catch (TwitterException ex) {             
    System.out.println("Error: "+ex.getMessage());   
  }     
}
```


Información Constructor: - Dos parámetros String que contendran usuario-password respectivamente

- Creación de objeto con los datos ingresados como parámetros (usuario,password)
- Verificación de credenciales (si los datos ingresados son correctos)

Ahora crearemos el método que nos dará un nuevo tweet ó cambiará el estado


```java
public void nuevoTweet(String tweet) {

  try {
    this.mi_twitter.update(tweet);    
  } catch (Exception ex) {
    System.out.println("Error: " + ex.getMessage());    
  }
}
```


Información método nuevoTweet(String tweet): - String tweet será el nuevo estado que enviaremos

- llamamos al método update de la clase Twitter y le damos de parámetro lo ingresado en el argumento de método creado

Ahora crearemos el método que nos devolverá nuestro actual estado


```java
public String getEstado(){
  String estadoActual = "";
 
  try {
    List<Status> statusList = mi_twitter.getUserTimeline();
    estadoActual = String.valueOf(statusList.get(0).getText());    
  } catch (TwitterException ex) {
    System.out.println("Error:"+ex.getMessage());    
  }

  return "Mi Estado es: "+estadoActual;    
}
```


Información método getEstado( ): - creamos una variable que contendrá el estado

- creamos un List que contendrá lo que venga del método de la clase Twitter ( getUserTimeLine )
- nuestra variable antes creada tendrá el valor de la lista en la posición o
- retornamos nuestra variable

Ahora crearemos un método que nos devolverá la lista de contactos en twitter


```java
public void listaDeContactos() {
  try {
    List<User> friends = mi_twitter.getFriends();    
    System.out.println("Lista de Contactos\n");
    
    for (User f : friends) {
      System.out.println("Usuario: "+f.getScreenName());
      System.out.println("Estado: "+f.getStatusText()+"\n");
    }    
  } catch (Exception e) {}
}
```


Información método listaDeContactos(): - Creamos un List que contendrá lo que venga del método de la clase Twitter ( getStatusText )

- Recorrimos la lista “friends” que debería tener los amigos ó contactos
- Vamos imprimiendo mientras se recorre el for-each el USUARIO y ESTADO

La [API Twitter4J](https://twitter4j.org/en/index.html) consta con muchos mas métodos y cosas por el estilo, yo solo te daré la base para comenzar… puedes hacer una gráfica mas atractiva y usar esta clase para aquello… Bueno ahora haremos nuestro main:


```java
public static void main(String args[]){
  TwitterJ t = new TwitterJ("mi_user","Mi_password"); 

  t.nuevoTweet("Ejemplo para Lineadecodigo.com");    
  t.listaDeContactos();

  System.out.println(t.getEstado());    
}
```


Información método main(String args[]): - Creamos la instancia a nuestra clase antes creada y a la vez pasamos sus dos argumentos ó parámetros en éste caso USUARIO,PASSWORD

- usamos el método nuevoTweet para cambiar el estado actual pasando por parámetro el nuevo tweet
- Llamamos a el método listaDeContactos() que debería imprimir la lista de contactos ó amigos
- imprimimos el estado actual

Como ya ven es demasiado simple hacer un programa que funcione con Twitter… Interfaz opcional usando la clase antes creada ( Proyecto para Netbeans ) puedes descargarla de acá : [Descargar de aquí](http://www.mediafire.com/file/n4wz1jmzooe/Jtwitter.rar)(opcional)


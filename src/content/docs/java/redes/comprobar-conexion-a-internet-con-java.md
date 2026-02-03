---
title: "Comprobar conexión a Internet con Java"
description: "Pasos para codificar un programa que nos permita comprobar conexión a Internet con Java."
date: 2012-07-14
updatedDate: 2026-01-09
tags: ["java-net","try-catch","exception","connect","socket"]
slug: java/redes/comprobar-conexion-a-internet-con-java
author: Christian Giménez
type: doc
topic: java
id: 3fa1ad5d-0974-496f-a64c-60e9b6faf6ba
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/net/ComprobarConexion.java
---

Hace algún tiempo necesitaba una aplicación que cada determinado tiempo compruebe el estado de la conexión, entonces desarrolle una aplicación en [Java](https://www.manualweb.net/java/) muy simple que cada cierto tiempo verifique el estado de conexión. Lo que voy a exponer aquí solo es la parte de código [Java](https://www.manualweb.net/java/) que se encarga de la comprobar la conexión, nada más. Luego podrá usted incluirlo en una aplicación más grande y con sus propios fines si le parece útil el pequeño código expuesto. Para este sencillo programa [Java](https://www.manualweb.net/java/) vamos a utilizar la clase [Socket](https://www.w3api.com/Java/Socket/), así que veamos lo necesario de ella para los fines de la aplicación. También es necesario trabajar con excepciones pero creo que a este tema le corresponde un post por sí solo. **Clase** [**Socket**](https://www.w3api.com/Java/Socket/) **de Java:** Es un conector TCP/IP diseñado para conectarse a servidores e iniciar intercambios bajo protocolo. La creación de un objeto Socket establece implícitamente una conexión entre cliente y servidor. Ahora pasemos al código: Antes que nada importamos el paquete java.net y ponemos los comentarios de documentación habituales:


```java
import java.net.Socket;
/**
* @(#)ComprobarConexionJava.java
*
* ComprobarConexionJava application
*
* @author Christian G. Gimenez
* @version 1.00 2012/6/27
*/
```


Luego tenemos la signatura de la clase y del método main de [Java](https://www.manualweb.net/java/), toda la acción va a estar dentro del método main:


```java
public class ComprobarConexionJava {
 public static void main(String[] args) {
```


Lo siguiente que vamos a hacer es definir dos variables, de tipo String e int que contendrán una dirección web y un puerto respectivamente:


```java
String dirWeb = "www.lineadecodigo.com";
int puerto = 80;
```


A continuación, viene algo fundamental para el funcionamiento de esta pequeña aplicación, cuando definimos una variable de tipo [Socket](https://www.w3api.com/Java/Socket/) y creamos el objeto de dicho tipo lo hacemos dentro de un bloque try, de no ser así vamos a tener problemas a la hora de compilar nuestra aplicación:


```java
try{
  Socket s = new Socket(dirWeb, puerto);
```


Ahora utilizamos un _if_ para llamar al método [isConnected()](https://www.w3api.com/Java/Socket/.isConnected()) de la clase [Socket](https://www.w3api.com/Java/Socket/), este método devolverá un valor booleano, dependiendo de éste devolveremos un mensaje correspondiente al estado de la conexión:


```java
if(s.isConnected()){
  System.out.println("Conexión establecida con la dirección: " +  dirWeb + " a travéz del puerto: " + puerto);
}
```


Por último vamos a escribir el bloque catch correspondiente al bloque catch que utilizamos arriba, a este bloque lo utilizamos para comunicar el fallo al conectarse en caso que exista tal fallo.


```java

}catch(Exception e){
  System.err.println("No se pudo establecer conexión con: " + dirWeb + " a travez del puerto: " + puerto);
}
```


Eso es todo, como ven es muy simple. Espero lo encuentren útil en algún momento.


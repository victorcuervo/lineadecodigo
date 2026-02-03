---
title: "Conectarse a un FTP con Java"
description: "Conectarse a un FTP con Java requiere usar la biblioteca Apache Commons y manejar excepciones adecuadamente."
date: 2011-09-07
updatedDate: 2026-01-11
tags: ["apache-commons","ftpclient","connect","login","ioexception","try-catch","java-net","ftp"]
slug: java/redes/conectarse-a-un-ftp-con-java
author: victor_cuervo
type: doc
topic: java
id: 84b86cef-0f52-41db-9a05-aaad00511e62
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/net/ftp/ConectarFTP.java
---

La posibilidad de conectarse a un FTP con [Java](https://www.manualweb.net/java/) no es una utilidad que nos den las librerías base de [Java](https://www.manualweb.net/java/). Es por ello que para poder acometer esta tarea y conectarnos a un FTP con Java deberemos de utilizar las librerías de [Apache Commons](http://commons.apache.org/). En concreto el [componente Net](http://commons.apache.org/net/). Así que lo primero que hay que hacer para pode crear nuestro programa que se conecte a un FTP con [Java](https://www.manualweb.net/java/) es [decargarnos la librería Net de Apache Commons](http://commons.apache.org/net/download_net.cgi). En nuestro código fuente deberemos de realizar un import de esta librería:


```java
import org.apache.commons.net.ftp.FTPClient;
```


La clase de Apache Commons que nos permitirá crear un cliente FTP con [Java](https://www.manualweb.net/java/) es FTPClient. Por lo tanto la primera línea de nuestro programa creará una instancia de esta clase.


```java
FTPClient client = new FTPClient();
```


Una vez creado el cliente deberemos de conocer tres cosas para poder conectarnos a un FTP con [Java](https://www.manualweb.net/java/). Estas serán:

- Servidor FTP
- Usuario
- Password

Estos datos los utilizaremos en el método .connect y .login del cliente FTP


```java
String sFTP = "ftp.miservidor.com";
String sUser = "usuario";
String sPassword = "password";
		
try {
  client.connect(sFTP);
  boolean login = client.login(sUser,sPassword);
} catch (IOException ioe) {}
```


Cuando hagamos el login para conectarnos al FTP, este devolverá en un valor booleano si se ha podido conectar o no. Si todo va correctamente ya estaremos conectados. Una vez que hagamos la operativa que necesitemos con el FTP (lo veremos en otros artículos sobre FTP y [Java](https://www.manualweb.net/java/)) deberemos de desconectarnos del FTP. Para desconectarnos del FTP haremos dos cosas. En primer lugar haremos un logout del usuario y luego nos desconectaremos del servidor. Los método .logout() y .disconnect() nos ayudarán en esta tarea.


```java
client.logout();
client.disconnect();
```


Ya tendremos todo nuestro código para conectarse (y desconectarse a un FTP con [Java](https://www.manualweb.net/java/)). Hay que tener en cuenta que todo el proceso de conexión al FTP puede generar una excepción [IOException](https://www.w3api.com/Java/IOException/). Es por ello que deberemos de tomar las medidas necesarias en una estructura try-catch.


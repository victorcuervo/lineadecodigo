---
title: "Acceder a un directorio de un FTP con Java"
description: "Ejemplo de código fuente explicado para poder acceder a un directorio de un FTP con Java."
date: 2012-03-22
updatedDate: 2026-01-09
tags: ["java-net","ftpclient","connect","login","printworkingdirectory","changeworkingdirectory"]
slug: java/redes/acceder-a-un-directorio-de-un-ftp-con-java
author: Víctor Cuervo
type: doc
id: 4fb37dc0-4154-48ec-aa2d-feb4f9c070cf
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/net/ftp/CambiarDirectorioFTP.java
---

Ya vimos en un ejemplo los pasos que hay que seguir para conectarse a un FTP mediante un programa en [Java](https://www.manualweb.net/java/). Con ese código veíamos como acceder al directorio raíz del FTP. Para ello utilizábamos las [librerías Apache Commons](http://commons.apache.org/). Ahora vamos a ver cómo podemos acceder con [Java](https://www.manualweb.net/java/) a un directorio concreto del FTP para acceder a su información. Lo primero de todo será conectarnos al FTP. Así que creamos una clase FTPClient.


```java
FTPClient client = new FTPClient();
client.connect(sFTP);
boolean login = client.login(sUser,sPassword);
```


Los métodos connect() y login() nos permiten establecer la conexión y el login sobre el servidor del FTP. Una vez conectados al servidor FTP podemos ver el directorio al que estamos conectados mediante el método printWorkingDirectory().


```java
System.out.println(client.printWorkingDirectory());
```


Ahora pasaremos a cambiar de directorio dentro del servidor. En este caso vamos a apoyarnos en el método changeWorkingDirectory() indicándole el directorio al que queremos cambiar como parámetro.


```java
client.changeWorkingDirectory("\\httpdocs");
System.out.println(client.printWorkingDirectory());
```


De esta forma y después de acceder al directorio, ya podemos operar sobre él. Para finalizar nuestro código [Java](https://www.manualweb.net/java/) no podemos olvidarnos de desconectarnos del servidor.


```java
client.logout();
client.disconnect();
```


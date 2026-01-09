---
title: "Obtener el nombre de un Host"
description: "Utilizar un programa en Java para poder obtener el nombre de un Host"
date: 2007-08-09
updatedDate: 2026-01-09
tags: ["java-net","inetadress","try-catch","getbyname","gethostname","unknownhostexception"]
slug: java/redes/obtener-el-nombre-de-un-host
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/net/ObtenerNombreDelHost.java
topic: java

---

En este ejemplo vamos a obtener el nombre de un host a partir de una IP. Lo primero que haremos será instanciar la clase InetAddress. Esta clase del paquete [java.net](http://java.net/) es la que contiene toda la información sobre una IP. La clase InetAddress la instanciaremos mediante el método .getByName(IP), que recibe la IP como parámetro. Una vez que tenemos los datos cargados en la clase InetAddress simplemente tendremos que invocar el método .getHostName() que nos devolerá una cadena con el nombre del host perteneciente a dicha IP. El código será el siguiente:


```java
InetAddress addr = InetAddress.getByName("69.89.27.203");
String hostname = addr.getHostName();
```


Hay que tener en cuenta que hay que controlar la excepción UnknownHostException. Es por ello que el código tendremos que ponerlo en medio de una estructura try-catch.


```java
try {
	InetAddress addr = InetAddress.getByName("69.89.27.203");
	String hostname = addr.getHostName();
} catch (UnknownHostException e) {}
```


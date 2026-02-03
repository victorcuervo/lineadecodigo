---
title: "Leer una URL con Java"
description: "Cómo leer una URL con Java y poder volcar el contenido de dicha URL por pantalla."
date: 2007-08-27
updatedDate: 2026-01-11
tags: ["url","inputstream","bufferedreader","ioexception","string","try-catch","java-io","java-net","malformedurlexception"]
slug: java/redes/leer-una-url-con-java
author: victor_cuervo
type: doc
topic: java
id: 6aabbcbf-29ec-459c-8e93-4f13d90a97e4
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/net/LeerURL.java
---

Normalmente, cuando tenemos una URL lo que hacemos es ponerla en un navegador para ver su contenido. Pero hay muchos programas que se dedican a analizar el código fuente de las páginas. Ya sean buscadores, optimizadores de código, validadores,... En este segundo caso necesitaremos de un código que abra una conexión y examine su código, en vez de mostrarlo por pantalla. En nuestro caso vamos a utilizar el lenguaje [Java](https://www.manualweb.net/java/) para llevar a cabo nuestro cometido. Lo primero es tener una URL. Para ello nos apoyamos en la clase URL, que nos validará si el texto introducido es realmente una URL bien formada (con su protocolo, su nombre de servidor,...)


```java
URL url = new URL("http://www.lineadecodigo.com");
```


Su por cualquier motivo insertásemos otro texto que no fuese una URL, acabaríamos teniendo una [MalformedURLException](https://www.w3api.com/Java/MalformedURLException/). Una vez creado el objeto URL deberemos de abrir un [InputStream](https://www.w3api.com/Java/InputStream-java-io/) sobre el para poder leer la información que contiene. Como si fuese cualquier otro origen de datos. En este caso una dirección web.


```java
try {
  // Volcamos lo recibido al buffer
  in = new BufferedReader(new InputStreamReader(url.openStream()));
} catch(Throwable t){}
```


Este [InputStream](https://www.w3api.com/Java/InputStream-java-io/) lo manejaremos con un [BufferedReader](https://www.w3api.com/Java/BufferedReader/readLine/), el cual nos facilitará en sobre manera la lectura del contenido. Sobre este [BufferedReader](https://www.w3api.com/Java/BufferedReader/readLine/)r iremos leyendo línea por línea mientras que el contenido de lo leído sea diferente de null. Controlaremos de la misma forma que no se produzcan excepciones, [IOException](https://www.w3api.com/Java/IOException/).


```java
while ((inputLine = in.readLine()) != null) {
     inputText = inputText + inputLine;
}
```


El contenido leído lo podemos almacenar en un String que mostraremos posteriormente por pantalla. Al final solo quedará cerrar el stream.


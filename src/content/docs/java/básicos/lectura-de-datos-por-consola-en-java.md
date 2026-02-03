---
title: "Lectura de datos por consola en Java"
description: "Ejemplo que nos explica como podemos pedir información al usuario mediante una lectura de datos por consola en Java."
date: 2006-12-16
updatedDate: 2026-01-06
tags: ["bufferedreader","inputstreamreader","readline","java-io","bucles","do-while","inputstream"]
slug: java/basicos/lectura-de-datos-por-consola-en-java
author: victor_cuervo
type: doc
topic: java
id: 7fb628fb-2416-453f-b034-c6098bf6f93f
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/LecturaDatosConsola.java
---

Para realizar lecturas de datos por consola en [Java](http://www.manualweb.net/tutorial-java/) debemos de apoyarnos sobre [la clase System](http://www.w3api.com/wiki/Java:System). Y en concreto sobre [System.in](http://www.w3api.com/wiki/Java:System.in). Si accedemos directamente sobre dicha clase, lo que obtendremos serán lecturas de caracteres. Es por ello que tenemos que ver como facilitar esta lectura. Para realizar una lectura de datos más sencilla y hacerlo mediante cadenas de caracteres ([String](http://lineadecodigo.com/tag/java-string/)) debemos de de utilizar un Buffer de lectura. En este caso nos apoyaremos sobre [la clase BufferedReader](http://www.w3api.com/wiki/Java:BufferedReader). Todo código que realice una lectura de streams, en este caso por la consola, se monta mediante wrapping de clases. Es decir, sobre la consola, montamos un [input stream (InputStreamReader)](http://www.w3api.com/wiki/Java:InputStream), y sobre este un [Buffer (BufferedReader)](http://www.w3api.com/wiki/Java:BufferedReader).


Veamos como es la [línea de código](http://lineadecodigo.com/):


```java
br = new BufferedReader(new InputStreamReader(System.in));
```


Manejar el buffer es muy sencillo ya que simplemente deberemos de ejecutar lecturas por línea.


```java
sTexto = br.readLine();
System.out.println(sTexto);
```


Y ¿cuando acabar? Pues deberemos de escoger una palabra que denote que es la última a introducir por la consola. Eso si queremos que el programa no sea infinito. En nuestro caso, no hemos puesto mucha imaginación. Ya que la palabra ha sido “FIN”.


```java
do {
  sTexto = br.readLine();
  System.out.println(sTexto);
} while(!sTexto.equals("FIN"));
```


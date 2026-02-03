---
title: "Leer valores de fichero de properties"
description: "Se explica cómo leer valores de un fichero de properties en Java y recuperar todos los pares clave/valor."
date: 2007-01-24
updatedDate: 2026-01-09
tags: ["java-util","properties","try-catch","ioexception","fileinputstream","keys","nextelement"]
slug: java/properties/leer-valores-de-fichero-de-properties
author: victor_cuervo
type: doc
topic: java
id: b96826fa-13a4-4737-ad0a-a036308ac993
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/properties/PropertiesClaveValor.java
---

Cuando accedemos a un fichero de propiedades en [Java](https://www.manualweb.net/java/) podemos recuperar uno de sus valores a partir de una clave conocida. Si bien, podemos recuperar todos sus pares clave/valor (puede darse el caso de que no sepamos la clave a buscar o bien que queramos volcar en pantalla los todos valores,...). Para mostrar todos los valores lo que tenemos que hacer es recuperar todas las claves y mostrar el valor asociado para cada una de ellas. Partimos de la base de que hemos leído el fichero de propiedades y lo hemos cargado en una clase Properties.


```java
Properties prop = new Properties();
InputStream is = null;

try {
  is=new FileInputStream("d:\fichero.properties");
  prop.load(is);
} catch(IOException ioe) {}
```


Recuperar todas las claves se puede realizar mediante [el método .keys()](https://www.w3api.com/Java/Hashtable/keys/). Dicho método nos devolverá un enumerado el cual deberemos de recorrer. Por cada valor del enumerado (que es una clave) recuperaremos su valor asociado mediante el método .getProperty().


```java
for (Enumeration e = prop.keys(); e.hasMoreElements() ; ) {
    // Obtenemos el objeto
    Object obj = e.nextElement();
    System.out.println(obj + ": " + prop.getProperty(obj.toString()));
}
```


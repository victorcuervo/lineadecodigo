---
title: "Eliminar espacios en blanco con Java"
description: "Formas de eliminar espacios en blanco con Java, ya sea recorriendo toda la cadena o bien utilizando la clase StringTokenizer."
date: 2007-10-07
updatedDate: 2026-01-11
tags: ["bucles","for","array","string","length","charat","stringtokenizer"]
slug: java/strings/eliminar-espacios-en-blanco-con-java
type: doc
topic: java
id: dcf375e0-767e-4e96-829e-f0bfd47f26b6
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/ElminarEspaciosEnBlanco.java
---

Con el lenguaje [Java](https://www.manualweb.net/java/) podemos eliminar espacios en blanco de una cadena de diferentes formas. En este ejemplo vamos a ver cómo hacerlo de dos formas: recorriendo la cadena y buscando los espacios en blanco, y mediante la clase [StringTokenizer](https://www.w3api.com/Java/StringTokenizer/).


## Recorrer la cadena carácter a carácter


La primera forma es la más rústica. El método consiste en recorrer la cadena completa. Usaremos el método [.length()](https://www.w3api.com/Java/String/.length() para conocer el tamaño máximo de la cadena y un **bucle for** para recorrerla.


Mientras recorremos la cadena vamos creando una nueva cadena a la cual solamente anexaremos caracteres que sean diferentes al espacio en blanco. La forma de obtener un carácter de una determinada posición de la cadena es mediante el método [.charAt(posicionEnCadena)](https://www.w3api.com/Java/String/.charAt()).


```java
String cadena = "Esto es una cadena con espacios";
String cadenaSinEspacios = "";

for (int i = 0; i < cadena.length(); i++) {
    if (cadena.charAt(i) != ' ') {
        cadenaSinEspacios += cadena.charAt(i);
    }
}

System.out.println(cadenaSinEspacios);
```


## Utilizar la clase StringTokenizer


Otra forma más elegante sería usando la clase [StringTokenizer](https://www.w3api.com/Java/StringTokenizer/). Esta clase crea un array de elementos a partir de una cadena, usando como separador el carácter que se le pase como parámetro. En caso de no pasarle separador, asume que el espacio en blanco será dicho separador.


Solamente nos quedará recorrer el array y concatenar el contenido en una nueva cadena.


```java
String cadena = "Esto es una cadena con espacios";
String cadenaSinEspacios = "";

StringTokenizer st = new StringTokenizer(cadena);

while (st.hasMoreTokens()) {
    cadenaSinEspacios += st.nextToken();
}

System.out.println(cadenaSinEspacios);
```


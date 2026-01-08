---
title: "String - Convertir cadena a mayúsculas hasta encontrar un punto"
description: "Cómo podemos convertir cadena a mayúsculas hasta encontrar un punto mediante el lenguaje Java."
date: 2013-01-01
updatedDate: 2026-01-08
tags: ["touppercase","indexof","string"]
slug: java/strings/string-convertir-cadena-a-mayusculas-hasta-encontrar-un-punto
author: Feffo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/MayusculasHastaPunto.java
topic: java

---

¡Buenas! Como segundo ejemplo del set de manipulación de cadenas con [Java](https://www.manualweb.net/java/) de caracteres les voy a mostrar una forma de convertir cadena a mayúsculas hasta encontrar un punto. El ejemplo de convertir cadena a mayúsculas hasta encontrar un punto busca que dada la siguiente cadena de caracteres:


```text
www.lineadecodigo.com
```


Lo que esperamos obtener es una cadena de caracteres con la siguiente forma:


```text
WWW.lineadecodigo.com
```


Para convertir cadena a mayúsculas hasta encontrar un punto primero debemos obtener el índice de la primera aparición de un punto. Para esto usaremos el método [`indexOf`](https://www.w3api.com/Java/String/indexOf/) de la clase [String](https://www.w3api.com/Java/String/) de la siguiente forma:


```text
int indiceDePunto = cadena.indexOf('.');
```


Una vez hecho esto, sabemos exactamente en que posición se encuentra el primer punto. Ahora debemos considerar que el método [`indexOf`](https://www.w3api.com/Java/String/indexOf/) retorna -1 (menos uno) si no se pudo encontrar el carácter que se buscaba, teniendo esto en cuenta yo opte por transformar toda la cadena a mayúsculas mediante el metodo [.toUpperCase()](https://www.w3api.com/Java/String/toUpperCase/).


```java
if(indiceDePunto < 0)
  return cadena.toUpperCase();
```


En caso de que el índice sea válido (es decir que está entre 0 y la longitud de la cadena - 1) procedemos a obtener la subcadena que sera convertida a mayúsculas y la subcadena que no debe ser modificada. Para obtener las subcadenas haremos uso del método [substring](https://www.w3api.com/Java/String/.substring()) de la clase [String](https://www.w3api.com/Java/String/), en el cual se indican el índice de inicio y fin de la subcadena.


```java
// Subcadena a modificar
String inicioHastaPunto = cadena.substring(0, indiceDePunto); 

// Subcadena que no debe ser modificada
String restoDespuesDePunto = cadena.substring(indiceDePunto, cadena.length()); 

// Subcadena modificada
String inicioHastaPuntoConMayus = inicioHastaPunto.toUpperCase();
```


Finalmente, retornamos la cadena resultante como la concatenación de la subcadena modificada y la subcadena que no debía ser modificada:


```java

return inicioHastaPuntoConMayus + restoDespuesDePunto;
```


Ya tenemos convertida nuestra cadena a mayúsculas con [Java](https://www.manualweb.net/java/) hasta el primer punto que hayamos encontrado.


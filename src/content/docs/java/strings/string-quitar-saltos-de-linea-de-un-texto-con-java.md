---
title: "String - Quitar saltos de línea de un texto con Java"
description: "Se explica cómo quitar saltos de línea de un texto con Java utilizando el método replaceAll de la clase String."
date: 2013-01-05
updatedDate: 2026-01-09
tags: ["string","replaceall"]
slug: java/strings/string-quitar-saltos-de-linea-de-un-texto-con-java
author: Feffo
type: doc
topic: java
id: d85c8e17-2ded-4245-863e-d2c4bfcc4b30
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/ReemplazarSaltosDeLinea.java
---

¡Buenas! Como cuarta entrega del set de ejemplos de manipulación de cadenas de caracteres en [Java](https://www.manualweb.net/java/) les voy a mostrar cómo quitar saltos de línea de un texto con [Java](https://www.manualweb.net/java/). Primero que nada debemos tener en cuenta que los saltos de línea en [Java](https://www.manualweb.net/java/) son representados con el carácter _'\n'_, teniendo esto en cuenta podemos hacer uso del método [replaceAll](https://www.w3api.com/Java/String/.replaceAll()) de la clase [String](https://www.w3api.com/Java/String/) (el cual es explicado en el artículo [Reemplazar cadenas con Java](http://lineadecodigo.com/java/string-reemplazar-cadenas-con-java/)) para resolver esto: En este caso el ejemplo para quitar saltos de línea de un texto con [Java](https://www.manualweb.net/java/) parte de que dada la siguiente cadena de caracteres:


```text
hola mundo,
esto es:
www.lineadecodigo.com 
```


Lo que esperamos obtener es una cadena de caracteres con la siguiente forma:


```text
hola mundo,esto es:www.lineadecodigo.com
```


El procedimiento es similar al explicado en el artículo [Reemplazar cadenas con Java](http://lineadecodigo.com/java/string-reemplazar-cadenas-con-java/) solo que en este caso los argumentos para el reemplazo son fijos:


```java
public String quitarSaltos(String cadena) {
  // Para el reemplazo usamos un string vacío 
  return cadena.replaceAll("\n", ""); 
}
```


Vemos como unas pequeñas líneas de código fuente nos ayudan a quitar saltos de línea de un texto con [Java](https://www.manualweb.net/java/).


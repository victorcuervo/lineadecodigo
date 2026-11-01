---
title: "Recibir un parámetro numérico en una JSP"
description: "Aprende a recibir parámetros numéricos en una JSP, convertirlos a enteros con Integer y controlar NumberFormatException para mostrar resultados y errores."
date: 2009-07-30
updatedDate: 2026-11-01
tags: ["jsp","integer","numberformatexception","servlet","string"]
slug: javaee/jsp/recibir-un-parametro-numerico-en-una-jsp
type: doc
topic: javaee
id: de2b3f47-f710-4014-84f2-bee11a4024d9
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javaee/blob/master/src/main/webapp/sumar-datos.jsp
---

En el artículo [Recibir parametros en una JSP](http://lineadecodigo.com/java/recibir-parametros-en-una-jsp/) veíamos cómo leer de forma sencilla los parámetros que llegan a una JSP. Utilizar `request.getParameter("dato")` y guardar el resultado en un `String` está muy bien, pero ¿qué sucede si el dato recibido es un número? [Esa duda ya se planteaba en los comentarios](http://lineadecodigo.com/2006/12/27/recibir-parametros-en-una-jsp/#comment-46016).


Una JSP recibe los parámetros HTTP como cadenas de texto. Para trabajar con ellos como números enteros hay que convertirlos explícitamente y controlar los valores que no tengan un formato válido. En este ejemplo implementaremos una [JSP](https://www.manualweb.net/javaee/) que recibe dos parámetros numéricos y muestra su suma. La recuperación de los datos sigue realizándose con el método [`getParameter()`](http://w3api.com/wiki/Java:ServletRequest.getParameter()) del objeto implícito `request`.


## Recibir los parámetros de la JSP


Primero obtenemos los valores mediante sus nombres. El resultado de `getParameter()` siempre es un `String` o `null` si el parámetro no existe.


```java
String datoUno = request.getParameter("dato1");
String datoDos = request.getParameter("dato2");
```


Por ejemplo, una petición como `sumar-datos.jsp?dato1=10&dato2=5` permite recuperar los valores `10` y `5`. El método no depende de que la petición utilice GET o POST: en ambos casos accedemos a los parámetros con `getParameter()`.


## Convertir un parámetro a entero


Para convertir los datos de tipo [`String`](http://w3api.com/wiki/Java:String) a un tipo numérico, como `int`, podemos utilizar la clase [`Integer`](http://w3api.com/wiki/Java:Integer). El método [`parseInt()`](http://w3api.com/wiki/Java:Integer.parseInt()) devuelve un `int` a partir de una cadena que representa un número entero.


```java
int uno = Integer.parseInt(request.getParameter("dato1"));
int dos = Integer.parseInt(request.getParameter("dato2"));
```


También existe [`Integer.valueOf()`](http://w3api.com/wiki/Java:Integer.valueOf()), que devuelve un objeto `Integer`. Gracias al desempaquetado automático de Java, puede utilizarse en una asignación a `int` como en el ejemplo original:


```java
int uno = Integer.valueOf(request.getParameter("dato1"));
int dos = Integer.valueOf(request.getParameter("dato2"));
```


`parseInt()` y `valueOf()` aceptan signos como `-3`, pero no aceptan una cadena vacía ni espacios alrededor del número. Si se recibe texto no numérico, ambos métodos lanzan una [`NumberFormatException`](http://w3api.com/wiki/Java:NumberFormatException).


## Controlar NumberFormatException


Si el usuario no ha enviado un número entero, la conversión falla. Por eso debemos realizarla dentro de un bloque `try` y capturar la excepción:


```java
try {
    int uno = Integer.parseInt(request.getParameter("dato1"));
    int dos = Integer.parseInt(request.getParameter("dato2"));

} catch (NumberFormatException nfe) {
    out.println("Los datos recibidos no son números enteros");
}
```


El mensaje de error evita que la excepción se muestre directamente al usuario. En una aplicación real conviene devolver un mensaje de validación asociado al formulario y no continuar con el cálculo cuando alguno de los valores sea incorrecto.


## Mostrar la suma


Una vez convertidos los parámetros, hacemos la suma y mostramos el resultado. Para convertir un número en una cadena podemos utilizar [`Integer.toString()`](http://w3api.com/wiki/Java:Integer.toString()). La variable `out` representa la respuesta de la JSP y su método `println()` escribe contenido en ella.


El código completo del ejemplo original queda así:


```java
try {
    int uno = Integer.valueOf(request.getParameter("dato1"));
    int dos = Integer.valueOf(request.getParameter("dato2"));

    int suma = uno + dos;

    out.println("La suma de " + datoUno + " + " + datoDos + " = " + Integer.toString(suma));

} catch (NumberFormatException nfe) {
    out.println("Los datos recibidos no son números enteros");
}
```


Si `dato1` vale `10` y `dato2` vale `5`, la respuesta será `La suma de 10 + 5 = 15`. En este fragmento `datoUno` y `datoDos` son las variables obtenidas al principio del artículo; por eso deben estar disponibles en el mismo ámbito de la JSP.


## Validar parámetros ausentes o vacíos


Además de comprobar que el texto representa un entero, es recomendable validar que los parámetros existen y no están vacíos. También podemos eliminar espacios al principio y al final antes de convertirlos:


```java
String datoUno = request.getParameter("dato1");
String datoDos = request.getParameter("dato2");

try {
    if (datoUno == null || datoDos == null
            || datoUno.trim().isEmpty() || datoDos.trim().isEmpty()) {
        throw new NumberFormatException();
    }

    int uno = Integer.parseInt(datoUno.trim());
    int dos = Integer.parseInt(datoDos.trim());
    int suma = uno + dos;

    out.println("La suma es " + suma);

} catch (NumberFormatException nfe) {
    out.println("Los datos recibidos no son números enteros");
}
```


La comprobación evita procesar parámetros que no se han enviado o que contienen únicamente espacios. En formularios accesibles desde Internet también conviene aplicar límites de negocio, por ejemplo rechazar valores fuera del rango permitido, y mostrar un error sin incluir directamente texto recibido del usuario.


---
title: "Palabras que empiecen por"
description: "Aprende a crear en Java un juego de palabras por prefijo con Scanner y startsWith(), validando entradas y contando los aciertos desde la consola."
date: 2010-09-22
updatedDate: 2026-11-01
tags: ["while","string","scanner"]
slug: java/palabras-que-empiecen-por
type: doc
topic: java
id: 3ffd0715-0971-4347-9112-4231b25644e2
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/PalabraQueEmpiezaPor.java
---

Por un punto la respuesta, palabras que empiecen por "ca"... Quién no ha jugado a este juego de niños... Vamos a ver cómo podemos codificar este juego mediante el lenguaje [Java](https://www.manualweb.net/java/). Lo primero de todo será pedirle al usuario que inserte palabras por consola. Palabras que empiecen por... Para ello utilizamos la clase `Scanner`, la cual nos permite capturar el dato introducido por el usuario de forma sencilla. Puedes consultar también la [página de Java en Línea de Código](https://lineadecodigo.com/java/) para continuar aprendiendo el lenguaje.


## Leer palabras desde la consola


Utilizamos un objeto `Scanner` asociado a `System.in` para leer cada palabra que escribe el usuario. La clase `Scanner` pertenece al paquete `java.util`, por lo que un programa independiente necesita la importación `import java.util.Scanner;`


```java
Scanner reader = new Scanner(System.in);
System.out.println("Escribe palabras que empiecen por '" + sInicio + "'");
sTexto = reader.next();
```


Hemos utilizado una variable `sInicio` para poder configurar al gusto la palabra por la que deben empezar las entradas. El método [`next()`](http://w3api.com/wiki/Java:Scanner.next()) nos permite cargar en la variable `sTexto` lo que el usuario haya escrito. Como `next()` lee el siguiente token separado por espacios, este ejemplo trabaja con palabras individuales.


## Comprobar el prefijo con startsWith()


Ahora hay que comprobar que lo que ha introducido el usuario es una palabra que empieza por el prefijo indicado. Para ello utilizamos el método [`startsWith()`](https://www.w3api.com/Java/String/.startsWith()) de la clase [`String`](https://www.w3api.com/Java/String/).


> La comparación de `startsWith()` distingue mayúsculas y minúsculas: `Casa` no empieza por `ca`. Si el juego no debe distinguirlas, normaliza tanto `sInicio` como `sTexto`, por ejemplo con `toLowerCase(Locale.ROOT)`


El método [`startsWith()`](https://www.w3api.com/Java/String/.startsWith()) devuelve `true` cuando el inicio de la cadena corresponde al valor pasado como parámetro.


```java
while (sTexto.startsWith(sInicio)) {
  System.out.println("Correcto... " + sTexto);
  System.out.println("Dime otra palabra...");
  sTexto = reader.next();
}
```


Vemos que, si el método [`startsWith()`](https://www.w3api.com/Java/String/.startsWith()) devuelve `true`, felicitamos al usuario y volvemos a pedirle otra palabra.


Nuevamente utilizamos el método [`next()`](http://w3api.com/wiki/Java:Scanner.next()). Cuando el usuario escribe una palabra que no empieza por `sInicio`, la condición deja de cumplirse y termina el juego.


> El método `next()` lee una palabra o token. Si necesitas aceptar frases con espacios, utiliza `nextLine()` y decide cómo eliminar los espacios iniciales y finales antes de aplicar `startsWith()`


## Contar los aciertos


Solo nos queda tener un contador de aciertos para darle una puntuación al usuario. El contador debe comenzar en cero e incrementarse dentro del bucle, únicamente después de comprobar que la palabra es válida:


```java
while (sTexto.startsWith(sInicio)) {
  System.out.println("Correcto... " + sTexto);
  contador++;
  System.out.println("Dime otra palabra...");
  sTexto = reader.next();
}
```


Este fragmento conserva la lógica del ejemplo anterior y añade `contador++` para registrar cada palabra aceptada.


## Programa completo en Java


Los fragmentos anteriores muestran la idea principal. El siguiente programa reúne esa lógica en una aplicación ejecutable, comprueba que haya entrada disponible con `hasNext()` y muestra el número final de aciertos:


```java
import java.util.Scanner;

public class PalabraQueEmpiezaPor {

    public static void main(String[] args) {
        String sInicio = "ca";
        int contador = 0;

        if (sInicio.isEmpty()) {
            System.out.println("El prefijo no puede estar vacío.");
            return;
        }

        try (Scanner reader = new Scanner(System.in)) {
            System.out.println("Escribe palabras que empiecen por '" + sInicio + "'.");

            while (reader.hasNext()) {
                String sTexto = reader.next();

                if (!sTexto.startsWith(sInicio)) {
                    break;
                }

                System.out.println("Correcto... " + sTexto);
                contador++;
                System.out.println("Dime otra palabra...");
            }
        }

        System.out.println("Número de aciertos: " + contador);
    }
}
```


Con `sInicio = "ca"`, entradas como `casa` y `carta` se cuentan como aciertos. La primera palabra que no empiece por `ca` finaliza el juego y no se suma al contador. La llamada a `hasNext()` evita intentar leer un valor cuando ya no quedan datos disponibles, y `try` con recursos cierra el `Scanner` al terminar.


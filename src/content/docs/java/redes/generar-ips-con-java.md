---
title: "Generar IPs con Java"
description: "Aprende a generar IPs con Java: crea direcciones IPv4 aleatorias con Math.random() y StringBuilder, y conoce sus límites y alternativas."
date: 2021-01-29
updatedDate: 2026-10-31
tags: ["math","random","string","for","java-net"]
slug: java/redes/generar-ips-con-java
type: doc
topic: java
id: 6209aafb-6501-41d1-87ca-cd205e975748
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/math/GeneradorIPs.java
---

Hoy vamos a ver cómo generar IPs con [Java](https://lineadecodigo.com/java/). La idea surge de la necesidad de disponer de un conjunto de IPs para realizar unas simulaciones de unas pruebas, de ahí este pequeño código que nos permite generar IPs.


## Números aleatorios


Lo primero es entender qué es una dirección IPv4 y de qué se compone. Si lo vemos de una forma muy sencilla, sin hablar de [máscaras, subredes o notación CIDR](https://www.digitalocean.com/community/tutorials/understanding-ip-addresses-subnets-and-cidr-notation-for-networking). Una dirección IPv4 está compuesta por cuatro números, llamados octetos, que van del 0 al 255 y están separados por puntos. Por lo tanto, un conjunto de IPs podría ser el siguiente:


```text
236.205.19.12
107.40.175.172
98.172.91.43
187.227.66.225
72.169.19.77
```


> En este artículo hablamos de generar direcciones IPv4. No entramos en cómo generar direcciones IPv6.


Así que lo primero que necesitamos es generar con [Java](https://lineadecodigo.com/java/) números aleatorios del 0 al 255. Como ya vimos en el artículo de [generar un número al azar](http://lineadecodigo.com/java/numero-al-azar-en-java/), necesitamos el método [`Math.random()`](http://w3api.com/wiki/Java:Math.random()) de la clase [`Math`](http://w3api.com/wiki/Java:Math). Este método devuelve un número mayor o igual que `0.0` y menor que `1.0`. Por eso multiplicamos su valor por `256` y convertimos el resultado a un entero. El límite superior no se incluye: el resultado puede ser cualquier valor entre `0` y `255`.


```java
public static int numeroAleatorio() {
  // Método que devuelve un número aleatorio entre 0 y 255
  return (int) (Math.random()*256);
}
```


## StringBuilder para construir la IP


Ahora tendremos que ir componiendo una cadena formada por cuatro números aleatorios separados por puntos. Para ir construyendo cadenas, y como buena práctica, utilizaremos [`StringBuilder`](http://w3api.com/wiki/Java:StringBuilder) en lugar de concatenar cadenas repetidamente. Así que creamos nuestro [`StringBuilder`](http://w3api.com/wiki/Java:StringBuilder).


```java
StringBuilder sbIP = new StringBuilder();
```


Lo siguiente será añadir un número y un punto en tres ocasiones. Para ello utilizamos un [bucle](http://www.manualweb.net/java/sentencias-bucle-java/#for) `for` y terminamos añadiendo el cuarto número sin un punto final.


```java
for (int x=0; x<3; x++) {
  sbIP.append(String.valueOf(numeroAleatorio())).append(".");
}

sbIP.append(String.valueOf(numeroAleatorio()));
```


Vamos a incluirlo en un método `ipAleatoria()` para poder invocarlo desde otros sitios.


```java
public static String ipAleatoria() {
    StringBuilder sbIP = new StringBuilder();
    for (int x=0; x<3; x++) {
        sbIP.append(String.valueOf(numeroAleatorio())).append(".");
    }
    sbIP.append(String.valueOf(numeroAleatorio()));

    return sbIP.toString();

}
```


## Generar lista de IPs aleatorias


Lo último que vamos a hacer es mostrar un listado de IPs invocando al método `ipAleatoria()` que acabamos de crear. Nuevamente utilizamos un [bucle](http://www.manualweb.net/java/sentencias-bucle-java/#for) `for` para sacar la información por pantalla mediante [`System.out`](http://w3api.com/wiki/Java:System.out).


```java
for (int x=0;x<100;x++) {
    System.out.println(ipAleatoria());
}
```


## Alternativa con ThreadLocalRandom


El método `Math.random()` es suficiente para un ejemplo sencillo, pero en código nuevo también podemos utilizar `ThreadLocalRandom`. Su método `nextInt(0, 256)` incluye el límite inferior y excluye el superior, por lo que devuelve exactamente valores entre `0` y `255` sin necesidad de realizar una conversión explícita.


```java
import java.util.concurrent.ThreadLocalRandom;

public static int numeroAleatorioConThreadLocalRandom() {
    return ThreadLocalRandom.current().nextInt(0, 256);
}
```


Puedes utilizar este método en `ipAleatoria()` en lugar de `numeroAleatorio()` si prefieres esta alternativa. Tanto `Math.random()` como `ThreadLocalRandom` generan valores pseudoaleatorios; no deben utilizarse para crear tokens, contraseñas ni otros datos que requieran seguridad criptográfica.


## Consideraciones sobre las IPs generadas


El código genera cadenas con el formato de una dirección IPv4, pero eso no significa que las direcciones sean reales, estén asignadas a un dispositivo o sean accesibles desde la red. Además, como cualquier generación aleatoria, pueden aparecer IPs repetidas. Si necesitas obtener valores únicos, puedes guardar las cadenas en un `Set<String>` y continuar generando hasta alcanzar la cantidad deseada.


El ejemplo trabaja únicamente con IPv4: una dirección IPv6 utiliza una representación y un rango diferentes, por lo que necesitaría una implementación específica.


Y ya tenemos cómo **generar IPs con Java** de forma aleatoria.


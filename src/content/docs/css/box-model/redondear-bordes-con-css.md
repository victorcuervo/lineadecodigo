---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWGBKQZ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1Y7Du%2BKQ0l%2FXQMqTP2lP9i0CX2hFCZzE971FrRAyAlAiEArto2UYowAX5k6EhzdkA59uTNxTPIy2iCn2tc758jI0gq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDAkHvTG2%2Fjv9cTm6hircAwMMVRPh2BEfEnmrRhrOcclqUAiVVKFUYVlY%2FT3csskCoR%2FVV1FH7mg8q0jqvuLBgFXt63BUsvlTXArcb%2BsdBFKUaAbyHh3JNe1DjdJ1MEY4STrTLao%2FsT8UcVXJzNYKg3rrPNq9ulFj6DRVqKJ9VN%2FzhAgu8ZIuT8CgWx%2F4Jqjajr4gb2BRWVF3PsokICW3r9FsJOXClhXIgF8wf35GZFvKccSmu3Bj%2FEL68BAeRc6Af%2BsjfNEoBqX2SI15tGZhdeSl0jZBRO%2FWNwljct3LIQ4XVW5OCd9U2%2BdV4T%2F8aSBsiMtjinzUesP9nmvRBYdxeQOa2KX2guIK28cOKrVpeNBQUp2WJGVxRoFnujstdH%2BOeGHMPG2jn0142oBcEZgZ7DpXVY7i95jMV4fQXJKE6CYT3SMbfstoRBeUjPhQz1J497V7hnlujYzWKyAvS%2BuH3%2FIinNlAT%2BfhGAwiSNHTv6RBQ8olQKm8XYIQd1Ic8rb2SqJ%2BzDcTVlI2%2BC4%2FOZY7HQHUBwRLzNWWCY7%2Ftwr0MRHdYYXfkY4q7RBrTkNw%2FImHMEi9kE0G%2FYc0wW4M5%2FuAj7kqmEsgcSsPdUf73oQPWgR9VAyKK9S9%2FNzK1hT4FkTI2xbfuA17T0AbJtp%2BMP6xiMoGOqUBDIKiPou9GGoDaVXur2B5BfEk8MDki%2BEzViwBUjdTeicZ3kMb3d%2FzAkyIxt3XiuoX0XpanJAYvo7iDXMHoRNaU0OngCPDc27BhEEPm4d%2FfOcYbiuyi7FCpfavJpSOHfikQyOzBsx8NEp9DJFiHHbz8h3js7XTrTgvRHFFhOcUNzmf8HPG2%2FYKZwyeCDhjxsWD%2FMFarNceTtuAh9oNEN5s04nNgaZN&X-Amz-Signature=6ad1821a6995e19a8eacef18b3058a6575c05e8000f38ec5fa2a84ecb1b88950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWGBKQZ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1Y7Du%2BKQ0l%2FXQMqTP2lP9i0CX2hFCZzE971FrRAyAlAiEArto2UYowAX5k6EhzdkA59uTNxTPIy2iCn2tc758jI0gq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDAkHvTG2%2Fjv9cTm6hircAwMMVRPh2BEfEnmrRhrOcclqUAiVVKFUYVlY%2FT3csskCoR%2FVV1FH7mg8q0jqvuLBgFXt63BUsvlTXArcb%2BsdBFKUaAbyHh3JNe1DjdJ1MEY4STrTLao%2FsT8UcVXJzNYKg3rrPNq9ulFj6DRVqKJ9VN%2FzhAgu8ZIuT8CgWx%2F4Jqjajr4gb2BRWVF3PsokICW3r9FsJOXClhXIgF8wf35GZFvKccSmu3Bj%2FEL68BAeRc6Af%2BsjfNEoBqX2SI15tGZhdeSl0jZBRO%2FWNwljct3LIQ4XVW5OCd9U2%2BdV4T%2F8aSBsiMtjinzUesP9nmvRBYdxeQOa2KX2guIK28cOKrVpeNBQUp2WJGVxRoFnujstdH%2BOeGHMPG2jn0142oBcEZgZ7DpXVY7i95jMV4fQXJKE6CYT3SMbfstoRBeUjPhQz1J497V7hnlujYzWKyAvS%2BuH3%2FIinNlAT%2BfhGAwiSNHTv6RBQ8olQKm8XYIQd1Ic8rb2SqJ%2BzDcTVlI2%2BC4%2FOZY7HQHUBwRLzNWWCY7%2Ftwr0MRHdYYXfkY4q7RBrTkNw%2FImHMEi9kE0G%2FYc0wW4M5%2FuAj7kqmEsgcSsPdUf73oQPWgR9VAyKK9S9%2FNzK1hT4FkTI2xbfuA17T0AbJtp%2BMP6xiMoGOqUBDIKiPou9GGoDaVXur2B5BfEk8MDki%2BEzViwBUjdTeicZ3kMb3d%2FzAkyIxt3XiuoX0XpanJAYvo7iDXMHoRNaU0OngCPDc27BhEEPm4d%2FfOcYbiuyi7FCpfavJpSOHfikQyOzBsx8NEp9DJFiHHbz8h3js7XTrTgvRHFFhOcUNzmf8HPG2%2FYKZwyeCDhjxsWD%2FMFarNceTtuAh9oNEN5s04nNgaZN&X-Amz-Signature=efcb963c2037ff6028fb020ba4c778b880ac894b1c87b0e2879342a686d53b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```css
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9

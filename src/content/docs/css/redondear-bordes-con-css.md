---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6PHBOHK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbMqHzjox3LyXzPWbKeWy2I6KPvhfTfSIWaBNMG4KEIAiAbMhIamN2eBjKn8r%2FggUvQ30rteo9T8mFvcFXcZ4sruyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMcRPxt0B2iWYi6aOMKtwDDu%2BdiuOoT739NYc%2Bg486po%2Ft1gOYZo2rkhiIn4iyX1jgJ%2BnTTcCwuI%2FhE2s4AcOyJ8%2BwSdlDnfbPzY9gr9Z0WC9AayaOnx1lpQCrfmUYExbOftBjK9op61Oo9vx4vq%2BmqNfd0gmrb7bf6R%2Bd2ngd1e7DEy%2BB%2FyBZpCGL4735Em4kvzW%2B9CkYIRa%2F3xzwr5r3bam9j1qSfoX5uIPc0RGJ5nIE%2Bsti9j7pBoDqWHcx8eyvm1fbQHHxcA%2FIgRLYrQvxEjNAN7z7VJkPKfJzVPMxwaQvQvYA%2FfgMdt3trb8dsbykPlJrNxhI72YNJmqVE9jJwXDV6Q%2FU5yTXJ9OUBUMIZ%2BLP8c8ezgREQqFNF%2Bvx%2BUzlbiceCXKix62imGlyxpLfS%2BAkGCay5aGwWLU1VRSYc8IDOzzpFmwiQ0PppUg17kGVydEQb4t41izOCxtoUl%2BvFjxAw0DLMdna8vrMaIQJsJglU1TU3z%2FMz0uo%2BXS77YiiDD8E1BpOYJnF9RtuoIEOZkkbpIaf4L0MOWlEJfVbRAUruPhzCE03J%2BxzAmvUQQOPBdRQEuNhn%2FDNT1Q44uIV0ODfvOdLM1zuslrJC3jVbsYZSmIepsuFJtXnZwyg4W6vfITzIN2%2BQ5dP1AIwhNTSyQY6pgFacqU%2F28guUCL5crOeohof66fiH5469Yhw3s9NMRaQUlvSw4KrXmvygq%2BIOw04LllcAC%2FtFa4YU5n%2B8xgbN4Nd2assrf7XfZnRN1KU96gZOOBCUGNMnDN%2BZK6vk4Mr5SQN2ZPjUKYaHIaMry88MYlPy%2B0FbCA7NFy%2FEAGJsNsQ241aEv5DE32FHrKDY3QgOmpU9NH150HIRKxG%2Bcg%2F6ZkvYTtuBv5%2B&X-Amz-Signature=798f8c6f4fc9c1f024994506ddb298f9161a049d27f1c7d177d8f97cd9b2242b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6PHBOHK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbMqHzjox3LyXzPWbKeWy2I6KPvhfTfSIWaBNMG4KEIAiAbMhIamN2eBjKn8r%2FggUvQ30rteo9T8mFvcFXcZ4sruyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMcRPxt0B2iWYi6aOMKtwDDu%2BdiuOoT739NYc%2Bg486po%2Ft1gOYZo2rkhiIn4iyX1jgJ%2BnTTcCwuI%2FhE2s4AcOyJ8%2BwSdlDnfbPzY9gr9Z0WC9AayaOnx1lpQCrfmUYExbOftBjK9op61Oo9vx4vq%2BmqNfd0gmrb7bf6R%2Bd2ngd1e7DEy%2BB%2FyBZpCGL4735Em4kvzW%2B9CkYIRa%2F3xzwr5r3bam9j1qSfoX5uIPc0RGJ5nIE%2Bsti9j7pBoDqWHcx8eyvm1fbQHHxcA%2FIgRLYrQvxEjNAN7z7VJkPKfJzVPMxwaQvQvYA%2FfgMdt3trb8dsbykPlJrNxhI72YNJmqVE9jJwXDV6Q%2FU5yTXJ9OUBUMIZ%2BLP8c8ezgREQqFNF%2Bvx%2BUzlbiceCXKix62imGlyxpLfS%2BAkGCay5aGwWLU1VRSYc8IDOzzpFmwiQ0PppUg17kGVydEQb4t41izOCxtoUl%2BvFjxAw0DLMdna8vrMaIQJsJglU1TU3z%2FMz0uo%2BXS77YiiDD8E1BpOYJnF9RtuoIEOZkkbpIaf4L0MOWlEJfVbRAUruPhzCE03J%2BxzAmvUQQOPBdRQEuNhn%2FDNT1Q44uIV0ODfvOdLM1zuslrJC3jVbsYZSmIepsuFJtXnZwyg4W6vfITzIN2%2BQ5dP1AIwhNTSyQY6pgFacqU%2F28guUCL5crOeohof66fiH5469Yhw3s9NMRaQUlvSw4KrXmvygq%2BIOw04LllcAC%2FtFa4YU5n%2B8xgbN4Nd2assrf7XfZnRN1KU96gZOOBCUGNMnDN%2BZK6vk4Mr5SQN2ZPjUKYaHIaMry88MYlPy%2B0FbCA7NFy%2FEAGJsNsQ241aEv5DE32FHrKDY3QgOmpU9NH150HIRKxG%2Bcg%2F6ZkvYTtuBv5%2B&X-Amz-Signature=6c054c0ced82691eea8126e5a8611c53c4826376c19c4e778b0dfc907587f2b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
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


```text
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

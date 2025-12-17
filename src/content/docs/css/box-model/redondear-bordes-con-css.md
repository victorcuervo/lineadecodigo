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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZFOEITI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA2NurO8%2Fkkc5FtaKk1tJkf3SWRMJbWOVKiEKxK5YE7QIgCB31J6ESd8cC6S36VLBlMXt9Ja%2BlpJmtz8jms%2FsuJNYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBGA67paUfOpgIM9OCrcA7tBiAWQF5G%2BanLoiNrqSGB0H%2BrnVTGpEMBhIIyMkeJs%2BHR6xh2peZwNnooKHv61VbUo2K1BbCi1j08z4UyWrTK4noqHQ90j3wKPTgJw8v%2BbmUe5xmM6Uo2R3XYdOj6MXsMi1s74kgAC0urv8AVNKjt80U5DHniGYdmVd%2FMzYdclBcYEg0kXzGMUy7lrfca7JP82pr563WzrNmXLYC77hlO3Q8ejNNyR75d%2Fp2Ouycbs2VTVac1hKubs%2BN5w8SZCCKplJhRxTfexKU4%2B8qGQPcmdQ3Loxl4sdoDlq6I9wboqSJQaIIkd0yBUSPPUuVg8L4KO6utVqtipVsUQVSS2Z7UBvS%2Fiipo0KiNWF5QIli%2FKmEa8yRJRp6XYDBiMK%2FLKnbFNK2kOwm9A0ppvjXUk5ypqcVbllWFMs3refxf4u1a7m7ORKZohwU7mYVk1nyrZK0u4sWPDZ%2BEQC41nmM63atDePgZm5K0y%2FHUJX3%2FeK2PV5eha0aynK4J8FCCQC0pF6I80NoRWZd%2BROJQWhQkMA2QTDWIuarSrDU%2FFW82WJwoy1Fzxxq1YTQpAAIYToFmjHO%2FS6fW0ILBmD7huEZsZFdjXKDglzybpr3o5F8kSUbnAHXBbdaUTchWGoDOoMPeWiMoGOqUBwZ%2BlS3M0%2FjN1wcow2V9RKMhpbx%2FMqVmS5s70uXA2vcN97HKpheTO0yBqJvStEOhqn0XDQfOIJS6gWMWwprXRr0DLn6dCFMrc7kE%2F4P%2B1gO%2Bq6FvYB1VfWK3maBPkZh%2BuEnpxZ6mDWf8JnoyrZHRxNwfvgjuoBlWtR41a8qARs7peep%2Bw9HN1qQjWbaWKEgzOaYY%2FN6in%2B2Vi6ylhMCZrowU3JbtX&X-Amz-Signature=712080cab00c3d1434250929b186842071ca9078366713e61458ac3b946d0dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZFOEITI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA2NurO8%2Fkkc5FtaKk1tJkf3SWRMJbWOVKiEKxK5YE7QIgCB31J6ESd8cC6S36VLBlMXt9Ja%2BlpJmtz8jms%2FsuJNYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBGA67paUfOpgIM9OCrcA7tBiAWQF5G%2BanLoiNrqSGB0H%2BrnVTGpEMBhIIyMkeJs%2BHR6xh2peZwNnooKHv61VbUo2K1BbCi1j08z4UyWrTK4noqHQ90j3wKPTgJw8v%2BbmUe5xmM6Uo2R3XYdOj6MXsMi1s74kgAC0urv8AVNKjt80U5DHniGYdmVd%2FMzYdclBcYEg0kXzGMUy7lrfca7JP82pr563WzrNmXLYC77hlO3Q8ejNNyR75d%2Fp2Ouycbs2VTVac1hKubs%2BN5w8SZCCKplJhRxTfexKU4%2B8qGQPcmdQ3Loxl4sdoDlq6I9wboqSJQaIIkd0yBUSPPUuVg8L4KO6utVqtipVsUQVSS2Z7UBvS%2Fiipo0KiNWF5QIli%2FKmEa8yRJRp6XYDBiMK%2FLKnbFNK2kOwm9A0ppvjXUk5ypqcVbllWFMs3refxf4u1a7m7ORKZohwU7mYVk1nyrZK0u4sWPDZ%2BEQC41nmM63atDePgZm5K0y%2FHUJX3%2FeK2PV5eha0aynK4J8FCCQC0pF6I80NoRWZd%2BROJQWhQkMA2QTDWIuarSrDU%2FFW82WJwoy1Fzxxq1YTQpAAIYToFmjHO%2FS6fW0ILBmD7huEZsZFdjXKDglzybpr3o5F8kSUbnAHXBbdaUTchWGoDOoMPeWiMoGOqUBwZ%2BlS3M0%2FjN1wcow2V9RKMhpbx%2FMqVmS5s70uXA2vcN97HKpheTO0yBqJvStEOhqn0XDQfOIJS6gWMWwprXRr0DLn6dCFMrc7kE%2F4P%2B1gO%2Bq6FvYB1VfWK3maBPkZh%2BuEnpxZ6mDWf8JnoyrZHRxNwfvgjuoBlWtR41a8qARs7peep%2Bw9HN1qQjWbaWKEgzOaYY%2FN6in%2B2Vi6ylhMCZrowU3JbtX&X-Amz-Signature=95fef373c3b8d6db26d3279e8976e4f58a9f72a3fbb43a6fcf0cb244f95a9b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

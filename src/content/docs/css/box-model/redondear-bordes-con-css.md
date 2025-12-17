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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662II5YVEA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmBQQGl3Cxg5WierdRr8rJrMOS8ogjaC8PLNihww2XIAIhALkiEVfo6Eu9I0OPOO8Gm7F8006J3YADxPBuDWBDdn6zKv8DCHoQABoMNjM3NDIzMTgzODA1Igzn8cDsp1JL4moCg5cq3ANiVIInD1PEi7tyG9X9ojG8cRSg8AsNkL1ixfp%2FpeCHHew735itSr7U02pzuHnIsMX5mmkZwRwO5bmdGn7A7R7ag%2FNcnAU9khLr8VFO3hWpvf0QpAIFH9%2FBWqWYT88%2BuUN4CmKi1t52RviYpKpJ70YdNnEhZFW1w0WGI06IZ%2B0%2B2QbW038JnIbGVLXF26cqdifFqDprNOs5DQZOMu9G%2BqkO5JIfdbOYu%2BIc0nfapnbQzebJs%2F4eQ13JotyldeEWLkyLQXzRxKnhocfEE6C4Rc8KtI%2FqmkE7OJB7eAtWBiaVG2u8yVzo1reCvaX%2BQtR5n07Bz1yT7FOKSd0x1lKw6JARFEAWG0G%2B4siNwGQlrjLMsKCjZhOHfZRwGIlFA92jkrcKxpkscF2xbI1lwbs8PQjGilToK6Jkpj0pxle4XaJdGE0%2FviP%2BMq2yE2LIOuuW2zwLYVEOFbnF63Kf6GmWO9RoXgZxluphk%2BNXr8Na%2FSvKkIZKPM11h0C3aJvueIG8g99I7bCObSLpgmiKBgUt3OxUPpGVanBZIZBmtTxryHp21ku8U3V3Po%2BcCsi7WdKjHmADW4jLn9Bo%2BJ%2B%2FSU%2BgNrD%2Bwg1KTqH%2BYfZyoyVgax3d%2B1i4gDHyQg7iCmnr9TDu74nKBjqkAarD2ocbhyYTnShaxAlkqK%2B8j9pVwkhhaKqYo7lBrAy3VDfl9Yj3ww3q8ggFYTkyT27czYBGC9ZttrsH4dOgyajQwsewohdYZ2EzEfTkOC3MKQyhKR6ihJahDLibx0MVrafBwiQ2H4BzcKbp1oPv86EgylGaSw7%2FEvvPSQb91M%2BhJQ3bsy1LrqWXJt8KvshD7ryywkoaEeCS%2Fd1N9a8GfCIrQc5o&X-Amz-Signature=addc28c9483916a169d143fe980f2bede69cf5def269d7e365022d896e657080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662II5YVEA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmBQQGl3Cxg5WierdRr8rJrMOS8ogjaC8PLNihww2XIAIhALkiEVfo6Eu9I0OPOO8Gm7F8006J3YADxPBuDWBDdn6zKv8DCHoQABoMNjM3NDIzMTgzODA1Igzn8cDsp1JL4moCg5cq3ANiVIInD1PEi7tyG9X9ojG8cRSg8AsNkL1ixfp%2FpeCHHew735itSr7U02pzuHnIsMX5mmkZwRwO5bmdGn7A7R7ag%2FNcnAU9khLr8VFO3hWpvf0QpAIFH9%2FBWqWYT88%2BuUN4CmKi1t52RviYpKpJ70YdNnEhZFW1w0WGI06IZ%2B0%2B2QbW038JnIbGVLXF26cqdifFqDprNOs5DQZOMu9G%2BqkO5JIfdbOYu%2BIc0nfapnbQzebJs%2F4eQ13JotyldeEWLkyLQXzRxKnhocfEE6C4Rc8KtI%2FqmkE7OJB7eAtWBiaVG2u8yVzo1reCvaX%2BQtR5n07Bz1yT7FOKSd0x1lKw6JARFEAWG0G%2B4siNwGQlrjLMsKCjZhOHfZRwGIlFA92jkrcKxpkscF2xbI1lwbs8PQjGilToK6Jkpj0pxle4XaJdGE0%2FviP%2BMq2yE2LIOuuW2zwLYVEOFbnF63Kf6GmWO9RoXgZxluphk%2BNXr8Na%2FSvKkIZKPM11h0C3aJvueIG8g99I7bCObSLpgmiKBgUt3OxUPpGVanBZIZBmtTxryHp21ku8U3V3Po%2BcCsi7WdKjHmADW4jLn9Bo%2BJ%2B%2FSU%2BgNrD%2Bwg1KTqH%2BYfZyoyVgax3d%2B1i4gDHyQg7iCmnr9TDu74nKBjqkAarD2ocbhyYTnShaxAlkqK%2B8j9pVwkhhaKqYo7lBrAy3VDfl9Yj3ww3q8ggFYTkyT27czYBGC9ZttrsH4dOgyajQwsewohdYZ2EzEfTkOC3MKQyhKR6ihJahDLibx0MVrafBwiQ2H4BzcKbp1oPv86EgylGaSw7%2FEvvPSQb91M%2BhJQ3bsy1LrqWXJt8KvshD7ryywkoaEeCS%2Fd1N9a8GfCIrQc5o&X-Amz-Signature=25a5995c299bdb730a1b977fd81f962ce32a1e01d013307228669ec4ed029059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

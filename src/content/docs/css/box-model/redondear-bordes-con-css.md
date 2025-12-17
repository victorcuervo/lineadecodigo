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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI3YGMSG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9d%2BF6zkgjHcoYSnRQ9ZZ4RBabOHrWNn7oqBWzEXjj%2FAiEAz6ACejrlIVOPg6mXBR2QnDdms7V%2FAJvNUSAmuTs5hAkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPZGx%2FPyUswVsb6rFyrcAyhaphWn74yknM2rTQdKsDBSmjNIXHJ1TAM3nEelnOnYzE3w0oXR9wICksdM2uI9RpBbKtF6Q69Zhoz3HBx9JQsx1QBVV4JnVr%2FiybKAmpFIUVHD9rKNn7k1nru9lLx3J%2BH0gdNOoA8vE%2F1%2BBBKOqtpyv3IBwtY639DgPgq3GDICHl3vZPYgjh8O9Aj212eZIRkzJB72tbu01%2BD4LugdC0v3eNaZIsgv6ff1bt77%2FEy9%2BQlt3GF7q89qXx4F8G4qGjDl9fem5Bo5BWlITRmAl0ZAPdr1b%2Flh22QVqWaVfJWY%2B61lGJWa1liMOBglswpWJ%2B0GLHlVrrSxqQP8X8tDOx%2FoKJ9EOF4w9oXVBe5MQcxy6nb8PCuEigVmX4ldLOmipdNAaqZSZGtQDUvkmuMM8EJq6tmPcWekupZgj1VHWySl490lbeaGWxMBuZDtncDoSpLfeJZCtui6eCg8z4ZHezhxq0dYAmKYg7BuqVdXm3DKUQEaFyu%2F9vquGx88%2FAx3f1qEXJvs2yi0nonPdHlsLo3Ag%2B2s%2BjZq7bSQSbvjNQBTj6qPMUHszfuYTeH2LLkU0WDxXT2i5P8dIw2cGsmmv19hbJvw7joGp35S6Ik%2B5%2BU7%2FHy9Ybzzt5Ml%2FXk3MOb7h8oGOqUBduRjna7YUhekvmH%2F8wuyfkn7LuKF9UbwWvkKz%2BznibDZ8vprjE4a%2FoOjB7clshGZPg6iG2DB%2FLcfdIerYWRRQ1IvmIVSCZdEoCYkMea8lsOQxSucJ4s6jXDkkBUN2Kggl%2B%2FqqaxNxNEDqLeIm4bK5imY6hIaeRRfhYFYZ%2BvUpaIH8TwbKBemF3NZsWUO5o6CRlxNCAUE%2B9f5NOinnPCHvrUj1Cz9&X-Amz-Signature=720470f34e5c0ee7ab1d68ef68df8a02ed29bf268323a16ffc93e7bc9a506242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI3YGMSG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9d%2BF6zkgjHcoYSnRQ9ZZ4RBabOHrWNn7oqBWzEXjj%2FAiEAz6ACejrlIVOPg6mXBR2QnDdms7V%2FAJvNUSAmuTs5hAkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPZGx%2FPyUswVsb6rFyrcAyhaphWn74yknM2rTQdKsDBSmjNIXHJ1TAM3nEelnOnYzE3w0oXR9wICksdM2uI9RpBbKtF6Q69Zhoz3HBx9JQsx1QBVV4JnVr%2FiybKAmpFIUVHD9rKNn7k1nru9lLx3J%2BH0gdNOoA8vE%2F1%2BBBKOqtpyv3IBwtY639DgPgq3GDICHl3vZPYgjh8O9Aj212eZIRkzJB72tbu01%2BD4LugdC0v3eNaZIsgv6ff1bt77%2FEy9%2BQlt3GF7q89qXx4F8G4qGjDl9fem5Bo5BWlITRmAl0ZAPdr1b%2Flh22QVqWaVfJWY%2B61lGJWa1liMOBglswpWJ%2B0GLHlVrrSxqQP8X8tDOx%2FoKJ9EOF4w9oXVBe5MQcxy6nb8PCuEigVmX4ldLOmipdNAaqZSZGtQDUvkmuMM8EJq6tmPcWekupZgj1VHWySl490lbeaGWxMBuZDtncDoSpLfeJZCtui6eCg8z4ZHezhxq0dYAmKYg7BuqVdXm3DKUQEaFyu%2F9vquGx88%2FAx3f1qEXJvs2yi0nonPdHlsLo3Ag%2B2s%2BjZq7bSQSbvjNQBTj6qPMUHszfuYTeH2LLkU0WDxXT2i5P8dIw2cGsmmv19hbJvw7joGp35S6Ik%2B5%2BU7%2FHy9Ybzzt5Ml%2FXk3MOb7h8oGOqUBduRjna7YUhekvmH%2F8wuyfkn7LuKF9UbwWvkKz%2BznibDZ8vprjE4a%2FoOjB7clshGZPg6iG2DB%2FLcfdIerYWRRQ1IvmIVSCZdEoCYkMea8lsOQxSucJ4s6jXDkkBUN2Kggl%2B%2FqqaxNxNEDqLeIm4bK5imY6hIaeRRfhYFYZ%2BvUpaIH8TwbKBemF3NZsWUO5o6CRlxNCAUE%2B9f5NOinnPCHvrUj1Cz9&X-Amz-Signature=7c0c635f8d6585731c0832bb5e8e1baa1781977c808174f94fa408db11471aba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

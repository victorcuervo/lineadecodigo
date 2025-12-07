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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWQHFJEF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsvUmUTEdF9BLj6IYmsfm0WgRDO6uKYJTFe5NpJgv2qAiBx7ZUTUZdlHQqRfg7NMDCdkdHWcp6%2BfRbRVtyY48HNCCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhBGtAXQ8Tw6y0Q0tKtwD6NCclCblrt720Y6%2FDQQ%2BYbWblSBUnnKbz91t6KUjZeomOXWlh0TN3OrIRizm1PVvCBMBYC%2FWKRvFAxmMzYFyOgar5dy1bWBwtwsKd0Nsrj5SKwv2kG2Kfarm3%2FUKgfIJjQTCUNrEBHoI1uAHVStYdnrd3g28VZE5rR3edalcAi%2FLKVsKEZBJm8%2BQWzWBUVwhxZ%2BvKkH6V0t5pi6zqiUxkqrDddsLFEKqmKMsxZ49unC2C55vFYDlweuGg9ocFi8LIBHvTW%2FsgPO4qsMavX1kHmNZm2OGLdK8wI9YoubLtHZ8kawHXRAiDdFkJYymR6Jbn3OAgh7lEreWJZPGAugzM%2Fs3v7nFTY2oDJj8jEceROjMy%2B4hEAJvlQxIaJlubufqKGtQcWrbPuC8dAY%2FlBtYl1DZFFAc%2Ft%2Bn%2B%2BKQZUjuqiMJMll9uRT9pbm%2BFFDU6kXT%2BADTrP88Hx1Z6%2FH9I%2Bsh0wZ6p%2Foo4xdgU8a2voCuVJmclz%2FZnKRw7IBaUsU0vulTqQICz1pxmQ4VyMcYlyAStySN5dN3A3qP2qCyIaTw28y9aMC8UFgzGuhN7pjhNKs8%2BY4myyKmwYHpgE1T8LwqyChkyeo5fBijMfuWvs40R7gm7AknZQHVWthj3KEws7vWyQY6pgG5e%2BnyChwepNXEfYy5C9qbMDTl1PyBYESJgfBiXpkKuWx5qQRs55YDeVjRddGjSPxNXfWLYb8ZHINciXwQ85wR6ZdCHjytdu8y%2FledbuUgsper4Y2kVh48oH8hp6n3LXNGt7nbUV4%2BUwFpgHJetTRZFv4SBS%2FGtY85MGBOOPeZoWQZk7ErUgjat8hfxPFvk3c0zoJZ2VsK7ZPbPXpHT%2BhDfgiUWWAi&X-Amz-Signature=9cd9ef5312446c5a5a1ac041da570060c6aa5694e8e7237da6a832b79c9a2f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWQHFJEF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsvUmUTEdF9BLj6IYmsfm0WgRDO6uKYJTFe5NpJgv2qAiBx7ZUTUZdlHQqRfg7NMDCdkdHWcp6%2BfRbRVtyY48HNCCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhBGtAXQ8Tw6y0Q0tKtwD6NCclCblrt720Y6%2FDQQ%2BYbWblSBUnnKbz91t6KUjZeomOXWlh0TN3OrIRizm1PVvCBMBYC%2FWKRvFAxmMzYFyOgar5dy1bWBwtwsKd0Nsrj5SKwv2kG2Kfarm3%2FUKgfIJjQTCUNrEBHoI1uAHVStYdnrd3g28VZE5rR3edalcAi%2FLKVsKEZBJm8%2BQWzWBUVwhxZ%2BvKkH6V0t5pi6zqiUxkqrDddsLFEKqmKMsxZ49unC2C55vFYDlweuGg9ocFi8LIBHvTW%2FsgPO4qsMavX1kHmNZm2OGLdK8wI9YoubLtHZ8kawHXRAiDdFkJYymR6Jbn3OAgh7lEreWJZPGAugzM%2Fs3v7nFTY2oDJj8jEceROjMy%2B4hEAJvlQxIaJlubufqKGtQcWrbPuC8dAY%2FlBtYl1DZFFAc%2Ft%2Bn%2B%2BKQZUjuqiMJMll9uRT9pbm%2BFFDU6kXT%2BADTrP88Hx1Z6%2FH9I%2Bsh0wZ6p%2Foo4xdgU8a2voCuVJmclz%2FZnKRw7IBaUsU0vulTqQICz1pxmQ4VyMcYlyAStySN5dN3A3qP2qCyIaTw28y9aMC8UFgzGuhN7pjhNKs8%2BY4myyKmwYHpgE1T8LwqyChkyeo5fBijMfuWvs40R7gm7AknZQHVWthj3KEws7vWyQY6pgG5e%2BnyChwepNXEfYy5C9qbMDTl1PyBYESJgfBiXpkKuWx5qQRs55YDeVjRddGjSPxNXfWLYb8ZHINciXwQ85wR6ZdCHjytdu8y%2FledbuUgsper4Y2kVh48oH8hp6n3LXNGt7nbUV4%2BUwFpgHJetTRZFv4SBS%2FGtY85MGBOOPeZoWQZk7ErUgjat8hfxPFvk3c0zoJZ2VsK7ZPbPXpHT%2BhDfgiUWWAi&X-Amz-Signature=14ba47b375c9b695a6c495d2fbb23d382a3df63bee64b95c0a9123e2d6edbed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

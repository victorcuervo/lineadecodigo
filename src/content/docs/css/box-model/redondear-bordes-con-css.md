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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSK2PEQB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvh4%2FdjQvIJa1q6QdqBbaWtbEXyg0DDXcdPWgIR%2BFN4AiAbs7fTAlKmrDe%2B0OmwkMgrsqB91SZeTj6wlQZOOE3HBir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMmp5jADkwdza7ee4%2BKtwDB4YGJJBXGPNiwdYQ3LhRqySTdkHZuSzY%2BcVSKL%2F%2BmAgoMy1bkOBvqqZbtYWhAHqOxhg%2B%2FqrQ8HxIzuSsZtUqjWJ%2F1iwsWBc1CU4gQy3nKcG0bBOelcBY7yBzBwXWQ7qobA4aV5tqpgS%2FfHe72gQ90%2Bp3vklmCyBVyK6%2FUSym5vT5d1K4%2FSnZ38J8l7U1RlQHL33UrgQ1eto2l0b%2BVuTwpli2At3uzg9f1Dduon0YpjQsACpMOUhRLCxB4CAShs9hbIZbKnojuILWJg7Bm1c6BXJxPtJEdLWRnN%2FD9l7glnSijY17rzYw7ePa8LkwC4NPDeycwMH%2BUCqe093bSD78WLdavvPQ5SNi%2FGc1tL8GFF7juHQphC7%2FOZgsZy1M6Ls8BRfKVvi3Bton8swtLjX%2F%2FSPooqgU26kzYkpe3WWCS1Pni5nVllwMX5OhB8Cr934N%2BAK%2FUdmhRtkMNeOTCtTVpf80cgo6rch6sNhPPxt6uxYUK1zaltpTT%2BjSG%2FUT3iV61jY0z1RGQ8kHpI6w5ipXMiU0wNsNgVhYWH7Bex6wjEe0QrtCkyjfFBFw7efUGLHvyVuO9rBh62xiJOrI9h4b6DeWMd1J1wcDy1hroqxqsgegBvSs%2BuU33sR2H0ow7e%2BJygY6pgH4xzsWdd%2BYStbaZLEmwIVyW709MpQk1%2F5Peu4NzpeuTw%2F7xom9l4gtHf1H1XsLfubE1eFwAPrPHvvlN1FNIFb6GlkRqtbvF4z0CR7fPucaMi5cCbZwsHVviW7%2FkXa4s7XxYF239Ar3LkeEUgO9gD%2F7BTlVS7pb0BouFfMzFNJIEXK4aVe%2FkcnQJNOaLMXSspueVQpknBEq7m%2F%2Bw1dUoNU8NdBKA0Vd&X-Amz-Signature=77744e37860fbb365389943cf3a25391aac15be3d3fc6935da6a3d12871eb17a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSK2PEQB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvh4%2FdjQvIJa1q6QdqBbaWtbEXyg0DDXcdPWgIR%2BFN4AiAbs7fTAlKmrDe%2B0OmwkMgrsqB91SZeTj6wlQZOOE3HBir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMmp5jADkwdza7ee4%2BKtwDB4YGJJBXGPNiwdYQ3LhRqySTdkHZuSzY%2BcVSKL%2F%2BmAgoMy1bkOBvqqZbtYWhAHqOxhg%2B%2FqrQ8HxIzuSsZtUqjWJ%2F1iwsWBc1CU4gQy3nKcG0bBOelcBY7yBzBwXWQ7qobA4aV5tqpgS%2FfHe72gQ90%2Bp3vklmCyBVyK6%2FUSym5vT5d1K4%2FSnZ38J8l7U1RlQHL33UrgQ1eto2l0b%2BVuTwpli2At3uzg9f1Dduon0YpjQsACpMOUhRLCxB4CAShs9hbIZbKnojuILWJg7Bm1c6BXJxPtJEdLWRnN%2FD9l7glnSijY17rzYw7ePa8LkwC4NPDeycwMH%2BUCqe093bSD78WLdavvPQ5SNi%2FGc1tL8GFF7juHQphC7%2FOZgsZy1M6Ls8BRfKVvi3Bton8swtLjX%2F%2FSPooqgU26kzYkpe3WWCS1Pni5nVllwMX5OhB8Cr934N%2BAK%2FUdmhRtkMNeOTCtTVpf80cgo6rch6sNhPPxt6uxYUK1zaltpTT%2BjSG%2FUT3iV61jY0z1RGQ8kHpI6w5ipXMiU0wNsNgVhYWH7Bex6wjEe0QrtCkyjfFBFw7efUGLHvyVuO9rBh62xiJOrI9h4b6DeWMd1J1wcDy1hroqxqsgegBvSs%2BuU33sR2H0ow7e%2BJygY6pgH4xzsWdd%2BYStbaZLEmwIVyW709MpQk1%2F5Peu4NzpeuTw%2F7xom9l4gtHf1H1XsLfubE1eFwAPrPHvvlN1FNIFb6GlkRqtbvF4z0CR7fPucaMi5cCbZwsHVviW7%2FkXa4s7XxYF239Ar3LkeEUgO9gD%2F7BTlVS7pb0BouFfMzFNJIEXK4aVe%2FkcnQJNOaLMXSspueVQpknBEq7m%2F%2Bw1dUoNU8NdBKA0Vd&X-Amz-Signature=6d340d9ab8a6856a148c510ed83dda8b1a2e3f0ace72258643ad1fd2d5cf6a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

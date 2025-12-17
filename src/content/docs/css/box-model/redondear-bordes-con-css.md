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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJMCAFQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDdhHO%2Bl15XUTA7LvnXSkFjmAdolnhyOqgc0FBEK69EAiEAnIU7Malo4H7lPZ3qfevvxRH%2FuFFfuQAq3G6%2FdHKimo8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDHKbKaAPusKDkPkb9yrcAwEvNzcuN%2FycfYybRZJuq%2BnjMtH1dAMVMaLXwqwGMTd3AKkxfRQKasEUZiCRqHnSS13tH33ZuT2MAbNB5DNK97hdtueLDDGzQaD5xPvtcgJ8Np%2FA2j2P1JZY0fxXH06B3k2EgKHpCjgfzE7%2FTJzOZ%2Bs6CNJhJodwYg%2FduIgLQhU9VeZj6JxXUtQs%2BxI2PuVU4l3hkrDpZReWgHhYOJuEb1qGP58K%2BVP6qPf%2BdkCMu3h5eNINHjAnaNF5NIc5IT4FZRceoZus2wy3LmTbZth99C6DPLxzcu%2BVxQC0rfmhC5W0anH%2B9dkPXfIZtl3Yty%2BP3rKpmDzM6ZgPKP%2Bs%2BVtyQ0jLgl4SJY1As2pA067AMZKHpbiMroILwzbiFo7uI5eVEdEPwT5f5OrQX6sjwtKZY4iErgLO65WmMsDsqrNGtSKjVqUAHTCnKcyo%2Fpcx%2FDWyYic85dUiiD6XS5LREzhl9RH3LSOzfgE6dVz%2Bm%2BB2QQxTbYXOUl7bpU%2FGB7Z6DVHYYGWSlGPvboRixXHmoQxupqOmrUgaWaKi1mNhhsqLvbeK5tv%2Ban0UYGNsTjZ3llNfeXWSX7VylVWi58xQIPSVnmI549klM4fAg2QaKx5M1en4Sl8Qy8CBZCFZBiwkMLyyiMoGOqUByM0xwJlYK51VPHPXz%2B2dGwkR2110%2BruL6waJwyrC4gQo1T%2BLwiPdL4r0UdxVD%2B9iTShIWQO04W7N1lW2bSZIIBVX3xEPAIXJx1%2Bk2NOtbHCWTJ%2ByZ8%2Fuul063OMAreok%2FchA05IHdh8T4SfB8AEgzr99hKZ8ZewJu4w7R56nj8HHha8spejB9HX2Zbm%2BR46DhgGqlaJkIiWaknyyVEpOwmT6%2Broh&X-Amz-Signature=5cd81514474b897a969ded07d449daf7cc3ae9331c2e75fd74e217b21148a8ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJMCAFQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDdhHO%2Bl15XUTA7LvnXSkFjmAdolnhyOqgc0FBEK69EAiEAnIU7Malo4H7lPZ3qfevvxRH%2FuFFfuQAq3G6%2FdHKimo8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDHKbKaAPusKDkPkb9yrcAwEvNzcuN%2FycfYybRZJuq%2BnjMtH1dAMVMaLXwqwGMTd3AKkxfRQKasEUZiCRqHnSS13tH33ZuT2MAbNB5DNK97hdtueLDDGzQaD5xPvtcgJ8Np%2FA2j2P1JZY0fxXH06B3k2EgKHpCjgfzE7%2FTJzOZ%2Bs6CNJhJodwYg%2FduIgLQhU9VeZj6JxXUtQs%2BxI2PuVU4l3hkrDpZReWgHhYOJuEb1qGP58K%2BVP6qPf%2BdkCMu3h5eNINHjAnaNF5NIc5IT4FZRceoZus2wy3LmTbZth99C6DPLxzcu%2BVxQC0rfmhC5W0anH%2B9dkPXfIZtl3Yty%2BP3rKpmDzM6ZgPKP%2Bs%2BVtyQ0jLgl4SJY1As2pA067AMZKHpbiMroILwzbiFo7uI5eVEdEPwT5f5OrQX6sjwtKZY4iErgLO65WmMsDsqrNGtSKjVqUAHTCnKcyo%2Fpcx%2FDWyYic85dUiiD6XS5LREzhl9RH3LSOzfgE6dVz%2Bm%2BB2QQxTbYXOUl7bpU%2FGB7Z6DVHYYGWSlGPvboRixXHmoQxupqOmrUgaWaKi1mNhhsqLvbeK5tv%2Ban0UYGNsTjZ3llNfeXWSX7VylVWi58xQIPSVnmI549klM4fAg2QaKx5M1en4Sl8Qy8CBZCFZBiwkMLyyiMoGOqUByM0xwJlYK51VPHPXz%2B2dGwkR2110%2BruL6waJwyrC4gQo1T%2BLwiPdL4r0UdxVD%2B9iTShIWQO04W7N1lW2bSZIIBVX3xEPAIXJx1%2Bk2NOtbHCWTJ%2ByZ8%2Fuul063OMAreok%2FchA05IHdh8T4SfB8AEgzr99hKZ8ZewJu4w7R56nj8HHha8spejB9HX2Zbm%2BR46DhgGqlaJkIiWaknyyVEpOwmT6%2Broh&X-Amz-Signature=dddddc52684db2a9d58fd1597bbb3846a351a63a70fe47820cab0d8529ed76b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

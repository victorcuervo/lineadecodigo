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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W3JMTJH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAcSP2wz8IoFgcw1bMqkDFTx0YLVlAC7v9TY5eD%2BQu1AiEA0CfnKk1aZ5VE0z0LYFVextwsnFz%2Fk5pzWQQy2K8i7KQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFqAN%2FBNUjzVH2GAyrcA1DBWJX%2Fyc3fV6kb3NJXAmWa%2FD1KFvLTL1t4qrFaIgDoe9oq%2BkKKVBdm%2FvKi%2F1V7MbDoehaiS9Ya1T5j8voPax8rag8t9KM3Qagz3UMa0FLhGHiG3MDRxE7mZgbTHUsJdproEmDUKddz3bUQV1T91dbPK%2Fxx8WwpG5AX0NiTENUZGVCMDcCouMZ7RXquWnWvnrTClAeQldp3oQSlRT82489RWY9fMWY35SHz%2FvliTeaPPgAom9WlKUZPibyidQB3GCncwhodTDKZN1e%2Fu0uuC%2BCAHNpZf7TSU5cwS0yyx1H4fGalbmIPqCFtSskHgrSFiUuSjInDPM3kJaTSFE7MReNvTNJMIUQjwH2r6BZcr3hgBlXiwZb2xN970OZo7hzhY8MgNep3VmfiZe3Cyuhy3B9vrVfwkDRKH8b9QZoIVbshr7nRhOrdaVRSy24CnYBQQ8OmxV41Lmb0hghWw7FE3d0%2F7T4%2B%2BnZJ47PJUeDblBwO6l9h15xJy4wNyU%2Fu2YCLL75d2sRlaXHQK7RbcQDjDIWyPm2v6Hq7mKFKacSjgEHxUficz2n6LA1DnTwASbm9BjeuDmnTLTRLrHWaEYMeyrUFO4VIdhgI1s7kGRu3Lw6KVj%2BvKLcI3FHTyizDMMeZ1ckGOqUBnFz2K%2FYq255n4yh0j0CYSLgghtF7UaN8WXCAI3PUHKiP3%2Fu4QnOCzZ%2FDaIG40NH4qgIW5QefxwvJEnmhuhQ5Z1rxy5Rjs48m8tdME%2Fvao18UOSZYbTJHIJNH2FO5e5%2FmIGjTSF6OWqsidO%2FhwsNVKVf9klRjumXrZCfTjYbn8v2OxSSJslGfCnbM696Q4qHOjzTmX8iEG2ffXaiagFKlyuaQ3eFk&X-Amz-Signature=0d28e4bdf9aa479ca8864ea6ef2b65d4d1bd092b82aea1911f5673649465cb7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W3JMTJH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAcSP2wz8IoFgcw1bMqkDFTx0YLVlAC7v9TY5eD%2BQu1AiEA0CfnKk1aZ5VE0z0LYFVextwsnFz%2Fk5pzWQQy2K8i7KQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFqAN%2FBNUjzVH2GAyrcA1DBWJX%2Fyc3fV6kb3NJXAmWa%2FD1KFvLTL1t4qrFaIgDoe9oq%2BkKKVBdm%2FvKi%2F1V7MbDoehaiS9Ya1T5j8voPax8rag8t9KM3Qagz3UMa0FLhGHiG3MDRxE7mZgbTHUsJdproEmDUKddz3bUQV1T91dbPK%2Fxx8WwpG5AX0NiTENUZGVCMDcCouMZ7RXquWnWvnrTClAeQldp3oQSlRT82489RWY9fMWY35SHz%2FvliTeaPPgAom9WlKUZPibyidQB3GCncwhodTDKZN1e%2Fu0uuC%2BCAHNpZf7TSU5cwS0yyx1H4fGalbmIPqCFtSskHgrSFiUuSjInDPM3kJaTSFE7MReNvTNJMIUQjwH2r6BZcr3hgBlXiwZb2xN970OZo7hzhY8MgNep3VmfiZe3Cyuhy3B9vrVfwkDRKH8b9QZoIVbshr7nRhOrdaVRSy24CnYBQQ8OmxV41Lmb0hghWw7FE3d0%2F7T4%2B%2BnZJ47PJUeDblBwO6l9h15xJy4wNyU%2Fu2YCLL75d2sRlaXHQK7RbcQDjDIWyPm2v6Hq7mKFKacSjgEHxUficz2n6LA1DnTwASbm9BjeuDmnTLTRLrHWaEYMeyrUFO4VIdhgI1s7kGRu3Lw6KVj%2BvKLcI3FHTyizDMMeZ1ckGOqUBnFz2K%2FYq255n4yh0j0CYSLgghtF7UaN8WXCAI3PUHKiP3%2Fu4QnOCzZ%2FDaIG40NH4qgIW5QefxwvJEnmhuhQ5Z1rxy5Rjs48m8tdME%2Fvao18UOSZYbTJHIJNH2FO5e5%2FmIGjTSF6OWqsidO%2FhwsNVKVf9klRjumXrZCfTjYbn8v2OxSSJslGfCnbM696Q4qHOjzTmX8iEG2ffXaiagFKlyuaQ3eFk&X-Amz-Signature=dfc0d16ad8826ae776288f7b79122ff8174d175fb3cfd27539261ba6f82930e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

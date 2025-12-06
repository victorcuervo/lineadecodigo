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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JM3Y2Y4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ6f9S5iqWrNXoAYlJRATHmsbM%2BYeTqT9pdd9aQ0rvSAIgN7WL%2Fbr0pDWeNNslLd%2FMyB6DOKMnK0YQg4eZynxtwuEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAaYvR%2BM6VbNKXaIbCrcA8q%2B%2BIWsrYV%2F3x1jSpWEo1j6tgvA6Q6ZZTP54jgyyyptQGVr3uviXJAz8zE%2Fo87LXS7CV4Akxulgs3rpYenJ6UuVa3Hn2t7vnzeeeyng1fkyL6CCR6wjMM3Bvvurll8nU6PMzdM6rye8LCIK3csBi3bZpS5hAN41kZakiIlWFEP9gOBRVPfnmVEtBinwSKBg4TNnLsRT7FptPgF2spja23EEIBDqbG9i7I2qT%2FmFUqxycrhjmZxNRny%2Brifn8Pj9pnS54KXvdSXMgproHDuKtouCZg7NUewy2vRMChY3tv1l5j8jdP0mw0ZC5jPQi7nLjZIS4Y0y6%2BgQUW4i3eNfOFHSF4ueDZX%2FOLaombGTrPPOmkLHlgtYPj9atI9hZ%2B%2BOAQjebnLfBABZjNcAH%2B7RZICK6rsudJXVNsfugmVar9LM8ykdDEhWffuLVD5E%2BwSJXGPQLpFCbBneoKQAEDfF7m7SIAsIC30fTcMw06ACnMrXcoWJ7Wj3RtujtwlN9a6JDGM2P38gdo%2BBKVpjjmKkYNvjqf80s8AYWSW6NlpSpSmWSTt%2B1BmedHt0KNV1AKvIOjb5R1%2Bo9%2Fp29lImM5IhbC3kmoSoBHugOL0QHRGlKHlAL0ZorNy83OVNbwBiMJXH0ckGOqUBOYsPOrMGE5tgkjgnmbagpf0%2BjpkPFce2b5sUTGxdKCDCaq3UNfnv0UCr2YSb5saRHfI8o%2FA0mjNlOIi%2BsSlBQxfsfYNnA9EtyChJBD0OIymNZBG7HgWO5ZW%2F6EjvXvAW4aA%2FWeHR8O4KbGlQIHfRQchy9o1G8U63N5blOx2l%2FeBb0wp20OXrasywdrHM5FkUGAhVBpoALqqKM8Fr5LHb4B%2FLVvvf&X-Amz-Signature=35b5fabcd00f6618a6845e76ab4a53f643c2c093c30c7747ea4e2936af057273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JM3Y2Y4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ6f9S5iqWrNXoAYlJRATHmsbM%2BYeTqT9pdd9aQ0rvSAIgN7WL%2Fbr0pDWeNNslLd%2FMyB6DOKMnK0YQg4eZynxtwuEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAaYvR%2BM6VbNKXaIbCrcA8q%2B%2BIWsrYV%2F3x1jSpWEo1j6tgvA6Q6ZZTP54jgyyyptQGVr3uviXJAz8zE%2Fo87LXS7CV4Akxulgs3rpYenJ6UuVa3Hn2t7vnzeeeyng1fkyL6CCR6wjMM3Bvvurll8nU6PMzdM6rye8LCIK3csBi3bZpS5hAN41kZakiIlWFEP9gOBRVPfnmVEtBinwSKBg4TNnLsRT7FptPgF2spja23EEIBDqbG9i7I2qT%2FmFUqxycrhjmZxNRny%2Brifn8Pj9pnS54KXvdSXMgproHDuKtouCZg7NUewy2vRMChY3tv1l5j8jdP0mw0ZC5jPQi7nLjZIS4Y0y6%2BgQUW4i3eNfOFHSF4ueDZX%2FOLaombGTrPPOmkLHlgtYPj9atI9hZ%2B%2BOAQjebnLfBABZjNcAH%2B7RZICK6rsudJXVNsfugmVar9LM8ykdDEhWffuLVD5E%2BwSJXGPQLpFCbBneoKQAEDfF7m7SIAsIC30fTcMw06ACnMrXcoWJ7Wj3RtujtwlN9a6JDGM2P38gdo%2BBKVpjjmKkYNvjqf80s8AYWSW6NlpSpSmWSTt%2B1BmedHt0KNV1AKvIOjb5R1%2Bo9%2Fp29lImM5IhbC3kmoSoBHugOL0QHRGlKHlAL0ZorNy83OVNbwBiMJXH0ckGOqUBOYsPOrMGE5tgkjgnmbagpf0%2BjpkPFce2b5sUTGxdKCDCaq3UNfnv0UCr2YSb5saRHfI8o%2FA0mjNlOIi%2BsSlBQxfsfYNnA9EtyChJBD0OIymNZBG7HgWO5ZW%2F6EjvXvAW4aA%2FWeHR8O4KbGlQIHfRQchy9o1G8U63N5blOx2l%2FeBb0wp20OXrasywdrHM5FkUGAhVBpoALqqKM8Fr5LHb4B%2FLVvvf&X-Amz-Signature=a02a412081ceca72a71dc5ba9623f742cd03dc7b7532b2c34eed80b3e40f2013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

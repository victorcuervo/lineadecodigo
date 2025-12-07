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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636KENJ5Z%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrV3dO%2B2Rb68M%2B5K4WAiFUZI3DYX8DpgzdlyE26H8GPwIgSMWOwtxDJGwHJyoslHV1AVlj41JaSYmUGqxTpCUccvsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpsPCQQEAZTLVz%2FrSrcA8PTXrEcnS62n5UmJ7bJ89UIVrut03RA0zcbuKS2UhDl9WdshtB07VZbbD2Pxox3Il%2BdfVCFskJVZieDgijGXXCQDIsuBJTwHvEL1KmhD3aBAaURnYqAJQf31y5XlitVNEkeKqgfN9rBFY94MQS%2FntLja43HGNja1wos7zoydZYMREFi3WzRYLYodqWIWqNbg12btyzoWV0GIk%2BxTJ6vF5%2FPrZrRu49ZjUlg8HI3Qf6zwEJC5knrFQQVVyTHE0hXNymYY23EIkP6kOyNBxPad99GfFmlTBZV2BWZ5C%2FVl1RG%2Bq64NNVKMghM74dB6SZ%2F60HfHOqUVePRx%2FXVzxJbzOmmWLX0EFftbGTt8sVjip6oOaNNMRRGcXzYWiD2oFy%2FH5uXWY%2F6gqkwV%2BgUY5yJVO849WyHD%2F95vbv2cgpNIP6e5GQCsy2hhWNWKI1vvvoyS36VP3z4vM5Mv044qf7E%2FmR99kz6jMYvxO%2FIS3vU%2FBfwICmY1SHg0Y3jJjiNq5wX14DkFQZfGgeQPw97UDR9ykcjovWYkYPdQVk1k50WPk7cvoUQ1EMGK1cnU0Sf1nrvNBJjgva9jUDsNcuy58%2Bco9rW9XQ6d6x9%2BMgLb0zWz0VjtzTE1BNj3kiguVbmMKH90skGOqUBVEP8BdiBOj%2F6ufQuFXN6N0jqeDnlsj%2FclMB7ryObNzYrkDgGNxWVlsGtWzhMM2UU8rcSz30q38TFE3Whg%2F7NJpIYuYPV8PvMbJLsSLAmoL0WxG5Zq7gGQeDATKMJkz4oRXuNsEZUK4zm5%2Bg%2BUgcClbCz20zLS56IxYO2cYYtQAuAkF1hoKZw0QDKjJbr16VdpgQjU26F5EjtUniGj2IF5SoOjs3T&X-Amz-Signature=5b97941857584b887dc054a52297a009eb19a371356833269f40a851239bceea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636KENJ5Z%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrV3dO%2B2Rb68M%2B5K4WAiFUZI3DYX8DpgzdlyE26H8GPwIgSMWOwtxDJGwHJyoslHV1AVlj41JaSYmUGqxTpCUccvsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpsPCQQEAZTLVz%2FrSrcA8PTXrEcnS62n5UmJ7bJ89UIVrut03RA0zcbuKS2UhDl9WdshtB07VZbbD2Pxox3Il%2BdfVCFskJVZieDgijGXXCQDIsuBJTwHvEL1KmhD3aBAaURnYqAJQf31y5XlitVNEkeKqgfN9rBFY94MQS%2FntLja43HGNja1wos7zoydZYMREFi3WzRYLYodqWIWqNbg12btyzoWV0GIk%2BxTJ6vF5%2FPrZrRu49ZjUlg8HI3Qf6zwEJC5knrFQQVVyTHE0hXNymYY23EIkP6kOyNBxPad99GfFmlTBZV2BWZ5C%2FVl1RG%2Bq64NNVKMghM74dB6SZ%2F60HfHOqUVePRx%2FXVzxJbzOmmWLX0EFftbGTt8sVjip6oOaNNMRRGcXzYWiD2oFy%2FH5uXWY%2F6gqkwV%2BgUY5yJVO849WyHD%2F95vbv2cgpNIP6e5GQCsy2hhWNWKI1vvvoyS36VP3z4vM5Mv044qf7E%2FmR99kz6jMYvxO%2FIS3vU%2FBfwICmY1SHg0Y3jJjiNq5wX14DkFQZfGgeQPw97UDR9ykcjovWYkYPdQVk1k50WPk7cvoUQ1EMGK1cnU0Sf1nrvNBJjgva9jUDsNcuy58%2Bco9rW9XQ6d6x9%2BMgLb0zWz0VjtzTE1BNj3kiguVbmMKH90skGOqUBVEP8BdiBOj%2F6ufQuFXN6N0jqeDnlsj%2FclMB7ryObNzYrkDgGNxWVlsGtWzhMM2UU8rcSz30q38TFE3Whg%2F7NJpIYuYPV8PvMbJLsSLAmoL0WxG5Zq7gGQeDATKMJkz4oRXuNsEZUK4zm5%2Bg%2BUgcClbCz20zLS56IxYO2cYYtQAuAkF1hoKZw0QDKjJbr16VdpgQjU26F5EjtUniGj2IF5SoOjs3T&X-Amz-Signature=b34da375784889c34e896bf86181119940f3e7f7f74d75ef737aa6e171a6ed04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

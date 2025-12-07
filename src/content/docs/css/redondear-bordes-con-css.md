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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AFMUSO7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQ1TtHIw34SoRTszFOM6rVeh155RlhrtLcdhxVyFBnjAiBU5BjUBDIBi3FjkKy6MHaKLaB7%2FBpA7B4UwTv74pI69iqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYc8HNuCUVFReOhGQKtwDjL1Gp3EFei64EIF5nMruQUBYh4F%2FICG0mzIRCcTvwCSutX0jVzy%2BUxNidZs1vTnwPk8mB0HkpaPEfJ0dzO5Pf%2FdTNbwLimTSceSN7wp%2Bw5Wpbof0e2yHTW%2BqH2E6ONIQgrT5mHZFuB5sUqXK3JJkzNIVUKBev1ENcopxmQsb4T9XnW0Vv57X7225DPyhd1lusk82YHJ0nupLBJdXK61Ps3%2FaI9kxPzF91XfWyoVNHHxTz4NPHWmkaAda51ekxL%2BKZVjfVUAGyrSUmtoAVAOGX0K9plR3BMoQkzgaGvIm81ATd0I0TvPNS8mMhaam3f4zWQsoFhWNjKh1tM5yVX3QbMRlat7mp6liF%2FQKTbvkXVqHfb%2FsPmTpkceO5MjpNIi%2Bw%2B6PpGk92%2F7qt6SqZWoNAB4y6hmh0NWy4AApkvF%2Bs9tBpsvZgM4KRbHX4FH2P4QDM8lbBbYQfgqPqNEi1Fwnc9o5NeX1%2FyI4BkHDmIR1ix%2BXwmg6IsgusjFH%2Fq2KRJqtWqtuytioxZaCi52boLJFqyCO6DjLdGCpTEOE%2Fp0JX3zSaha2jqGgYd4GB5Gi3jJdCpr0OQvFiouy4IwidHejLySJFk1x%2Bz93XW7vNm9qTQGDofsgqFmpoMTnDDow7aPUyQY6pgE4McUM5oiw64PwGi5eoCxyeZ0ON9KebNnUJKzsXN%2FeyOS6KBm11OUKMSxiJM6SMXvppqkWLvUPE9VbQCc%2B5Aldl%2BoA8JrW2%2FHNgEQU%2BTc3CVi8hWp83iDCb0VAfjZugonawZoqxo4l2QyfIzVzHY%2Fj3qGaxjKaHS%2F%2B32ARQQd5Hywn1TAr%2BKYcB49kPrfPZ9fd3e6hkpF1HIPZ%2Bv529p7aOil7oRZW&X-Amz-Signature=55ef57c92ca9b65e7b5159108d91688f931adb92945787ca64a2a0bca5b4b3af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AFMUSO7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQ1TtHIw34SoRTszFOM6rVeh155RlhrtLcdhxVyFBnjAiBU5BjUBDIBi3FjkKy6MHaKLaB7%2FBpA7B4UwTv74pI69iqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYc8HNuCUVFReOhGQKtwDjL1Gp3EFei64EIF5nMruQUBYh4F%2FICG0mzIRCcTvwCSutX0jVzy%2BUxNidZs1vTnwPk8mB0HkpaPEfJ0dzO5Pf%2FdTNbwLimTSceSN7wp%2Bw5Wpbof0e2yHTW%2BqH2E6ONIQgrT5mHZFuB5sUqXK3JJkzNIVUKBev1ENcopxmQsb4T9XnW0Vv57X7225DPyhd1lusk82YHJ0nupLBJdXK61Ps3%2FaI9kxPzF91XfWyoVNHHxTz4NPHWmkaAda51ekxL%2BKZVjfVUAGyrSUmtoAVAOGX0K9plR3BMoQkzgaGvIm81ATd0I0TvPNS8mMhaam3f4zWQsoFhWNjKh1tM5yVX3QbMRlat7mp6liF%2FQKTbvkXVqHfb%2FsPmTpkceO5MjpNIi%2Bw%2B6PpGk92%2F7qt6SqZWoNAB4y6hmh0NWy4AApkvF%2Bs9tBpsvZgM4KRbHX4FH2P4QDM8lbBbYQfgqPqNEi1Fwnc9o5NeX1%2FyI4BkHDmIR1ix%2BXwmg6IsgusjFH%2Fq2KRJqtWqtuytioxZaCi52boLJFqyCO6DjLdGCpTEOE%2Fp0JX3zSaha2jqGgYd4GB5Gi3jJdCpr0OQvFiouy4IwidHejLySJFk1x%2Bz93XW7vNm9qTQGDofsgqFmpoMTnDDow7aPUyQY6pgE4McUM5oiw64PwGi5eoCxyeZ0ON9KebNnUJKzsXN%2FeyOS6KBm11OUKMSxiJM6SMXvppqkWLvUPE9VbQCc%2B5Aldl%2BoA8JrW2%2FHNgEQU%2BTc3CVi8hWp83iDCb0VAfjZugonawZoqxo4l2QyfIzVzHY%2Fj3qGaxjKaHS%2F%2B32ARQQd5Hywn1TAr%2BKYcB49kPrfPZ9fd3e6hkpF1HIPZ%2Bv529p7aOil7oRZW&X-Amz-Signature=052df9f4e27c1c4f550ebceda4951d5c139b96f5b711a13b6ba3850d1aa9a69a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

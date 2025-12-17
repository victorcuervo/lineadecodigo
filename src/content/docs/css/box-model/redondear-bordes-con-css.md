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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVBZR3Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe6LjR8g1HRxRO%2FQ2P9TfhP6DlYlBS3sTO%2FP6tL883FAIhAJMlNVYrUKeC1lvtfSqoF4kfL%2BA8Oph2lPEvx%2FNqtMd8Kv8DCHIQABoMNjM3NDIzMTgzODA1IgxTkY%2Fy%2Fow8FjrfqY8q3AO9z3oYQKPCEQzx56dCgJi0i7H8QwOusdbZbI0xv81H3o5Y%2F%2BtFyqjF1XUjv5VDrh0LjoNBFiNngQsl0GAY506%2FRf5uXVdiy6UoTLxX8Y1a430qx9gClnxW%2FhOMCpl%2FOBelvMAHHx36qeTeegdF4G4P8259mxFW7IYcXdy8DLk1HLCoFs3QH%2Fp5JWxyvVjhS%2BN5CXkjtYAVGdp8Uf8rd4Tt9MZMC8PO8o4u1F%2FmfMm1xRuSfUH4EPciu3Tz2jg5gKFcjTMUNAggWM6taR8YXfs1sdI%2BBoZpdnU6UKt3g6J5HyI%2Bc5m%2FXfjHGRcVYpxT4nsig1KWCiMfwqLl%2BRPZnLfZTTTNS7f8pzIPwwYNlqZC6t0ffhm%2B6%2BPgReTuf1GHbeKX2v5pJwg0VJ3E1pXiMkOhRCKcqgD6PryR6MaZtZYrscVA1tTuouM3Ap7wAv%2F%2BHxxLAPelXZAT2XPvulVQpSgqix0q4KQTIXcRp6caCT%2FP76GJTOkkC6TOxa1ZQaLyh0be3OT6ETL3qxbFjBfLen7nsfPIdQ%2F2cxCRyIt1d7q%2B6jWWdJnDfppAsV10Knu1O6QPwCy%2B0pz0mcZSTceZvg7x%2BWfvY5FZodhYNtL7ANtybLP%2BwpNrslt7%2BrTKCDC2%2BofKBjqkAab8zzTXcYsnWqh5bmp00Nz2TOzQ06qxLPaMcfSFBv%2F5xOuDvDHScSbAOj7xTjFslQYxTTzwcrw%2F%2FvWuDhqIbp1YakNJx%2BVKJbjF9DjAYZNb2BToLpH8vLHXnSgDdX2wgi%2Bc%2BVUE33ojSMnKs9r4AeS1f%2FGwUxZqbd6H6tdtSAZLfYkQ3HrF7Ftipa0I8WH3YqLU1rtG48FNjozNiOnSL71V5wE8&X-Amz-Signature=d22a3d94baacc568e473e28a3bee15a614894da4cc716b72865c326adf8e0fd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVBZR3Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe6LjR8g1HRxRO%2FQ2P9TfhP6DlYlBS3sTO%2FP6tL883FAIhAJMlNVYrUKeC1lvtfSqoF4kfL%2BA8Oph2lPEvx%2FNqtMd8Kv8DCHIQABoMNjM3NDIzMTgzODA1IgxTkY%2Fy%2Fow8FjrfqY8q3AO9z3oYQKPCEQzx56dCgJi0i7H8QwOusdbZbI0xv81H3o5Y%2F%2BtFyqjF1XUjv5VDrh0LjoNBFiNngQsl0GAY506%2FRf5uXVdiy6UoTLxX8Y1a430qx9gClnxW%2FhOMCpl%2FOBelvMAHHx36qeTeegdF4G4P8259mxFW7IYcXdy8DLk1HLCoFs3QH%2Fp5JWxyvVjhS%2BN5CXkjtYAVGdp8Uf8rd4Tt9MZMC8PO8o4u1F%2FmfMm1xRuSfUH4EPciu3Tz2jg5gKFcjTMUNAggWM6taR8YXfs1sdI%2BBoZpdnU6UKt3g6J5HyI%2Bc5m%2FXfjHGRcVYpxT4nsig1KWCiMfwqLl%2BRPZnLfZTTTNS7f8pzIPwwYNlqZC6t0ffhm%2B6%2BPgReTuf1GHbeKX2v5pJwg0VJ3E1pXiMkOhRCKcqgD6PryR6MaZtZYrscVA1tTuouM3Ap7wAv%2F%2BHxxLAPelXZAT2XPvulVQpSgqix0q4KQTIXcRp6caCT%2FP76GJTOkkC6TOxa1ZQaLyh0be3OT6ETL3qxbFjBfLen7nsfPIdQ%2F2cxCRyIt1d7q%2B6jWWdJnDfppAsV10Knu1O6QPwCy%2B0pz0mcZSTceZvg7x%2BWfvY5FZodhYNtL7ANtybLP%2BwpNrslt7%2BrTKCDC2%2BofKBjqkAab8zzTXcYsnWqh5bmp00Nz2TOzQ06qxLPaMcfSFBv%2F5xOuDvDHScSbAOj7xTjFslQYxTTzwcrw%2F%2FvWuDhqIbp1YakNJx%2BVKJbjF9DjAYZNb2BToLpH8vLHXnSgDdX2wgi%2Bc%2BVUE33ojSMnKs9r4AeS1f%2FGwUxZqbd6H6tdtSAZLfYkQ3HrF7Ftipa0I8WH3YqLU1rtG48FNjozNiOnSL71V5wE8&X-Amz-Signature=c378dd0d9a5af10cfc6b8c9bb0683f21efc8ccb8b45d620839c10846d1615e03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

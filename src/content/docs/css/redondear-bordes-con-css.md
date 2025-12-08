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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7KRBOAQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1gn2Es2OLuAWDjP6vU6YYCxrU4baYw0frqCe4S7cxqAiAl%2BKMe3UfNJcekszk1ohjDAUInppA8OGgtns46L1u%2BIyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV7bBfhkzIJSB%2FG%2BJKtwDqwtH4FuWKI7ctuftVn5uZmDM9q130Ctg1BHiSh9N3kPvstIXjWooYawmk9hxGLo0TfNj6yGDWb8%2BR3c%2BOsGPgzIPpVFhClsPLR22nKD6fwF%2FY0kb44nRB8pDdl0gRB%2BXhuKNUYJPMyaxvamiCGYdQdwAfkfEjS%2BWzqu5Asrtz0OvjHx8HwXkokApPriL3%2Bt20KCwsHQ3bVHqL4H%2FNUPy1qPolL386pekUewcCSqS9HfB2vws400xgZexGVwkmROW5CI792d%2FwwZDainuqnYJ21QS%2BlqBla3lUuIiML40b8FmcWzLUk35WrFKeVYAYgio%2Bif56JA4DovOrqfOrf61HEj45kzbNSiWtaUpP2v7I6ZmTt2butGGS63sNgjuyVmShyKLLD3UNkHsnA1yiGiVaWk703c6gmAta91Fdjg84%2FGVIkY%2FUJJ3jTicueOWRyC%2BQT%2Bm09S2asQnVgvtFVKyvU7MfAYy4yI8%2BA%2BTZniYL%2FPPHUPRNJP3RJMMkK30ETrddnZBaigaEI%2FcKVukKVEzSFU5ueBtovjyAdlBhuxZu7OKdHk9bh3yb1mRMIOiSjCXtqpgoDPyqzCAhVIHdRd0TaaRJbvzyQaOoKflZ9s09YLQ2buHC%2BxDRg918S8w4LTcyQY6pgFuKDjSMPAZGNztZe3BjPLueWiddMxbArAUKmVHQXCrJhnU19MFDt%2FTBi7H%2FOjIbglVnApYQ2I3llYXnIwX4up1%2FHKwdip3U5BV85wy0g%2BPJovCvIdlQv4u97CjwPChejlpAg3gZyeZjsQKBH1wstAO3YulZ9Gg8tjA50wQNPeETVZr%2B8sbO29xwLvJtpH0kxJnwClJaSz0jd5%2FYWJxcPJ5dhvmbTnS&X-Amz-Signature=c8a9659a091ab249a84f875485ae2f3ffeb06daaf5ca2698467dc2fd76d4df2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7KRBOAQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1gn2Es2OLuAWDjP6vU6YYCxrU4baYw0frqCe4S7cxqAiAl%2BKMe3UfNJcekszk1ohjDAUInppA8OGgtns46L1u%2BIyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV7bBfhkzIJSB%2FG%2BJKtwDqwtH4FuWKI7ctuftVn5uZmDM9q130Ctg1BHiSh9N3kPvstIXjWooYawmk9hxGLo0TfNj6yGDWb8%2BR3c%2BOsGPgzIPpVFhClsPLR22nKD6fwF%2FY0kb44nRB8pDdl0gRB%2BXhuKNUYJPMyaxvamiCGYdQdwAfkfEjS%2BWzqu5Asrtz0OvjHx8HwXkokApPriL3%2Bt20KCwsHQ3bVHqL4H%2FNUPy1qPolL386pekUewcCSqS9HfB2vws400xgZexGVwkmROW5CI792d%2FwwZDainuqnYJ21QS%2BlqBla3lUuIiML40b8FmcWzLUk35WrFKeVYAYgio%2Bif56JA4DovOrqfOrf61HEj45kzbNSiWtaUpP2v7I6ZmTt2butGGS63sNgjuyVmShyKLLD3UNkHsnA1yiGiVaWk703c6gmAta91Fdjg84%2FGVIkY%2FUJJ3jTicueOWRyC%2BQT%2Bm09S2asQnVgvtFVKyvU7MfAYy4yI8%2BA%2BTZniYL%2FPPHUPRNJP3RJMMkK30ETrddnZBaigaEI%2FcKVukKVEzSFU5ueBtovjyAdlBhuxZu7OKdHk9bh3yb1mRMIOiSjCXtqpgoDPyqzCAhVIHdRd0TaaRJbvzyQaOoKflZ9s09YLQ2buHC%2BxDRg918S8w4LTcyQY6pgFuKDjSMPAZGNztZe3BjPLueWiddMxbArAUKmVHQXCrJhnU19MFDt%2FTBi7H%2FOjIbglVnApYQ2I3llYXnIwX4up1%2FHKwdip3U5BV85wy0g%2BPJovCvIdlQv4u97CjwPChejlpAg3gZyeZjsQKBH1wstAO3YulZ9Gg8tjA50wQNPeETVZr%2B8sbO29xwLvJtpH0kxJnwClJaSz0jd5%2FYWJxcPJ5dhvmbTnS&X-Amz-Signature=7ce656861467f04365c3b3957fd785a2410a7f294f9f2a5f97feb16148b26af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

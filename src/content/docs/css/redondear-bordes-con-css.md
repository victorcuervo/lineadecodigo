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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE3ESQ7F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjsfil1EMNtrY%2FD9%2FAjlZPZ5GdZs%2Br43XidqQn64ZRQAiEAqGPL8qWKaR9TRMYkqpVKGUOZbEo9Z6uSW80sWmNtb9oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDB4gbBMCZTkEVA6mSSrcA5av2BvDwSeHKKevSgMwGBuJT6RBQv6S9AjJXloNIeDcuOPaNewq%2BCblerHb7Gmb6EP%2F6AM1oxMP99HH3ClBndG3i3taeyikraRXb8CNnH%2BB55UUf6vmvZO6sTJLT%2B9SbnfiOmr7W3NSUb1xF4T9xQGo4qSr8hFqBLZt7ooiCp8joKF8CqPrTm21HWJqjr84Nph9uThMVhIO50HpTVSEGdFU%2BKoN08Cq3BlPxmq5da9uUkli5p0UWWiXLXKoGHz%2BMS7YP6WhpUwR6B26f%2ByPQ7gaCtmaH9r9nek%2FlMvs3lGtIFqQmoF4eaoQKBDMy4PFveqsl7geJTNrDZV%2BHKqYnvNMsSgqjhhQErJIWrygjc22Fr9GZVHhDDqquu4X3C2MeAQPbSjwS2hfF7x4cLywWREAMatgGmx8YRq1lRmCARfjXiS%2BOEwhN%2F3q4OYCT7r75%2FxUgvX%2FzxA9Su8Ke33qbsUeJKvRCqNCDE3pduS%2B4b6PyUK3Y0tHSOw5K4BXvBvZCWxJyRhpuHuS8%2B2IGDwwmeXw6%2FbaUQ72YQCeORUqkJhpzQ2ieK%2FpCK3hd00uO7bpgnti2pYlhtjhe2nq6N7fMvqC7d5xx9BldXd3af0IcrvvP84edJtH%2Foxd0YumMP6m0MkGOqUBIBxbypo3Z5AIxaTaslb0gNF1z%2FL3CKJi3BjYF1iMcN7FsD4B7GB%2B7pGd4%2FrefRBi0lCdU8roePBQ8Kwu18i24UpaS3VJ3PD39H9eY%2FvDeCapoJtCTxXzbH8tAlJL4Zo1mum5hXfDaIzjp9AJ6fvEqB4F5iZ7HlYTlYCbleXd9BfArbfU6BnCp0eCEfUy5HrYVqbIieE1wrfV5WCrbKVqLofmbFUX&X-Amz-Signature=8c30e95f1aaf3c63b1b20d59165a6a9ed0ce6413d8d8bdeeaebb5cab79e75d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE3ESQ7F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjsfil1EMNtrY%2FD9%2FAjlZPZ5GdZs%2Br43XidqQn64ZRQAiEAqGPL8qWKaR9TRMYkqpVKGUOZbEo9Z6uSW80sWmNtb9oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDB4gbBMCZTkEVA6mSSrcA5av2BvDwSeHKKevSgMwGBuJT6RBQv6S9AjJXloNIeDcuOPaNewq%2BCblerHb7Gmb6EP%2F6AM1oxMP99HH3ClBndG3i3taeyikraRXb8CNnH%2BB55UUf6vmvZO6sTJLT%2B9SbnfiOmr7W3NSUb1xF4T9xQGo4qSr8hFqBLZt7ooiCp8joKF8CqPrTm21HWJqjr84Nph9uThMVhIO50HpTVSEGdFU%2BKoN08Cq3BlPxmq5da9uUkli5p0UWWiXLXKoGHz%2BMS7YP6WhpUwR6B26f%2ByPQ7gaCtmaH9r9nek%2FlMvs3lGtIFqQmoF4eaoQKBDMy4PFveqsl7geJTNrDZV%2BHKqYnvNMsSgqjhhQErJIWrygjc22Fr9GZVHhDDqquu4X3C2MeAQPbSjwS2hfF7x4cLywWREAMatgGmx8YRq1lRmCARfjXiS%2BOEwhN%2F3q4OYCT7r75%2FxUgvX%2FzxA9Su8Ke33qbsUeJKvRCqNCDE3pduS%2B4b6PyUK3Y0tHSOw5K4BXvBvZCWxJyRhpuHuS8%2B2IGDwwmeXw6%2FbaUQ72YQCeORUqkJhpzQ2ieK%2FpCK3hd00uO7bpgnti2pYlhtjhe2nq6N7fMvqC7d5xx9BldXd3af0IcrvvP84edJtH%2Foxd0YumMP6m0MkGOqUBIBxbypo3Z5AIxaTaslb0gNF1z%2FL3CKJi3BjYF1iMcN7FsD4B7GB%2B7pGd4%2FrefRBi0lCdU8roePBQ8Kwu18i24UpaS3VJ3PD39H9eY%2FvDeCapoJtCTxXzbH8tAlJL4Zo1mum5hXfDaIzjp9AJ6fvEqB4F5iZ7HlYTlYCbleXd9BfArbfU6BnCp0eCEfUy5HrYVqbIieE1wrfV5WCrbKVqLofmbFUX&X-Amz-Signature=f1bf294204246d45ad8323d4c150f05b603eed001ef372208cfa574ff3d6281a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

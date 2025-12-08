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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNPGTUD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxD4cBvSmMbsdVp1dGrV2J1p95yiAqJ8Z6wijxCLpC%2BwIhAM5U1q6AktUqjTP%2FmJZn3b0rJ9AMtSTlsvbyMCiM3oikKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyt%2Fmw550LdacUBwEcq3AOPwINbz3P5BDSoZojkA0p0TwRUGmQrHVaUnttnD0yW%2B4DM5yo23pNQIjj4vnClFdPjcPhn7AQd3iaiAWzbL1%2Fwrft8dIyb%2Bh1Jl6b%2BxWGzySWd4uHi97iBrSDXMYnIAxAOcWte5vPOJy%2BD1%2Fw22WuAmrwZq8Up7j8fmbN3M86lZfbOir3AKjBtgWQFKbGQguSB6ewIUuRLcDaQ5JcOkqa2J8hJKox%2FGtFXxtwbsgjk2mXQmIyaUy8cEK0xbODhn4m6CS41croTlEffkJkInlJ4ZGjPPUXZAgwsnhJSu9TIFJpqa1kb7tEEBySffgxZZh5Uo0pA1fIDHjssqrsk8VECRkbRY%2FVCi9midv3KLnmyvvJHXmvW2UI53x%2BJqgS56IyoiupHPUt6YMbAZXF%2FV%2BhCU5UtQamnnaogMKYmwA%2FjLte%2FcWnxvGtuze1XDKqRzcO9%2BXFgo099JyjeTuGo2%2F%2BM3RsxZcDlXQDHi0xGDfoYRZgdiN0oJkZyhUAfOAUVV3F%2FhlTvPQ3Pq9bu%2Bse1v%2FLtErid%2BuLNJVLQkVtGv3joVZHlZMBv5UrBpLknfrmLMDG9c4xNtLgCNmqAnD97wFIk3Hik6eI6Oc2i9OddRkcfqV%2F0x7cii%2BtLtpIWvjCewdvJBjqkAXJXSkxf0Ly6vYQQ4eiFa8XvKlej97qg17ZtPDFbBVsrK7KSjrU2Wg0ytY0B1ryXYqhOx4iW0MmtL1pFEzmeDeJ51NavoO%2BkEZw9o6V7OoQQJhkK9fHZjXNPkglenI7Yqd2YsrnUi71GuSpOUS9tsZcc%2FA53e87WI1cpGxiinLXO5tonz2QmjeFFt%2FtAbhyOYsxsCt3xEq47OqRXviZcGy3iygcH&X-Amz-Signature=14c85d95fdd80db71935da85ca572e3212203899d3fbf8b7fef14288652de4d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNPGTUD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxD4cBvSmMbsdVp1dGrV2J1p95yiAqJ8Z6wijxCLpC%2BwIhAM5U1q6AktUqjTP%2FmJZn3b0rJ9AMtSTlsvbyMCiM3oikKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyt%2Fmw550LdacUBwEcq3AOPwINbz3P5BDSoZojkA0p0TwRUGmQrHVaUnttnD0yW%2B4DM5yo23pNQIjj4vnClFdPjcPhn7AQd3iaiAWzbL1%2Fwrft8dIyb%2Bh1Jl6b%2BxWGzySWd4uHi97iBrSDXMYnIAxAOcWte5vPOJy%2BD1%2Fw22WuAmrwZq8Up7j8fmbN3M86lZfbOir3AKjBtgWQFKbGQguSB6ewIUuRLcDaQ5JcOkqa2J8hJKox%2FGtFXxtwbsgjk2mXQmIyaUy8cEK0xbODhn4m6CS41croTlEffkJkInlJ4ZGjPPUXZAgwsnhJSu9TIFJpqa1kb7tEEBySffgxZZh5Uo0pA1fIDHjssqrsk8VECRkbRY%2FVCi9midv3KLnmyvvJHXmvW2UI53x%2BJqgS56IyoiupHPUt6YMbAZXF%2FV%2BhCU5UtQamnnaogMKYmwA%2FjLte%2FcWnxvGtuze1XDKqRzcO9%2BXFgo099JyjeTuGo2%2F%2BM3RsxZcDlXQDHi0xGDfoYRZgdiN0oJkZyhUAfOAUVV3F%2FhlTvPQ3Pq9bu%2Bse1v%2FLtErid%2BuLNJVLQkVtGv3joVZHlZMBv5UrBpLknfrmLMDG9c4xNtLgCNmqAnD97wFIk3Hik6eI6Oc2i9OddRkcfqV%2F0x7cii%2BtLtpIWvjCewdvJBjqkAXJXSkxf0Ly6vYQQ4eiFa8XvKlej97qg17ZtPDFbBVsrK7KSjrU2Wg0ytY0B1ryXYqhOx4iW0MmtL1pFEzmeDeJ51NavoO%2BkEZw9o6V7OoQQJhkK9fHZjXNPkglenI7Yqd2YsrnUi71GuSpOUS9tsZcc%2FA53e87WI1cpGxiinLXO5tonz2QmjeFFt%2FtAbhyOYsxsCt3xEq47OqRXviZcGy3iygcH&X-Amz-Signature=55d75f1f524b3bdcebea1782efda46090e629e8d271f3263f00bb25889c33540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

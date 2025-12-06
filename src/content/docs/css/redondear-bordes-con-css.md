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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XQOSYCT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfZTlPbRWyv7w%2FjtTl7CnYJsooZaqCCbIZQgDOUV8%2BnAIgZTj67nWYritZZy6jzWjPJL9ZmzAFM7ohLDeSw1DlMzYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDLUbgzdcrMXU3dO1eSrcA8oUo8T2athk2S1r9%2B%2BOUw8aCjrpBuhEgSWkSPCH2SYm7OtTNrgfrGyEAj6isQSxuMpdJkAWvG3ZEOJbrboGys%2F5g0VcRwXP%2BgQdELPwclSWtpxgu0jud2M62%2FjuG%2FecgUTdRlAJsqTlA1DOfJrBwm2bhYXw7mxv56XMIgsjq7%2F8Y3T8bQyfAtLrBJnVX4suOeOxPAXhJ6cHB2f0Q%2BZ1CJicxWAjNdZs3Yyk2T6ETSQd1G6flwfc%2F8Q2iXXLHUEz0SCoL9gsIUXjWsdQ40Ukownz7%2BzuiC8LMWj6Mf1EKvfVS97hamgQkgvr1zDS6867kbyyCKht2640TvqaPVQKlyU4%2F8tLC1%2BwDIeAHiuE1F2pRSYCDNhfm6hWXJYk56geml5MbBtMj9RMX5ekdx4WThuCa4LKQnvCZmQjaA5dWp%2FRaAHwxoYWKgOQnF3a8HiW1MxB22Hc4%2BHW%2Bref%2Bj0aFQRENjMZWJtT2P6O2D%2BvFzXYjC6V3CM903G%2FJggeNYn7t15WHh3LoMm%2F3aomDfZ3NUn%2F6gbjbY8FzJOfqJNXIuT0qnrpy2Qt029GF9%2BWy%2B2aKQTLJLasmWY8zbGo81wQoXNcm2dc%2BjMfa2i1xhvaY9kJiNN9JE4KcfGptTkSMKnozckGOqUBIZHlr5QbhmsATAXQOQm%2FBBeMRchCREUlxsubM6SEYpbSTZfTg5MdP%2FsXTc7xMZarVTTG%2B0%2FGEjvPkspU5j1C0dVDWfe5xMMaVbnrU599WrFxva0BxMIc1FcnbNUhKPI863RY550TSkvYZ3Koy1xsLiBvGuyMVkZjGPtgpvMTnAserOmpDf6B3hWIy35j%2Ft8bYoQDJYceQkq98vGS7hSw3o3MO1Fa&X-Amz-Signature=a7836c0203b5cfbae4efd20ab4fb3894eba05162615524d4bdba5664bd1df143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XQOSYCT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfZTlPbRWyv7w%2FjtTl7CnYJsooZaqCCbIZQgDOUV8%2BnAIgZTj67nWYritZZy6jzWjPJL9ZmzAFM7ohLDeSw1DlMzYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDLUbgzdcrMXU3dO1eSrcA8oUo8T2athk2S1r9%2B%2BOUw8aCjrpBuhEgSWkSPCH2SYm7OtTNrgfrGyEAj6isQSxuMpdJkAWvG3ZEOJbrboGys%2F5g0VcRwXP%2BgQdELPwclSWtpxgu0jud2M62%2FjuG%2FecgUTdRlAJsqTlA1DOfJrBwm2bhYXw7mxv56XMIgsjq7%2F8Y3T8bQyfAtLrBJnVX4suOeOxPAXhJ6cHB2f0Q%2BZ1CJicxWAjNdZs3Yyk2T6ETSQd1G6flwfc%2F8Q2iXXLHUEz0SCoL9gsIUXjWsdQ40Ukownz7%2BzuiC8LMWj6Mf1EKvfVS97hamgQkgvr1zDS6867kbyyCKht2640TvqaPVQKlyU4%2F8tLC1%2BwDIeAHiuE1F2pRSYCDNhfm6hWXJYk56geml5MbBtMj9RMX5ekdx4WThuCa4LKQnvCZmQjaA5dWp%2FRaAHwxoYWKgOQnF3a8HiW1MxB22Hc4%2BHW%2Bref%2Bj0aFQRENjMZWJtT2P6O2D%2BvFzXYjC6V3CM903G%2FJggeNYn7t15WHh3LoMm%2F3aomDfZ3NUn%2F6gbjbY8FzJOfqJNXIuT0qnrpy2Qt029GF9%2BWy%2B2aKQTLJLasmWY8zbGo81wQoXNcm2dc%2BjMfa2i1xhvaY9kJiNN9JE4KcfGptTkSMKnozckGOqUBIZHlr5QbhmsATAXQOQm%2FBBeMRchCREUlxsubM6SEYpbSTZfTg5MdP%2FsXTc7xMZarVTTG%2B0%2FGEjvPkspU5j1C0dVDWfe5xMMaVbnrU599WrFxva0BxMIc1FcnbNUhKPI863RY550TSkvYZ3Koy1xsLiBvGuyMVkZjGPtgpvMTnAserOmpDf6B3hWIy35j%2Ft8bYoQDJYceQkq98vGS7hSw3o3MO1Fa&X-Amz-Signature=cd4c9b741cf3c95e7fa869882403328a7b3e172f24cb224f004c2c8ab79c71a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
